interface TimeFormat {
  hours?: number;
  minutes: number;
}
export class TimeManager {

  static getHours(number: number): TimeFormat {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    if (hours === 0) {
      return {
        minutes,
      };
    }

    return {
      hours,
      minutes,
    };
  }
}
