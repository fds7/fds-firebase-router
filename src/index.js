import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import 'semantic-ui-css/semantic.min.css';

const config = {
  apiKey: "AIzaSyDgmvKaP3Qqi-ocroZiAGFhO5X7wQYT6H4",
  authDomain: "fds-firebase-todo.firebaseapp.com",
  databaseURL: "https://fds-firebase-todo.firebaseio.com",
  projectId: "fds-firebase-todo",
  storageBucket: "fds-firebase-todo.appspot.com",
  messagingSenderId: "89774285499"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
