const URL_PREFIX = '/';

const URL_HOME = URL_PREFIX;

const URL_AUTH = URL_PREFIX + 'auth';
const URL_AUTH_LOGIN = URL_AUTH + URL_PREFIX + 'login';
const URL_AUTH_SIGNUP = URL_AUTH + URL_PREFIX + 'signup';

const URL_PROFILE = URL_PREFIX + 'profile';
const URL_PROFILE_SETTINGS = URL_PROFILE + URL_PREFIX + 'settings';

const URL_ABOUT = URL_PREFIX + 'about';
const URL_QUESTIONS = URL_PREFIX + 'questions';
const URL_LICENSE = URL_PREFIX + 'license';

export const ROUTING_URLS = {
    URL_HOME,
    URL_AUTH_LOGIN,
    URL_AUTH_SIGNUP,
    URL_PROFILE,
    URL_PROFILE_SETTINGS,
    URL_ABOUT,
    URL_QUESTIONS,
    URL_LICENSE
};
