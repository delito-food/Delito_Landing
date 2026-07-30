"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, ShieldAlert, Eye, Download, X, User, Building2, CalendarDays, Tag } from "lucide-react";
import type { CertificateRecord } from "@/lib/certificates";

export default function CertificateResultCard({ certificate }: { certificate: CertificateRecord }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const isRevoked = certificate.status === "revoked";
  const isPdf = certificate.fileUrl?.toLowerCase().includes(".pdf");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden"
      >
        {/* Status banner */}
        <div
          className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold ${
            isRevoked ? "bg-red-50 text-red-700" : "bg-green-pale text-green-dark"
          }`}
        >
          {isRevoked ? <ShieldAlert className="w-4 h-4" /> : <BadgeCheck className="w-4 h-4" />}
          {isRevoked ? "This certificate has been revoked" : "Certificate verified — legitimately issued by Delito"}
        </div>

        <div className="p-6 md:p-8 space-y-5">
          <div>
            <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-1">
              {certificate.type}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-text-main">{certificate.recipientName}</h3>
            {certificate.role && <p className="text-green-mid font-medium mt-0.5">{certificate.role}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-text-muted">
              <Building2 className="w-4 h-4 shrink-0" />
              Issued by <span className="text-text-main font-medium">{certificate.issuedBy}</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <CalendarDays className="w-4 h-4 shrink-0" />
              Issue date <span className="text-text-main font-medium">{certificate.issueDate}</span>
            </div>
            {certificate.validUntil && (
              <div className="flex items-center gap-2 text-text-muted">
                <CalendarDays className="w-4 h-4 shrink-0" />
                Valid until <span className="text-text-main font-medium">{certificate.validUntil}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-text-muted">
              <Tag className="w-4 h-4 shrink-0" />
              Certificate ID <span className="text-text-main font-mono font-medium">{certificate.id}</span>
            </div>
          </div>

          {certificate.description && (
            <p className="text-sm text-text-muted leading-relaxed bg-green-pale/40 border border-green-light/50 rounded-2xl p-4">
              {certificate.description}
            </p>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setPreviewOpen(true)}
              disabled={!certificate.fileUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-dark text-white text-sm font-semibold hover:bg-green-mid transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <a
              href={certificate.fileUrl || undefined}
              download
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!certificate.fileUrl}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-green-dark text-green-dark text-sm font-semibold hover:bg-green-pale transition-colors ${
                !certificate.fileUrl ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>
        </div>
      </motion.div>

      {/* Preview modal */}
      <AnimatePresence>
        {previewOpen && certificate.fileUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/70 flex items-center justify-center p-4"
            onClick={() => setPreviewOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl h-[85vh] relative shadow-2xl"
            >
              <button
                onClick={() => setPreviewOpen(false)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-text-main hover:bg-gray-100"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
              {isPdf ? (
                <iframe src={certificate.fileUrl} title="Certificate preview" className="w-full h-full" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={certificate.fileUrl}
                  alt={`${certificate.recipientName} certificate`}
                  className="w-full h-full object-contain bg-gray-50"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function CertificateNotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-red-50 border border-red-100 rounded-3xl p-8 text-center"
    >
      <User className="w-10 h-10 text-red-400 mx-auto mb-3" />
      <h3 className="text-lg font-bold text-red-700 mb-1">No certificate found</h3>
      <p className="text-sm text-red-600/80">
        We couldn&apos;t find a certificate with that ID. Double-check the code printed on the certificate and try again.
      </p>
    </motion.div>
  );
}
