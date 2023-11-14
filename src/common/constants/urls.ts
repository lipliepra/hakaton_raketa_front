const URL_PREFIX = '/';

const URL_HOME = URL_PREFIX;

const URL_AUTH = URL_PREFIX + 'auth';
const URL_AUTH_LOGIN = URL_AUTH + URL_PREFIX + 'login';
const URL_AUTH_SIGNUP = URL_AUTH + URL_PREFIX + 'signup';

const URL_PROFILE = URL_PREFIX + 'profile';
const URL_PROFILE_SETTINGS = URL_PROFILE + URL_PREFIX + 'settings';

export const ROUTING_URLS = {
    URL_HOME,
    URL_AUTH_LOGIN,
    URL_AUTH_SIGNUP,
    URL_PROFILE,
    URL_PROFILE_SETTINGS
};
