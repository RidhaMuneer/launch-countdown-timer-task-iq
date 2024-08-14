
/**
 * Calculates the time remaining between the current date and a target date.
 * 
 * @param targetDate - The date and time you want to count down to.
 * 
 * @returns An object representing the remaining time in days, hours, minutes, and seconds.
 * 
 * @example
 * ```typescript
 * const targetDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 14 days from now
 * const countdown = getCountdown(targetDate);
 * console.log(countdown);
 * // Output: { days: 14, hours: 0, minutes: 0, seconds: 0 }
 * ```
 * 
 * The function calculates the difference between the current date and the target date, and returns:
 * - `days`: The number of full days remaining.
 * - `hours`: The number of full hours remaining after accounting for days.
 * - `minutes`: The number of full minutes remaining after accounting for hours.
 * - `seconds`: The number of seconds remaining after accounting for minutes.
 * 
 * If the time difference is less than or equal to 0, it returns `{ days: 0, hours: 0, minutes: 0, seconds: 0 }`, indicating that the target date has been reached or passed.
 */

export default function getCountdown(targetDate: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} {
  const now = new Date();
  const timeDifference = targetDate.getTime() - now.getTime();

  if (timeDifference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(timeDifference / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}
