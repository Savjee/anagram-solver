import { remove } from "remove-accents";

export function alphabetize(word: string): string{
    const alpha = word
            .toLowerCase()
            .split('')
            .sort()
            .join('');

    return remove(alpha);
}