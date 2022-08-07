import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FONCTIONS',
    group: true,
  },
  {
    title: 'Orateurs',
    icon: 'people-outline',
    link: '/pages/speaker',
  },
  {
    title: 'N° Discours',
    icon: 'book-open-outline',
    link: '/pages/speech',
  },
  {
    title: 'Historique',
    icon: 'book-open-outline',
    link: '/pages/histo-speech',
  }
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },

];
