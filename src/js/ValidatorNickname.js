class Validator {
	static startValidation (nick) {
		if(!this.validationOnlyWord(nick)) {
			return false;
		}

		if(!this.validationMaxThreeNumber(nick)) {
			return false;
		}

		if(!this.validationBoundariesWord(nick)) {
			return false;
		}	

		return true;
	}

	static validationOnlyWord(nick) {
		const regex = /[^a-zA-Z\-_0-9]/;
		return !regex.test(nick);
	}

	static validationMaxThreeNumber(nick) {
		const regex = /\d{4,}/;
		return !regex.test(nick);
	}

	static validationBoundariesWord(nick) {
		const regex = /^[^\-_0-9].+[^\-_0-9]$/;
		return regex.test(nick);
	}

}

export default Validator;



