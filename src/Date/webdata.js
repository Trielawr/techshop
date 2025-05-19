import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../assets/utilits';
import { lazy } from 'react';

// const Layout = lazy(() => "");

export const routerData = createBrowserRouter([
// {
//     path: ROUTES.home,
//     element: <Layout />,
//     errorElement: <NotFoundPage />,
//     children: [
//       {
//         index: true,
//         element: <AllPages />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         index: ROUTES.foodcourt,
//         element: <FoodCourtPage />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: ROUTES.login,
//         element: <LoginPage />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: ROUTES.restaurants,
//         element: <RestaurantsPage />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: ROUTES.nearestrestaurants,
//         element: <NearestRestaurantsPage />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: ROUTES.specialities,
//         element: <SpecialitiesPage />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: ROUTES.achievements,
//         element: <AchievementsPage />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: ROUTES.map,
//         element: <MapPage />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         path: ROUTES.social,
//         element: <SocialsPage />,
//         errorElement: <ErrorPage />,
//       },
//       {
//         element: <PrivateRoute children />,
//         children: [
//           {
//             path: ROUTES.bascket,
//             element: <BascketPage />,
//           },
//         ]
//       },
//     ]
//   },
]);

// export const footerData = [{

// }]