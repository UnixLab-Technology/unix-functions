export function rgbToHex(rgb: [red: number, green: number, blue: number]): `#${string}` | string {
  if (rgb[0] < 0 || rgb[0] > 255 || rgb[1] < 0 || rgb[1] > 255 || rgb[2] < 0 || rgb[2] > 255) {
    throw new Error('Valores RGB inválidos. Certifique-se de que estejam entre 0 e 255.');
  }

  const hex = ((rgb[0] << 16) | (rgb[1] << 8) | rgb[2]).toString(16).padStart(6, '0');

  return `#${hex}`;
}

export function captalize(word: string) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}