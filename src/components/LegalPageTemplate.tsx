"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, FileText, ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { AppLegalDocs, LegalDocument, LegalSection } from "@/lib/legalData";

interface LegalPageTemplateProps {
  appName: string;
  appIcon: string;
  appColor: string;
  docs: AppLegalDocs;
}

function SectionItem({ section }: { section: LegalSection }) {
  const [open, setOpen] = useState(false);
  const hasChildren =
    (Array.isArray(section.content) && section.content.length > 0) ||
    (typeof section.content === "string" && section.content.length > 0) ||
    (section.subSections && section.subSections.length > 0);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-green-pale/60 transition-colors text-left"
      >
        <span className="font-semibold text-text-main text-sm md:text-base pr-4">{section.heading}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
          <ChevronDown className="w-5 h-5 text-green-mid" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 py-4 bg-green-pale/30 border-t border-gray-100 space-y-4">
              {typeof section.content === "string" && section.content && (
                <p className="text-sm text-text-muted leading-relaxed">{section.content}</p>
              )}
              {Array.isArray(section.content) && section.content.length > 0 && (
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-text-muted leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-mid shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.subSections?.map((sub, si) => (
                <div key={si} className="mt-3">
                  <h4 className="font-semibold text-sm text-green-dark mb-2">{sub.heading}</h4>
                  {typeof sub.content === "string" ? (
                    <p className="text-sm text-text-muted leading-relaxed">{sub.content}</p>
                  ) : (
                    <ul className="space-y-2">
                      {(sub.content as string[]).map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-text-muted leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-mid/60 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DocView({ doc }: { doc: LegalDocument }) {
  return (
    <div>
      {/* Meta */}
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="flex items-center gap-1.5 text-xs text-text-muted bg-white border border-gray-100 rounded-full px-3 py-1.5">
          <Calendar className="w-3.5 h-3.5" />
          Effective: {doc.effectiveDate}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-text-muted bg-white border border-gray-100 rounded-full px-3 py-1.5">
          <Tag className="w-3.5 h-3.5" />
          Version {doc.version}
        </span>
      </div>

      {/* Intro */}
      <p className="text-sm md:text-base text-text-muted leading-relaxed mb-6 p-4 bg-green-pale rounded-2xl border border-green-light/50">
        {doc.intro}
      </p>

      {/* Sections */}
      <div>
        {doc.sections.map((section, i) => (
          <SectionItem key={i} section={section} />
        ))}
      </div>
    </div>
  );
}

function LegalPageContent({ appName, appIcon, appColor, docs }: LegalPageTemplateProps) {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "terms" ? "terms" : "privacy";
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">(initialTab);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "terms" || tab === "privacy") setActiveTab(tab);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#f8fdf8]">
      {/* Header */}
      <div className="bg-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/legal"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Legal Hub
          </Link>

          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg shrink-0"
              style={{ border: `2px solid ${appColor}44` }}
            >
              {appIcon.startsWith("/") ? (
                <Image
                  src={appIcon}
                  alt={appName}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-3xl"
                  style={{ backgroundColor: appColor + "22" }}
                >
                  {appIcon}
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{appName}</h1>
              <p className="text-white/60 text-sm mt-1">Legal Documentation</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-8">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "privacy"
                  ? "bg-yellow text-green-dark shadow-md"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "terms"
                  ? "bg-yellow text-green-dark shadow-md"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              <FileText className="w-4 h-4" />
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-text-main mb-2">
              {activeTab === "privacy" ? docs.privacyPolicy.title : docs.termsAndConditions.title}
            </h2>
            <DocView doc={activeTab === "privacy" ? docs.privacyPolicy : docs.termsAndConditions} />
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <div className="mt-10 p-5 bg-white border border-gray-100 rounded-2xl text-center text-xs text-text-muted">
          For any questions about these policies, contact us at{" "}
          <a href="mailto:grievance@delito.in" className="text-green-mid font-medium hover:underline">
            grievance@delito.in
          </a>{" "}
          or{" "}
          <a href="mailto:Delitosupportt@gmail.com" className="text-green-mid font-medium hover:underline">
            Delitosupportt@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default function LegalPageTemplate(props: LegalPageTemplateProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fdf8] flex items-center justify-center"><div className="w-8 h-8 border-4 border-green-mid border-t-transparent rounded-full animate-spin" /></div>}>
      <LegalPageContent {...props} />
    </Suspense>
  );
}
