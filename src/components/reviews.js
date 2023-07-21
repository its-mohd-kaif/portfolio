// reviews.js
import img1 from "../assets/project1.png";
import img2 from "../assets/project2.png";
import img3 from "../assets/project3.png";
import img4 from "../assets/project4.png";

const reviews = [
  {
    id: 1,
    name: "Ecommerce User Login Feature",
    url: "https://ecommerce-kaif.netlify.app/",
    img: img1,
    text: "Ecommerce User Login Feature with role-based authentication, developed using React, Redux, and Bootstrap for seamless user experience and tailored functionalities.",
  },
  {
    id: 2,
    name: "Income Tax Calculator",
    url: "https://income-tax-kaif.netlify.app/",
    img: img2,
    text: "A user-friendly web app using React and AntD to calculate payable taxes, with comparisons between new and old tax regimes.",
  },
  {
    id: 3,
    name: "Expense Manager",
    img: img3,
    url: "https://expense-manager-kaif.netlify.app/",
    text: "A useful React app with Bootstrap for tracking savings and expenses, helping users monitor their financial progress effectively.",
  },
  {
    id: 4,
    name: "Dynamic OTP Validation",
    img: img4,
    url: "https://otp-validation.netlify.app/",
    text: "A learning app showcasing dynamic OTP validation using React, TypeScript, and Bootstrap for seamless user verification and enhanced security.",
  },
];

export default reviews;
