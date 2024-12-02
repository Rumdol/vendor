// /utils/validation.js
export const validateEmail = (email) => {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
};

export const validatePassword = (password) => {
	// Require at least one uppercase letter, one number, and one special character
	const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
	return regex.test(password);
};
