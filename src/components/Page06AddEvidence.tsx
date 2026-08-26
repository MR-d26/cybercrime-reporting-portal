import React, { useState, useRef } from 'react';
import { useApp, UploadedFileItem } from '../context/AppContext';
import { ProgressStepper } from './ProgressStepper';
import {
  Upload,
  FileCheck,
  Trash2,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  FileText,
  Image as ImageIcon,
  ArrowLeft,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const Page06AddEvidence: React.FC = () => {
  const {
    t,
    selectedCategory,
    uploadedFiles,
    setUploadedFiles,
    noEvidenceChecked,
    setNoEvidenceChecked,
    additionalEvidenceNotes,
    setAdditionalEvidenceNotes,
    setCurrentPage,
    saveDraft
  } = useApp();

  const [validationError, setValidationError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const allowedExtensions = ['png', 'jpg', 'jpeg', 'pdf'];
  const maxSizeBytes = 10 * 1024 * 1024; // 10MB

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setValidationError(null);

    const newItems: UploadedFileItem[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = file.name.split('.').pop()?.toLowerCase() || '';

      if (!allowedExtensions.includes(ext)) {
        setValidationError(t.invalidFileError);
        continue;
      }

      if (file.size > maxSizeBytes) {
        setValidationError(`File "${file.name}" exceeds maximum size limit of 10MB.`);
        continue;
      }

      newItems.push({
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        name: file.name,
        size: file.size,
        type: file.type || ext.toUpperCase(),
        uploadedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }

    if (newItems.length > 0) {
      setUploadedFiles((prev) => [...prev, ...newItems]);
      if (noEvidenceChecked) setNoEvidenceChecked(false);
      saveDraft({ uploadedFiles: [...uploadedFiles, ...newItems], noEvidenceChecked: false });
    }
  };

  const handleRemoveFile = (id: string) => {
    const updated = uploadedFiles.filter(item => item.id !== id);
    setUploadedFiles(updated);
    saveDraft({ uploadedFiles: updated });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleBack = () => {
    setCurrentPage(5);
  };

  const handleContinue = () => {
    saveDraft({ step: 6 });
    setCurrentPage(7);
  };

  const cat = selectedCategory || 'financial';

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F6] relative overflow-hidden">
      {/* 1. Official Approved Background Image Asset for Page 06 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-85"
        style={{ backgroundImage: "url('/images/indian-cybercrime-background.png')" }}
        aria-hidden="true"
      />
      {/* Soft warm overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/75 to-transparent pointer-events-none" aria-hidden="true" />

      {/* 2. Progress Stepper Bar (Step 5 Active) */}
      <ProgressStepper activeStep={5} />

      {/* 3. Main Content Container */}
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex-1 flex flex-col justify-between relative z-10">
        
        <div className="space-y-6">
          {/* Header Title & Subtitle */}
          <div className="text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gov-navy leading-tight">
              {t.evidenceTitle}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#E65100]">
              {t.evidenceSubtitle}
            </p>
          </div>

          {/* MAIN EVIDENCE CONTAINER CARD */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-gov p-6 md:p-8 space-y-6 text-left">
            
            {/* HELPFUL EVIDENCE GUIDANCE BOX */}
            <div className="bg-emerald-50/70 border border-emerald-200 p-5 rounded-xl space-y-2.5">
              <div className="flex items-center gap-2 text-gov-navy font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>{t.whatCanUploadTitle}</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-700 pl-2">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>{t.evidenceCheck1}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>{t.evidenceCheck2}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>{t.evidenceCheck3}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>{t.evidenceCheck4}</span>
                </li>
              </ul>
            </div>

            {/* INTERACTIVE FILE UPLOAD DROPZONE */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${
                isDragging
                  ? 'border-gov-navy bg-blue-50/80 scale-[1.01]'
                  : 'border-gray-300 hover:border-gov-navy hover:bg-gray-50/80'
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFiles(e.target.files)}
                multiple
                accept=".png,.jpg,.jpeg,.pdf"
                className="hidden"
              />
              <div className="w-16 h-16 rounded-full bg-blue-100/80 text-gov-navy flex items-center justify-center mx-auto mb-3">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-base font-extrabold text-gov-navy">
                {t.uploadAreaTitle}
              </h3>
              <p className="text-xs text-gray-500 font-medium mt-1">
                {t.uploadAreaSub}
              </p>
              <button
                type="button"
                className="mt-4 bg-[#0F2540] hover:bg-[#1A365D] text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-xs transition-colors"
              >
                {t.uploadBtn}
              </button>
            </div>

            {/* FRIENDLY VALIDATION ERROR NOTICE */}
            {validationError && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl animate-in fade-in duration-150">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            {/* UPLOADED FILES LIST */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Uploaded Files ({uploadedFiles.length})
                </h4>
                <div className="space-y-2">
                  {uploadedFiles.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-3.5 bg-gray-50 border border-gray-200 rounded-xl transition-all hover:bg-gray-100/80"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {file.name.endsWith('.pdf') ? (
                          <FileText className="w-5 h-5 text-red-600 shrink-0" />
                        ) : (
                          <ImageIcon className="w-5 h-5 text-blue-600 shrink-0" />
                        )}
                        <div className="min-w-0">
                          <span className="font-bold text-sm text-gov-navy truncate block">
                            {file.name}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">
                            {formatFileSize(file.size)} • {file.uploadedAt}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFile(file.id);
                        }}
                        className="flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-800 p-1.5 rounded-lg hover:bg-red-50 transition-colors shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>{t.removeFileBtn}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* "I DON'T HAVE EVIDENCE RIGHT NOW" NON-BLOCKING CHECKBOX */}
            <div className="pt-2 border-t border-gray-100 space-y-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={noEvidenceChecked}
                  onChange={(e) => {
                    setNoEvidenceChecked(e.target.checked);
                    saveDraft({ noEvidenceChecked: e.target.checked });
                  }}
                  className="w-4 h-4 rounded text-gov-navy focus:ring-gov-navy"
                />
                <span className="text-xs font-bold text-gray-800">
                  {t.noEvidenceOption}
                </span>
              </label>
              <p className="text-xs text-gray-500 pl-6 font-medium">
                {t.noEvidenceNotice}
              </p>
            </div>

            {/* OPTIONAL ADDITIONAL NOTES FIELD */}
            <div className="pt-2 space-y-2">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                {t.additionalNotesLabel}
              </label>
              <textarea
                value={additionalEvidenceNotes}
                onChange={(e) => setAdditionalEvidenceNotes(e.target.value)}
                rows={3}
                placeholder={t.additionalNotesPlaceholder}
                className="w-full p-3.5 rounded-xl border border-gray-300 outline-none text-sm text-gray-800 placeholder-gray-400 focus:border-gov-navy focus:ring-2 focus:ring-gov-navy/20 resize-none"
              />
            </div>

          </div>
        </div>

        {/* 4. Bottom Action Navigation Bar */}
        <div className="mt-8 flex items-center justify-between pt-4 border-t border-gray-200/80">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-gray-700 hover:text-gov-navy font-bold text-sm hover:underline outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backBtn}</span>
          </button>

          <button
            onClick={handleContinue}
            className="flex items-center gap-2.5 bg-[#0F2540] hover:bg-[#1A365D] text-white font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 focus:ring-4 focus:ring-amber-300 outline-none cursor-pointer"
          >
            <span>{t.continueToSubmitBtn.replace('→', '').trim()}</span>
            <ArrowRight className="w-5 h-5 text-amber-300" />
          </button>
        </div>
      </main>
    </div>
  );
};
