import React from 'react';
import Head from 'next/head';
import Header from '../header';

const Layout = (props) => (
	<>
		<Head>
			<title>{props.title}</title>
		</Head>
		<Header />
		<main className="container-fluid h-100">

			{props.children}
		</main>
	</>
);

export default Layout;
