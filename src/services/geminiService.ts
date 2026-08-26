import { CategoryId } from '../utils/complaintRouter';

export interface GeminiAnalysisResult {
  suggestedCategory: string;
  explanation: string;
  whatHappened: string;
  amount: string | null;
  date: string | null;
  time: string | null;
  method: string | null;
  transactionId: string | null;
  platform: string | null;
  phoneNumber: string | null;
  website: string | null;
  missingInformation: string[];
  helpfulEvidence: string[];
  mappedCategoryId: CategoryId;
}

export const mapCategoryNameToId = (categoryName: string): CategoryId => {
  const lower = (categoryName || '').toLowerCase();
  if (lower.includes('financial') || lower.includes('money') || lower.includes('upi') || lower.includes('bank') || lower.includes('payment')) {
    return 'financial';
  }
  if (lower.includes('account') || lower.includes('identity') || lower.includes('social') || lower.includes('hack')) {
    return 'account_identity';
  }
  if (lower.includes('harassment') || lower.includes('threat') || lower.includes('blackmail') || lower.includes('abuse')) {
    return 'harassment';
  }
  if (lower.includes('job') || lower.includes('employment') || lower.includes('work')) {
    return 'job_fraud';
  }
  return 'other';
};

export const analyzeComplaintWithGemini = async (
  complaintText: string
): Promise<GeminiAnalysisResult> => {
  if (!complaintText || !complaintText.trim()) {
    throw new Error("Complaint text is empty.");
  }

  const response = await fetch('/api/gemini/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: complaintText })
  });

  if (!response.ok) {
    const errorJson = await response.json().catch(() => null);
    if (errorJson?.error?.includes('GEMINI_API_KEY')) {
      throw new Error(errorJson.error);
    }
    throw new Error(errorJson?.message || errorJson?.error || `Gemini API returned status ${response.status}`);
  }

  const data = await response.json();
  const analysis = data.analysis;

  if (!analysis || typeof analysis !== 'object') {
    throw new Error("Invalid structured JSON output received from Gemini API.");
  }

  const categoryName = analysis.suggestedCategory || 'Other Cybercrime';
  const mappedId = mapCategoryNameToId(categoryName);

  return {
    suggestedCategory: categoryName,
    explanation: analysis.explanation || "Based on what you described, this path fits your complaint best.",
    whatHappened: analysis.whatHappened || complaintText,
    amount: analysis.amount || null,
    date: analysis.date || null,
    time: analysis.time || null,
    method: analysis.method || null,
    transactionId: analysis.transactionId || null,
    platform: analysis.platform || null,
    phoneNumber: analysis.phoneNumber || null,
    website: analysis.website || null,
    missingInformation: Array.isArray(analysis.missingInformation) ? analysis.missingInformation : [],
    helpfulEvidence: Array.isArray(analysis.helpfulEvidence) ? analysis.helpfulEvidence : [],
    mappedCategoryId: mappedId
  };
};
