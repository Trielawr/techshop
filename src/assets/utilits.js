import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    query: Yup.string()
      .trim()
      .required('Search input is required.')
      .min(3, 'Search input must be at least 3 characters.')
      .max(50, 'Search input must not exceed 50 characters.')
  });

export const ROUTES = {
    home: "/",
    login: "/login",
    whishlist: "/whishlist",
    card: "/card",
    checkout: "/checkout",
    account: "/account",
    about: "/about",
    contact: "/contact",
    error: "/404 Error",
    productdetailpage: "/productdetailpage",
};