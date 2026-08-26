/**
 * Isolated mock OTP verifier utility.
 * Demo OTP code: 123456
 * Pluggable for real SMS authentication service later.
 */
export const DEMO_OTP = '123456';

export const verifyMockOtp = (enteredOtp: string): boolean => {
  return enteredOtp.trim() === DEMO_OTP;
};
