// /lib/authentication.js
import jwt from 'jsonwebtoken';

export const verifyToken = (token) => {
	try {
		return jwt.verify(token, process.env.JWT_SECRET);
	} catch (error) {
		throw new Error('Invalid token');
	}
};

export const getTokenFromRequest = (req) => {
	const { authorization } = req.headers;
	return authorization ? authorization.split(' ')[1] : null;
};
