class ValidatorPhone {
	static startValidation (phone) {
		const phoneWithoutTrash = this.clearTrashInPhone(phone);
		const completePhone = this.validationBeginWithPlus(phoneWithoutTrash);

		return completePhone;
	}

	static clearTrashInPhone(phone) {

		const trash = /[^0-9\+]/g;
		const phoneWithoutTrash = phone.replace(trash, '');

		return phoneWithoutTrash;
	}

	static validationBeginWithPlus(phone) {
		const startLetter = phone[0];
		
		if(phone.length < 10) {
			throw new Error("Некорректный номер");
		}
		
		if(phone.length === 10) {
			return `+7${phone}`
		};
		
		if(startLetter != "+") {
			const phoneWithPlus = `+7` + phone.slice(1);
			return phoneWithPlus;
		}
		return phone;
	}

}


export default ValidatorPhone



