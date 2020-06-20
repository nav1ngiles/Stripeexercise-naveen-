import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
//const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
const stripePromise = loadStripe("pk_test_51GqYSRBlWofL9C8LZRw6ZidAZc0LDu8hTZ9OdgoWUn1nWJSrYwChcsZLaUsg2IGOF1KsWZl64mf1D7DLEOnBg3Vs00PHBHs4VK");

ReactDOM.render(
  <React.StrictMode>
	<Elements stripe={stripePromise}>
		<App />
	</Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
