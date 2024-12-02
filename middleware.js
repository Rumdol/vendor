import { NextResponse } from 'next/server';

// List of protected paths
const protectedPaths = ['/dashboard', '/profile', '/settings'];

// Middleware function
export function middleware(req) {
	const { pathname } = req.nextUrl; // Extract the pathname
	const token = req.cookies.get('auth_token'); // Extract the auth token from cookies

	// Check if the route is protected
	if (protectedPaths.includes(pathname)) {
		if (!token) {
			// If no token, redirect to the login page
			const url = req.nextUrl.clone();
			url.pathname = '/login';
			return NextResponse.redirect(url);
		}
	}

	// Example of custom headers manipulation
	const response = NextResponse.next();
	response.headers.set('X-Custom-Header', 'Middleware is working');

	return response;
}

// Configure which routes the middleware applies to
export const config = {
	matcher: ['/dashboard', '/profile', '/settings'], // Match specific paths
};
