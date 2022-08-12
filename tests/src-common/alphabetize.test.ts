import { alphabetize } from "../../src-common/alphabetize";

test("should work correctly", () => {
	expect(alphabetize("aaa")).toBe("aaa");
	expect(alphabetize("cba")).toBe("abc");
});

test("should not be influenced by casing", () => {
	expect(alphabetize("CbA")).toBe("abc");
});

test("should correctly strip accents", () => {
	expect(alphabetize("cbà")).toBe("abc");
})