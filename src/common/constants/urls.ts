const URL_PREFIX = '/';

const URL_HOME = URL_PREFIX + 'home';
const URL_MAIN = URL_PREFIX + 'main';
const URL_CONFIDENTIALITY = URL_PREFIX + 'confidentiality';
const URL_USER_AGREEMENT = URL_PREFIX + 'user-agreement';

const URL_AUTH = URL_PREFIX + 'auth';
const URL_AUTH_LOGIN = URL_AUTH + '?mode=login';
const URL_AUTH_SIGNUP = URL_AUTH + '?mode=signup';
const URL_AUTH_CHANGE_PASSWORD = URL_AUTH + '?mode=changePassword';

const URL_PROFILE = URL_PREFIX + 'profile';
const URL_PROFILE_FAVORITES = URL_PROFILE + URL_PREFIX + 'favorites';
const URL_PROFILE_SETTINGS = URL_PROFILE + URL_PREFIX + 'settings';

const URL_MODERATION = URL_PREFIX + 'moderation';
const URL_MODERATION_CREATE = URL_MODERATION + URL_PREFIX + 'create';

const URL_ADMINISTRATION = URL_PREFIX + 'administration';

const URL_STORIES = URL_PREFIX + 'stories';
const URL_PHOTOS = URL_PREFIX + 'photos';
const URL_MEMORIES = URL_PREFIX + 'memories';
const URL_PODCASTS = URL_PREFIX + 'podcasts';
const URL_PROJECTS = URL_PREFIX + 'projects';
const URL_USERS = URL_PREFIX + 'users';

export const ROUTING_URLS = {
    URL_HOME,
    URL_MAIN,
    URL_CONFIDENTIALITY,
    URL_USER_AGREEMENT,
    URL_AUTH_LOGIN,
    URL_AUTH_SIGNUP,
    URL_AUTH_CHANGE_PASSWORD,
    URL_PROFILE,
    URL_PROFILE_FAVORITES,
    URL_PROFILE_SETTINGS,
    URL_MODERATION,
    URL_MODERATION_CREATE,
    URL_ADMINISTRATION,
    URL_STORIES,
    URL_PHOTOS,
    URL_MEMORIES,
    URL_PODCASTS,
    URL_PROJECTS,
    URL_USERS,
};
