import Validator from "../validatorNickname.js";

test("correct nick", () => {
	const received = Validator.startValidation("maks");
	const expected = true;

	expect(received).toBe(expected);
});



test("nick with uncorrect letter", () => {
	const received = Validator.startValidation("i*?maks");
	const expected = false;

	expect(received).toBe(expected);
});



test("nick with 3+ numbers", () => {
	const received = Validator.startValidation("makslove100000000buks");
	const expected = false;

	expect(received).toBe(expected);
});



test("nick with uncorrect boundaries", () => {
	const received = Validator.startValidation("7maks0");
	const expected = false;

	expect(received).toBe(expected);
});