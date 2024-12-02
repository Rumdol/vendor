// /lib/utils.js
export const formatDate = (dateString) => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	return new Date(dateString).toLocaleDateString(undefined, options);
};

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);