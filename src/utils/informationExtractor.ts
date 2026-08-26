import { CategoryId } from './complaintRouter';

export interface ExtractedInformation {
  incident: string;
  amount: string;
  method: string;
  pathTitle: string;
}

/**
 * Isolated information extraction utility.
 * Parses the citizen story to extract structured key details.
 * Pluggable for future Gemini API integration.
 */
export const extractInformationFromStory = (
  storyText: string,
  categoryId: CategoryId | null
): ExtractedInformation => {
  const text = storyText.trim();

  // Extract Amount (e.g. ₹10,000 or 10000 rupees)
  let extractedAmount = "N/A";
  const amountMatch = text.match(/(₹\s?[\d,]+|\b\d+[\d,]*\s?(rupees|rs|INR)\b)/i);
  if (amountMatch) {
    extractedAmount = amountMatch[0].startsWith('₹') ? amountMatch[0] : `₹${amountMatch[0].replace(/[^\d]/g, '')}`;
  }

  // Extract Method
  let extractedMethod = "Digital Transaction / Online";
  const lower = text.toLowerCase();
  if (lower.includes('sms') && lower.includes('link')) {
    extractedMethod = "SMS → Payment Link";
  } else if (lower.includes('upi') || lower.includes('qr')) {
    extractedMethod = "UPI / QR Code Scan";
  } else if (lower.includes('instagram') || lower.includes('facebook') || lower.includes('social media') || lower.includes('account')) {
    extractedMethod = "Social Media Credential Phishing / Hacking";
  } else if (lower.includes('job') || lower.includes('recruitment')) {
    extractedMethod = "Fake Job Offer Letter";
  }

  // Incident Summary
  let extractedIncident = text;
  if (text.length > 120) {
    extractedIncident = text.substring(0, 117) + "...";
  } else if (!text) {
    extractedIncident = "Incident details not provided";
  }

  // Path Title
  let pathTitle = "Other Cybercrime";
  if (categoryId === 'financial') pathTitle = "Financial Fraud";
  else if (categoryId === 'account_identity') pathTitle = "Account Takeover / Identity Related Cybercrime";
  else if (categoryId === 'harassment') pathTitle = "Cyber Harassment / Online Abuse";
  else if (categoryId === 'job_fraud') pathTitle = "Online Job / Employment Fraud";

  return {
    incident: extractedIncident,
    amount: extractedAmount,
    method: extractedMethod,
    pathTitle
  };
};
