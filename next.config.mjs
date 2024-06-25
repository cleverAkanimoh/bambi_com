// next.config.js
const { getAuth } = require('firebase/auth');
const { initFirebase } = require('./path/to/firebase-config'); // Update path to your Firebase config

// Initialize Firebase
initFirebase(); // Ensure Firebase is initialized correctly

module.exports = {
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
