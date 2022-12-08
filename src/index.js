import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 1, message: 'My first name is Roman', likesCount: 12 },
    { id: 2, message: 'My last name is Volkov', likesCount: 2 },
    { id: 3, message: 'I am work in MMZ', likesCount: 123 },
    { id: 4, message: 'My cat Zahar is so fun', likesCount: 334 },
  ];

  let dialogs = [
    { id: 1, name: 'Roman' },
    { id: 2, name: 'Dimych' },
    { id: 3, name: 'Maria' },
    { id: 4, name: 'Jhon' },
    { id: 5, name: 'Petrucho' },
];

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'What is your firs name?' },
    { id: 4, message: 'Hello World!' },
    { id: 5, message: 'How about a date on Sunday?' },
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
