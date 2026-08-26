import { LanguageCode } from '../i18n/translations';

export type CategoryId =
  | 'financial'
  | 'account_identity'
  | 'harassment'
  | 'job_fraud'
  | 'other';

export interface PathSuggestion {
  categoryId: CategoryId;
  titleKey: string;
  explanationKey: string;
  iconName: 'CreditCard' | 'UserCheck' | 'ShieldAlert' | 'Briefcase' | 'HelpCircle';
}

export interface AnalysisResult {
  suggestedCategory: CategoryId;
  extractedIncident: string;
  extractedAmount?: string;
  extractedMethod: string;
}

/**
 * Isolated complaint routing logic.
 * Currently uses prototype keyword matching rules to demonstrate UX.
 * Can be cleanly swapped for Gemini API later without redesigning UI.
 */
export const suggestPathFromStory = (storyText: string): CategoryId => {
  const text = storyText.toLowerCase();

  // Financial Fraud Keywords
  const financialKeywords = [
    'money', 'bank', 'upi', 'transaction', 'payment', 'deducted', 'fraud',
    '₹', 'rupees', 'otp', 'account', 'bill', 'electricity', 'card',
    'credit', 'debit', 'scam', 'cash', 'transfer', 'wallet', 'gpay', 'phonepe'
  ];
  if (financialKeywords.some(kw => text.includes(kw))) {
    return 'financial';
  }

  // Account / Identity Keywords
  const accountKeywords = [
    'account hacked', 'instagram', 'facebook', 'whatsapp', 'social media',
    'password', 'account takeover', 'profile', 'hacked', 'hacker', 'identity',
    'impersonat', 'stolen account'
  ];
  if (accountKeywords.some(kw => text.includes(kw))) {
    return 'account_identity';
  }

  // Harassment Keywords
  const harassmentKeywords = [
    'harassment', 'threat', 'blackmail', 'abuse', 'messages', 'stalking',
    'photos', 'leaked', 'extortion', 'nude', 'private', 'bully'
  ];
  if (harassmentKeywords.some(kw => text.includes(kw))) {
    return 'harassment';
  }

  // Job Fraud Keywords
  const jobKeywords = [
    'job', 'work from home', 'recruitment', 'registration fee', 'job offer',
    'part time', 'salary', 'task', 'commission', 'telegram job'
  ];
  if (jobKeywords.some(kw => text.includes(kw))) {
    return 'job_fraud';
  }

  return 'other';
};

export const analyzeComplaint = (storyText: string): AnalysisResult => {
  const cat = suggestPathFromStory(storyText);

  // Extract simple amount if present e.g. ₹10,000 or 10000
  let extractedAmount: string | undefined = undefined;
  const match = storyText.match(/(?:₹|rs\.?|inr)?\s*([0-[#]\d{1,3}(?:,\d{3})*|\d+)/i);
  if (match && (storyText.includes('₹') || storyText.toLowerCase().includes('rs') || storyText.toLowerCase().includes('rupee'))) {
    extractedAmount = `₹${match[1]}`;
  }

  let extractedMethod = "Digital payment / Online channel";
  if (storyText.toLowerCase().includes('sms')) extractedMethod = "SMS and payment link";
  else if (storyText.toLowerCase().includes('upi') || storyText.toLowerCase().includes('qr')) extractedMethod = "UPI / QR Code request";
  else if (storyText.toLowerCase().includes('whatsapp')) extractedMethod = "WhatsApp messaging";
  else if (storyText.toLowerCase().includes('instagram')) extractedMethod = "Instagram profile";

  return {
    suggestedCategory: cat,
    extractedIncident: storyText,
    extractedAmount,
    extractedMethod
  };
};
