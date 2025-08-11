import * as Yup from "yup";

export const validationSchemaSearch = Yup.object().shape({
    find: Yup.string()
      .trim()
      .required('Search input is required.')
      .min(3, 'Search input must be at least 3 characters.')
      .max(50, 'Search input must not exceed 50 characters.')
});
  
export const validationSchemaEmail = Yup.object().shape({
  email: Yup.string()
    .required('Email is required.')
    .email('Invalid email format')
    .max(50, 'Email must not exeed 50 characters')
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

export const settings = {
        infinite: false,
        dots: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true
};
    
export const multisettings = {
  className: "center",
  centerPadding: "50px",
  centerMode: true,
  infinite: true,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
    responsive: [
    {
      breakpoint: 9999,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 0
      }
      }
    ]
  };