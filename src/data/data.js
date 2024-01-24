import ChatWithUs1 from "../assets/chat-with-us-1.png";
import ChatWithUs2 from "../assets/chat-with-us-2.png";
import ChatWithUs3 from "../assets/chat-with-us-3.png";
import ChatWithUs4 from "../assets/chat-with-us-4.png";

import hotStar1 from "../assets/hot-star-1.png";
import hotStar2 from "../assets/hot-star-2.png";
import hotStar3 from "../assets/hot-star-3.png";
import hotStar4 from "../assets/hot-star-4.png";
import hotStar5 from "../assets/hot-star-5.png";
import hotStar6 from "../assets/hot-star-6.png";

import rnRecipes1 from "../assets/rn-recipes-1.png";
import rnRecipes2 from "../assets/rn-recipes-2.png";
import rnRecipes3 from "../assets/rn-recipes-3.png";
import rnRecipes4 from "../assets/rn-recipes-4.png";
import rnRecipes5 from "../assets/rn-recipes-5.png";
import rnRecipes6 from "../assets/rn-recipes-6.png";
import rnRecipes7 from "../assets/rn-recipes-7.png";
import rnRecipes8 from "../assets/rn-recipes-8.png";
import rnRecipes9 from "../assets/rn-recipes-9.png";
import rnRecipes10 from "../assets/rn-recipes-10.png";

import bookbox1 from "../assets/bookbox-1.png";
import bookbox2 from "../assets/bookbox-2.png";
import bookbox3 from "../assets/bookbox-3.png";
import bookbox4 from "../assets/bookbox-4.png";
import bookbox5 from "../assets/bookbox-5.png";
import bookbox6 from "../assets/bookbox-6.png";
import bookbox7 from "../assets/bookbox-7.png";

import gadgetGalaxy1 from "../assets/gadget-galaxy-1.png";
import gadgetGalaxy2 from "../assets/gadget-galaxy-2.png";
import gadgetGalaxy3 from "../assets/gadget-galaxy-3.png";
import gadgetGalaxy4 from "../assets/gadget-galaxy-4.png";
import gadgetGalaxy5 from "../assets/gadget-galaxy-5.png";
import gadgetGalaxy6 from "../assets/gadget-galaxy-6.png";
import gadgetGalaxy7 from "../assets/gadget-galaxy-7.png";
import gadgetGalaxy8 from "../assets/gadget-galaxy-8.png";
import gadgetGalaxy9 from "../assets/gadget-galaxy-9.png";
import gadgetGalaxy10 from "../assets/gadget-galaxy-10.png";

import smoothieShop1 from "../assets/react-native-smoothie-shop-1.png";
import smoothieShop2 from "../assets/react-native-smoothie-shop-2.png";
import smoothieShop3 from "../assets/react-native-smoothie-shop-3.png";
import smoothieShop4 from "../assets/react-native-smoothie-shop-4.png";
import smoothieShop5 from "../assets/react-native-smoothie-shop-5.png";
import smoothieShop6 from "../assets/react-native-smoothie-shop-6.png";
import smoothieShop7 from "../assets/react-native-smoothie-shop-7.png";
import smoothieShop8 from "../assets/react-native-smoothie-shop-8.png";
import smoothieShop9 from "../assets/react-native-smoothie-shop-9.png";
import smoothieShop10 from "../assets/react-native-smoothie-shop-10.png";
import smoothieShopGif from "../assets/react-native-smoothie-shop-gif.mp4"

export const projectData = [
  {
    id: 1,
    title: "Gadget Galaxy",
    description:
      "A electronics ecommerce website built with PHP Laravel. Allows users to buy various electronic products.",
    features: [
      "PHP",
      "Laravel",
      "React",
      "Ecommerce",
      "Cart System",
      "Checkout Page",
      "Admin Dashboard",
      "Authentication",
      "Livewire",
      "Paypal Checkout"
    ],
    github: "https://github.com/jonespinoza111/gadget-galaxy",
    link: "https://gadget-galaxy.site",
    tags: ["All", "PHP", "React", "Full-Stack"],
    images: [
      gadgetGalaxy1,
      gadgetGalaxy2,
      gadgetGalaxy3,
      gadgetGalaxy4,
      gadgetGalaxy5,
      gadgetGalaxy6,
      gadgetGalaxy7,
      gadgetGalaxy8,
      gadgetGalaxy9,
      gadgetGalaxy10
    ],
    videos: null,
  },
  {
    id: 2,
    title: "ChatWithUs",
    description:
      "A React app that uses WebSockets to allow users to chat with other users and create rooms.",
    features: [
      "Login and Sign Up Forms",
      "Friend System",
      "WebSockets",
      "Modals",
      "Send Images and Emojis",
      "Create rooms",
      "Send direct messages",
      "Edit Profile",
      "MERN stack",
      "Username: User1",
      "Password: Password"
    ],
    github: "https://github.com/jonespinoza111/react-chat",
    link: "https://chat-with-us.netlify.app/",
    tags: ["All", "React", "Full-Stack"],
    images: [ChatWithUs1, ChatWithUs2, ChatWithUs3, ChatWithUs4],
    videos: null,
  },
  {
    id: 3,
    title: "React Recipes",
    description:
      "A React Native app that uses the Spoonacular API to display instructions for cooking recipes.",
    features: [
      "Login and Sign Up Forms",
      "Async Storage",
      "Filters",
      "Spoonacular API",
      "Save Favorite Recipes",
      "Firebase Database",
      "Modals",
      "Profile Details and Edit Profile",
      "Redux",
      "Expo",
    ],
    github: "https://github.com/jonespinoza111/rn-recipes",
    link: "",
    tags: ["All", "React", "React-Native"],
    images: [
      rnRecipes1,
      rnRecipes2,
      rnRecipes3,
      rnRecipes4,
      rnRecipes5,
      rnRecipes6,
      rnRecipes7,
      rnRecipes8,
      rnRecipes9,
      rnRecipes10,
    ],
    videos: null,
  },
  {
    id: 4,
    title: "Hot Star Hunan Grill",
    description:
      "A react app for a Chinese restaurant with a full menu and online ordering.",
    features: [
      "Landing Page",
      "Food Menu",
      "Online Ordering",
      "Stripe Payments",
      "Cart System",
      "Tailwind",
      "MERN Stack",
    ],
    github: "https://github.com/jonespinoza111/react-restaurant",
    link: "https://hot-star-hunan-grill.netlify.app/",
    tags: ["All", "React", "Full-Stack"],
    images: [hotStar1, hotStar2, hotStar3, hotStar4, hotStar5, hotStar6],
    videos: null,
  },
  {
    id: 5,
    title: "BookBox",
    description:
      "A React app that uses the Google Books API to display info. on books and create lists.",
    features: [
      "AWS",
      "Amazon Cognito",
      "Amplify Datastore",
      "GraphQL API",
      "Google Books API",
      "Create lists",
      "Search for books",
      "Write reviews",
      "Username: User1",
      "Password: Password"
    ],
    github: "https://github.com/jonespinoza111/bookbox",
    link: "https://dev.d3supdqhny5bev.amplifyapp.com",
    tags: ["All", "React", "AWS"],
    images: [
      bookbox1,
      bookbox2,
      bookbox3,
      bookbox4,
      bookbox5,
      bookbox6,
      bookbox7,
    ],
    videos: null,
  },
  {
    id: 6,
    title: "Smoothie Shop",
    description:
      "A React Native smoothie shop apps that lets you buy different smoothies.",
    features: [
      "Modern Design",
      "Zustand",
      "Shopping Cart",
      "Checkout",
      "Save Favorites",
      "View Order History"
    ],
    github: "https://github.com/jonespinoza111/",
    link: "",
    tags: ["All", "React", "React-Native"],
    images: [
      smoothieShop1,
      smoothieShop2,
      smoothieShop3,
      smoothieShop4,
      smoothieShop5,
      smoothieShop6,
      smoothieShop7,
      smoothieShop8,
      smoothieShop9,
      smoothieShop10,
    ],
    videos: [
      smoothieShopGif
    ]
  },
];
