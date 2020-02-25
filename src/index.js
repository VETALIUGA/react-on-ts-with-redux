import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from "./App";

import reducer from './reducers';


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const wrapper = document.getElementById("container");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    wrapper
);

// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];

// store.subscribe(() => {
//     console.log('subscribe', store.getState());
//     list.innerHTML = '';
//     trackInput.value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     });
// })

// // store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
// // store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });


// addTrackBtn.addEventListener('click', () => {
//     const trackName = trackInput.value;
//     store.dispatch({ type: 'ADD_TRACK', payload: trackName });
// })