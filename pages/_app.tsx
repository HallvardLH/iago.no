import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { DM_Sans } from 'next/font/google';
import {NextUIProvider} from '@nextui-org/react';
import Layout from '@/components/Layout';

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			<main className={dmSans.className}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</NextUIProvider>
	)
}
