import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Store from './Redux/store';
import * as serviceWorker from './serviceWorker';

export default function reRenderDOM() {
    ReactDOM.render(
      <React.StrictMode>
        <App store={Store}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

reRenderDOM();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
