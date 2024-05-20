// /**
//  * An array of routes that are accessible to the public
//  * These routes do not require authentication
//  * @type {string[]}
//  */

// export const publicRoutes = ["/", "/shop"];

/**
 * An array of routes that are inaccessible to the public
 * These routes require authentication
 * @type {string[]}
 */

export const privateRoutes = ["/profile", "/checkout"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settitngs
 * @type {string[]}
 */

export const authRoutes = ["/auth/signin", "/auth/signup", "/auth/error"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 *
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */

export const DEFUALT_LOGIN_REDIRECT = "/profile";
