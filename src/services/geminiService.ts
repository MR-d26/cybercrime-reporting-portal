import { CategoryId } from '../utils/complaintRouter';

export interface GeminiAnalysisResult {
  suggestedCategory: string;
  explanation: string;
  confidence?: 'high' | 'medium' | 'low';
  whatHappened: string;
  amount: string | null;
  date: string | null;
  time: string | null;
  method: string | null;
  transactionId: string | null;
  platform: string | null;
  suspectUsername: string | null;
  suspectProfileUrl: string | null;
  phoneNumber: string | null;
  email: string | null;
  bank: string | null;
  upiId: string | null;
  website: string | null;
  companyName: string | null;
  missingInformation: string[];
  helpfulEvidence: string[];
  mappedCategoryId: CategoryId;
}

export const mapCategoryNameToId = (categoryName: string): CategoryId => {
  const lower = (categoryName || '').toLowerCase();
  
  // 1. Account / Identity Takeover Check (Must take precedence over financial keywords if account takeover occurred)
  if (
    lower.includes('account') ||
    lower.includes('identity') ||
    lower.includes('takeover') ||
    lower.includes('instagram') ||
    lower.includes('facebook') ||
    lower.includes('whatsapp') ||
    lower.includes('social') ||
    lower.includes('hacked') ||
    lower.includes('login') ||
    lower.includes('password')
  ) {
    return 'account_identity';
  }

  // 2. Harassment Check
  if (
    lower.includes('harassment') ||
    lower.includes('threat') ||
    lower.includes('blackmail') ||
    lower.includes('abuse') ||
    lower.includes('stalking') ||
    lower.includes('extortion')
  ) {
    return 'harassment';
  }

  // 3. Job Fraud Check
  if (
    lower.includes('job') ||
    lower.includes('employment') ||
    lower.includes('work') ||
    lower.includes('recruitment')
  ) {
    return 'job_fraud';
  }

  // 4. Financial Fraud Check
  if (
    lower.includes('financial') ||
    lower.includes('money') ||
    lower.includes('upi') ||
    lower.includes('bank') ||
    lower.includes('payment') ||
    lower.includes('deducted') ||
    lower.includes('card')
  ) {
    return 'financial';
  }

  return 'other';
};

export const analyzeComplaintWithGemini = async (
  complaintText: string
): Promise<GeminiAnalysisResult> => {
  if (!complaintText || !complaintText.trim()) {
    throw new Error("Complaint text is empty.");
  }

  console.log(`[GeminiService Client] Calling /api/gemini/analyze for text length ${complaintText.length}...`);

  const response = await fetch('/api/gemini/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: complaintText })
  });

  console.log(`[GeminiService Client] Server response status: ${response.status}`);

  if (!response.ok) {
    const errorJson = await response.json().catch(() => null);
    const errMessage = typeof errorJson?.error === 'string'
      ? errorJson.error
      : (errorJson?.error?.message || errorJson?.message || errorJson?.details || `Gemini API returned status ${response.status}`);
    
    console.error("[GeminiService Client] API Error response:", errorJson);
    throw new Error(errMessage);
  }

  const data = await response.json();
  const analysis = data.analysis;

  if (!analysis || typeof analysis !== 'object') {
    console.error("[GeminiService Client] Invalid structured output:", data);
    throw new Error("Invalid structured JSON output received from Gemini API.");
  }

  const categoryName = analysis.suggestedCategory || 'Other Cybercrime';
  const mappedId = mapCategoryNameToId(categoryName);

  console.log(`[GeminiService Client] Success! Category: "${categoryName}" (Mapped ID: "${mappedId}")`, analysis);

  return {
    suggestedCategory: categoryName,
    explanation: analysis.explanation || "Based on what you described, this path fits your complaint best.",
    confidence: analysis.confidence || 'medium',
    whatHappened: analysis.whatHappened || complaintText,
    amount: analysis.amount || null,
    date: analysis.date || null,
    time: analysis.time || null,
    method: analysis.method || null,
    transactionId: analysis.transactionId || null,
    platform: analysis.platform || null,
    suspectUsername: analysis.suspectUsername || null,
    suspectProfileUrl: analysis.suspectProfileUrl || null,
    phoneNumber: analysis.phoneNumber || null,
    email: analysis.email || null,
    bank: analysis.bank || null,
    upiId: analysis.upiId || null,
    website: analysis.website || null,
    companyName: analysis.companyName || null,
    missingInformation: Array.isArray(analysis.missingInformation) ? analysis.missingInformation : [],
    helpfulEvidence: Array.isArray(analysis.helpfulEvidence) ? analysis.helpfulEvidence : [],
    mappedCategoryId: mappedId
  };
};
