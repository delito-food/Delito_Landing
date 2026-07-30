import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export type CertificateStatus = "active" | "revoked";

export interface CertificateRecord {
  /** Certificate ID / verification code, e.g. "DELITO-INT-2026-001" */
  id: string;
  recipientName: string;
  /** e.g. "Software Development Intern" */
  role: string;
  /** e.g. "Internship Completion Certificate" */
  type: string;
  issuedBy: string;
  issueDate: string;
  validFrom?: string;
  validUntil?: string;
  status: CertificateStatus;
  /** Public download URL for the certificate PDF (Firebase Storage). */
  fileUrl: string;
  /** Optional thumbnail/preview image URL. */
  previewImageUrl?: string;
  description?: string;
}

const CERTIFICATES_COLLECTION = "certificates";

/**
 * Normalizes a user-entered certificate ID into the canonical document key.
 * Certificate IDs are stored upper-cased with no surrounding whitespace.
 */
export function normalizeCertificateId(rawId: string): string {
  return rawId.trim().toUpperCase();
}

/**
 * Looks up a certificate by its ID directly from Firestore.
 * Returns null when no certificate exists with that ID.
 */
export async function getCertificateById(rawId: string): Promise<CertificateRecord | null> {
  const id = normalizeCertificateId(rawId);
  if (!id) return null;

  const ref = doc(db, CERTIFICATES_COLLECTION, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;

  const data = snap.data();
  return {
    id: snap.id,
    recipientName: data.recipientName ?? "",
    role: data.role ?? "",
    type: data.type ?? "Certificate",
    issuedBy: data.issuedBy ?? "Delito",
    issueDate: data.issueDate ?? "",
    validFrom: data.validFrom,
    validUntil: data.validUntil,
    status: (data.status as CertificateStatus) ?? "active",
    fileUrl: data.fileUrl ?? "",
    previewImageUrl: data.previewImageUrl,
    description: data.description,
  };
}
