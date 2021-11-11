import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as ServiceWorker from 'serviceWorker';
import {} from '@firebase'
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBgDSjfD1W6ouaRA0b2YkMYPuhrXBy6F1k",
  authDomain: "cart-3fdd2.firebaseapp.com",
  projectId: "cart-3fdd2",
  storageBucket: "cart-3fdd2.appspot.com",
  messagingSenderId: "337345450117",
  appId: "1:337345450117:web:879b44590c4b9346d0d9ec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
ServiceWorker.unregister();
  
    
 
 




