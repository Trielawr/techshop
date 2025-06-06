import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../assets/utilits';
import { lazy } from 'react';
import Icon from '../Components/Icon/Icon';
import imgAS from '../assets/img/download-appstore.png';
import imgGP from '../assets/img/download-googleplay.png';
import imgCode from '../assets/img/Qr Code.png';


const AllPages = lazy(() => import('../Pages/AllPages/AllPages'));
const ErrorPage = lazy(() => import('../Pages/ErrorPage/ErrorPage'));
// const AchievementsPage = lazy(() => import('../pages/AchievementsPage/AchievementsPage'));
// const FoodCourtPage = lazy(() => import('../pages/FoodCourtPage/FoodCourtPage'));
// const MapPage = lazy(() => import('../pages/MapPage/MapPage'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const PrivateRoute = lazy(() => import('../pages/PrivateRoute/PrivateRoute'));
// const NearestRestaurantsPage = lazy(() => import('../pages/NearestRestaurantsPage/NearestRestaurantsPage'));
// const RestaurantsPage = lazy(() => import('../pages/RestaurantsPage/RestaurantsPage'));
// const SocialsPage = lazy(() => import('../pages/SocialsPage/SocialsPage'));
// const SpecialitiesPage = lazy(() => import('../pages/SpecialitiesPage/SpecialitiesPage'));
// const BascketPage= lazy(() => import('../pages/BascketPage/BascketPage'));
const Layout = lazy(() => import('../Pages/Layout/Layout'));

export const routerData = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <AllPages />,
        errorElement: <ErrorPage />,
      },
      // {
      //   index: ROUTES.foodcourt,
      //   element: <FoodCourtPage />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: ROUTES.login,
      //   element: <LoginPage />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: ROUTES.restaurants,
      //   element: <RestaurantsPage />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: ROUTES.nearestrestaurants,
      //   element: <NearestRestaurantsPage />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: ROUTES.specialities,
      //   element: <SpecialitiesPage />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: ROUTES.achievements,
      //   element: <AchievementsPage />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: ROUTES.map,
      //   element: <MapPage />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: ROUTES.social,
      //   element: <SocialsPage />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   element: <PrivateRoute children />,
      //   children: [
      //     {
      //       path: ROUTES.bascket,
      //       element: <BascketPage />,
      //     },
      //   ]
      // },
    ]
  },
]);


export const footerData = [
  {
    title: 'Support',
    item: [
      {
        type: 'text',
        to: '',
        name: '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
      },
      {
        type: 'link',
        to: 'mailto:exclusive@gmail.com',
        name: 'exclusive@gmail.com',
      },
      {
        type: 'link',
        to: "tel:+38088015888889999",
        name: '+88015-88888-9999',
      },
    ]
  },
  {
    title: 'Account',
    item: [
      {
        type: 'link',
        to: ROUTES.account,
        name: 'My Account',
      },
      {
        type: 'link',
        to: ROUTES.login,
        name: 'Login / Register',
      },
      {
        type: 'link',
        to: ROUTES.card,
        name: 'Cart',
      },
      {
        type: 'link',
        to: ROUTES.whishlist,
        name: 'Wishlist',
      },
      {
        type: 'link',
        to: '',
        name: 'Shop',
      },
    ]
  },
  {
    title: 'Quick Link',
    item: [
      {
        type: 'link',
        to: '',
        name: 'Privacy Policy',
      },
      {
        type: 'link',
        to: '',
        name: 'Terms Of Use',
      },
      {
        type: 'link',
        to: "",
        name: 'FAQ',
      },
      {
        type: 'link',
        to: ROUTES.contact,
        name: 'Contact',
      },
    ]
  },
  {
    title: 'Download App',
    item: [
      {
        type: 'link-small',
        to: '/discount',
        name: 'Save $3 with App New User Only',
      },
      {
        type: 'img',
        to: '',
        name: <img src={imgCode} alt='Qr Code'/>,
        wight: '76',
        height: '76',
      },
      {
        type: 'link-app',
        to: 'https://play.google.com/store/games?device=windows',
        name: <img src={imgGP} alt='Google Play'/>,
        wight: '104',
        height: '30',
      },
      {
        type: 'link-app',
        to: 'https://www.apple.com/app-store/',
        name: <img src={imgAS} alt='App Store' />,
        wight: '104',
        height: '34',
      },
      {
        type: 'link-social',
        to: 'https://www.facebook.com/',
        name: <Icon iconname='Icon-Facebook' width={'24'} height={'24'} />,
      },
      {
        type: 'link-social',
        to: 'https://x.com/',
        name: <Icon iconname='Icon-Twitter' width={'24'} height={'24'} />,
      },
      {
        type: 'link-social',
        to: 'https://www.instagram.com/',
        name: <Icon iconname='icon-instagram' width={'24'} height={'24'} />,
      },
      {
        type: 'link-social',
        to: 'https://www.linkedin.com/',
        name: <Icon iconname='Icon-Linkedin' width={'24'} height={'24'} />,
      },
    ]
  }
];