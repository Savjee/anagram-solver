import { remove } from "remove-accents";

export function alphabetize(word: string): string{
    // Strip the accents & convert to lower case
    const input = remove(word.toLowerCase());
    
    return input
            .split('')
            .sort()
            .join('');
}