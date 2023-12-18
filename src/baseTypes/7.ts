/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
type Day = 'Sut' | 'Sund';
let day: Day;

const isWeekend = (value: string): boolean => {
  return (value === day) ? true : false;
}