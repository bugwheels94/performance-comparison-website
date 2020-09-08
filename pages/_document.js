import React from 'react';
import Document, {
	Html, Head, Main, NextScript,
} from 'next/document';

class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				{/* <script src="https://lvh.me/api/static/5e5a25ca34f7fe0d1e584fd3" /> */}
				<script
					src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
				/>
			</Html>
		);
	}
}

export default CustomDocument;
