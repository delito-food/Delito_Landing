"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2, ShieldCheck } from "lucide-react";
import { getCertificateById, type CertificateRecord } from "@/lib/certificates";
import CertificateResultCard, { CertificateNotFound } from "@/components/CertificateResultCard";

interface CertificateVerifyProps {
  /** Pre-fill and auto-search, used by the direct /certificate/[id] link. */
  initialId?: string;
}

export default function CertificateVerify({ initialId }: CertificateVerifyProps) {
  const [inputId, setInputId] = useState(initialId ?? "");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<CertificateRecord | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function runSearch(id: string) {
    if (!id.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const cert = await getCertificateById(id);
      setResult(cert);
      setSearched(true);
    } catch {
      setError("Something went wrong while verifying this certificate. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (initialId) {
      runSearch(initialId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialId]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    runSearch(inputId);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="w-14 h-14 rounded-2xl bg-green-pale flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="w-7 h-7 text-green-dark" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-2">Verify a Delito Certificate</h1>
        <p className="text-text-muted text-sm md:text-base">
          Enter the Certificate ID printed on the document to confirm it was legitimately issued by Delito.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          placeholder="e.g. DELITO-INT-2026-001"
          className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:border-green-mid focus:outline-none text-sm font-mono tracking-wide"
        />
        <button
          type="submit"
          disabled={loading || !inputId.trim()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-dark text-white font-semibold text-sm hover:bg-green-mid transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
          Verify
        </button>
      </form>

      {error && <p className="text-center text-sm text-red-600 mb-6">{error}</p>}

      {!loading && searched && (result ? <CertificateResultCard certificate={result} /> : <CertificateNotFound />)}
    </div>
  );
}
