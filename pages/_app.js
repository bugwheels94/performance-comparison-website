import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/sass/global.scss';
import withReduxStore from '@/utils/with-redux-store';
// Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

class MyApp extends App {
	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Provider store={reduxStore}>
				<Component {...pageProps} />
			</Provider>
		);
	}
}

export default withReduxStore(MyApp);
