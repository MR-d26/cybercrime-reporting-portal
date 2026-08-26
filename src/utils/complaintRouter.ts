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
