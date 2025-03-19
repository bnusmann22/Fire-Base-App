import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAzG9NVmcDrkPCJaERm3lILqgD2qzR_Zdw',
  authDomain: 'fire-base-app-5ba6d.firebaseapp.com',
  projectId: 'fire-base-app-5ba6d',
  storageBucket: 'fire-base-app-5ba6d.firebasestorage.app',
  messagingSenderId: '230951231041',
  appId: '1:230951231041:web:e4d9689afe545bd7eaf0c0',
  measurementId: 'G-E4VMLVPGYY',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
