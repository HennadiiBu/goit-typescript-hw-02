/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const isWeekend = (value: number): boolean => {
  if (value === 6 || value === 7) {
    return true;
  }
  return false;
}