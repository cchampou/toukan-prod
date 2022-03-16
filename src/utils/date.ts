// eslint-disable-next-line import/prefer-default-export
export function isNight(): boolean {
  const currentHour = new Date().getHours();

  return currentHour < 8 || currentHour >= 20;
}
