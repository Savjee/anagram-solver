import md5 from "crypto-js/md5.js";

const PREFIX_LENGTH = 3;

export function getHashPrefix(word: string): string{
    return md5(word)
		.toString()
		.substring(0, PREFIX_LENGTH);
}