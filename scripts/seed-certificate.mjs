/**
 * One-off / occasional script to publish (or update) a certificate record in
 * Firestore + upload its certificate file (PDF or image) to Firebase Storage,
 * using the Firebase Admin SDK (full read/write access, bypasses security rules).
 *
 * This is intentionally NOT wired into the Next.js app — run it manually
 * whenever you need to issue or update a certificate.
 *
 * Setup (one time):
 *   1. npm install --save-dev firebase-admin
 *   2. In Firebase Console → Project settings → Service accounts →
 *      "Generate new private key". Save the JSON file OUTSIDE the repo
 *      (e.g. one folder above delito-landing) and point to it via the
 *      FIREBASE_SERVICE_ACCOUNT_PATH env var — never hardcode/commit it.
 *   3. Update CERTIFICATE_INPUT below (or pass a JSON file path as argv[2]).
 *
 * Usage (PowerShell):
 *   $env:FIREBASE_SERVICE_ACCOUNT_PATH="C:\path\to\service-account.json"; node scripts/seed-certificate.mjs
 *   node scripts/seed-certificate.mjs ./scripts/certificates/anmol.json
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Path to the downloaded service-account JSON (keep this file OUT of git).
// Always pass this via the FIREBASE_SERVICE_ACCOUNT_PATH env var.
const SERVICE_ACCOUNT_PATH = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;

// The Storage bucket for this Firebase project (see NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET in .env.local).
const STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET ?? "platoos-9e128.firebasestorage.app";

// Local path to the certificate file to upload (PDF or image — extension is preserved).
const CERTIFICATE_FILE_PATH = path.join(__dirname, "..", "certificate", "certificate_anmol_upadhyay.png");

const CONTENT_TYPES = { ".pdf": "application/pdf", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg" };

// Edit these fields per certificate, or load them from a JSON file passed as argv[2].
const CERTIFICATE_INPUT = {
  id: "DELITO-INT-2026-001",
  recipientName: "Anmol Upadhyay",
  role: "Software Development Intern",
  type: "Internship Completion Certificate",
  issuedBy: "Delito Foods",
  issueDate: "2026-07-01",
  status: "active", // "active" | "revoked"
  description: "Awarded for successfully completing the Delito software development internship.",
};

async function main() {
  if (!SERVICE_ACCOUNT_PATH) {
    throw new Error(
      "Set FIREBASE_SERVICE_ACCOUNT_PATH to the absolute path of your downloaded service-account JSON."
    );
  }
  const serviceAccount = JSON.parse(readFileSync(SERVICE_ACCOUNT_PATH, "utf-8"));

  const app = initializeApp({
    credential: cert(serviceAccount),
    storageBucket: STORAGE_BUCKET,
  });

  const input = process.argv[2] ? JSON.parse(readFileSync(process.argv[2], "utf-8")) : CERTIFICATE_INPUT;
  const id = input.id.trim().toUpperCase();
  const ext = path.extname(CERTIFICATE_FILE_PATH).toLowerCase();
  const contentType = CONTENT_TYPES[ext] ?? "application/octet-stream";

  const bucket = getStorage(app).bucket();
  const destination = `certificates/${id}${ext}`;
  await bucket.upload(CERTIFICATE_FILE_PATH, {
    destination,
    metadata: { contentType },
  });
  const file = bucket.file(destination);
  await file.makePublic();
  const fileUrl = `https://storage.googleapis.com/${bucket.name}/${destination}`;

  await getFirestore(app)
    .collection("certificates")
    .doc(id)
    .set({ ...input, id, fileUrl }, { merge: true });

  console.log(`✅ Certificate ${id} published.`);
  console.log(`   File: ${fileUrl}`);
  console.log(`   Verify page: https://www.delitofoods.com/certificate/${id}`);
}

main().catch((err) => {
  console.error("❌ Failed to publish certificate:", err);
  process.exit(1);
});
