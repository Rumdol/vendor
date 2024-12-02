// /utils/date.js
export const getTimeDifference = (date) => {
	const now = new Date();
	const diffTime = now - new Date(date);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return `${diffDays} days ago`;
};

export const getCurrentYear = () => new Date().getFullYear();
