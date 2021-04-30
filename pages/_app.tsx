import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import './app.css';
import Theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Sitecore Experience Edge Portal</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
