export function formatMoney(value: number): string {
  const formatter = new Intl.NumberFormat('en-US');
  return formatter.format(value);
}
