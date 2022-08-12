import { getHashPrefix } from "../../src-common/getHashPrefix";

test("should return correct hash", () => {
	expect(getHashPrefix("abc")).toHaveLength(3);
	expect(getHashPrefix("abc")).toBe("900");
	expect(getHashPrefix("abcabcabc")).toBe("97a");
});