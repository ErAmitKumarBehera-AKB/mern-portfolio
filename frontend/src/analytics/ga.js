// src/analytics/ga.js
import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize("G-X05BD9V7DQ"); // Your measurement ID
};

// Log page views on route change
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
