import TheLayout from '../components/TheLayout'
import ThePopup from '../components/ThePopup';
import HomePage from './home/HomePage'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function Home() {
	return (
		<Html>
			<Head>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=UA-204484351-1`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'UA-204484351-1');
          				`,
					}}
				/>
			</Head>
			<div className="bg-image">
				<TheLayout>
					<HomePage />
				</TheLayout>
				{/* <ThePopup/> */}
			</div>
		</Html>
	);
}
