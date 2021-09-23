export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const removeNonNumericCharacters = (value: string) => value.replace(/\D+/g, '');
