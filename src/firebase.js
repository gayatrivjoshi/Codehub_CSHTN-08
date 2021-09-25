/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';
import firebaseConfig from './key.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const listRef = ref(storage, 'gs://codehub-be37d.appspot.com/books');
export const vidRef = ref(storage, 'gs://codehub-be37d.appspot.com/videos');
