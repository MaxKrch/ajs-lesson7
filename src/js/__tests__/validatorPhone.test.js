import ValidatorPhone from "../validatorPhone.js";

test("number with word", () => {
	const number = "8-908-918-5577ggg";
	const received = ValidatorPhone.startValidation(number);
	const expected = "+79089185577";

	expect(received).toBe(expected);
})


test("number with +86", () => {
	const number = "+86-908-918-5577";
	const received = ValidatorPhone.startValidation(number);
	const expected = "+869089185577";

	expect(received).toBe(expected);
})


test("number with +7", () => {
	const number = "+7-908-918-5577ggg";
	const received = ValidatorPhone.startValidation(number);
	const expected = "+79089185577";

	expect(received).toBe(expected);
})


test("number without code", () => {
	const number = "908-918-5577ggg";
	const received = ValidatorPhone.startValidation(number);
	const expected = "+79089185577";

	expect(received).toBe(expected);
})


test("number short", () => {
	const number = "8-908-918";
	const testFunc = () => {
		ValidatorPhone.startValidation(number);
	}

	const expected = "Некорректный номер";

	expect(testFunc).toThrow(expected);
})
