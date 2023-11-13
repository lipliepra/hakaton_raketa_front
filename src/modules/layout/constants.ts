import { ICONS } from '../../apollo/assets';
import { ROUTING_URLS } from '../../common/constants/urls';

export const HEADER_NAVIGATION_LINKS = [
    {
        content: 'Истории',
        link: ROUTING_URLS.URL_STORIES,
    },
    // {
    //     content: 'Фотографии',
    //     link: ROUTING_URLS.URL_PHOTOS,
    // },
    // {
    //     content: 'Воспоминания',
    //     link: ROUTING_URLS.URL_MEMORIES,
    // },
    // {
    //     content: 'Подкасты',
    //     link: ROUTING_URLS.URL_PODCASTS,
    // },
    {
        content: 'Пользователи',
        link: ROUTING_URLS.URL_USERS,
    },
];

export const FOOTER_COPYRIGHT = `© lipliepra. ${new Date().getFullYear()}`;

export const BOTTOM_MENU_LINKS = {
    auth: [
        {
            content: 'Главная',
            link: ROUTING_URLS.URL_MAIN,
            icon: ICONS.Home,
        },
        {
            content: 'Создать',
            link: ROUTING_URLS.URL_MODERATION_CREATE,
            icon: ICONS.AddNew,
        },
        // {
        //     content: 'Избранное',
        //     link: ROUTING_URLS.URL_PROFILE_FAVORITES,
        //     icon: ICONS.StarEmpty,
        // },
        {
            content: 'Профиль',
            link: ROUTING_URLS.URL_PROFILE,
            icon: ICONS.UserCircle,
        },
    ],
    notAuth: [
        {
            content: 'Домашняя',
            link: ROUTING_URLS.URL_HOME,
            icon: ICONS.Home,
        },
        {
            content: 'Войти',
            link: ROUTING_URLS.URL_AUTH_LOGIN,
            icon: ICONS.Door,
        },
    ],
};
