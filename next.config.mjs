/** @type {import('next').NextConfig} */
import {auth} from "firebase/auth"
import {initFirebase} from "./src/config/firebase-config.ts"


initFirebase(); // Ensure Firebase is initialized correctly
const nextConfig = {
  async redirects() {
    const auth = getAuth();
    const { currentUser } = auth;

    // Define redirects based on authentication status
    if (currentUser) {
      // User is authenticated, redirect from '/' to '/dashboard'
      return [
        {
          source: '/',
          destination: '/dashboard',
          permanent: false,
        },
      ];
    } else {
      // User is not authenticated, redirect from '/' to '/auth/login'
      return [
        {
          source: '/',
          destination: '/auth/login',
          permanent: false,
        },
      ];
    }
  },

};

export default nextConfig;
