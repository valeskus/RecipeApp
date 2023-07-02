export class TimeManager {
  static getHours(number: number): string {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;

    return `${hours}:${minutes}`;
  }
}
