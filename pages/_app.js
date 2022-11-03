import '../styles/globals.css';

import Nav from "../components/nav";
import Scbtn from "../components/scroll_to_top";
import Footer from "../components/footer";

import React, { useState, useCallback,  useEffect } from "react";

import Confetti from 'confetti-react';

function MyApp({ Component, pageProps }) {
	const theme_map = {
		dark: 'light',
		light: 'solar',
		solar: 'dark'
	};

	let [currentTheme, useTheme] = useState(
		(Object.keys(theme_map)[0]));

	const toggle_theme = useCallback(() => {
		useTheme(theme_map[currentTheme]);
	});

	let [confetti, useConfetti] = useState(false);
	
	const toggle_confetti = useCallback(() => {
		useConfetti(!confetti);
	})

	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		let handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={currentTheme}>
			{ ( confetti ? <Confetti width={windowSize.width} height={windowSize.height} /> : <></> ) }
			<Nav theme={currentTheme} theme_callback={toggle_theme} toggle_callback={toggle_confetti} theme_map={theme_map} />
			<false_body></false_body>
			<article>
				<div className={`inner_root`}>
					<Component {...pageProps} />
				</div>
				<Footer />
			</article>
			<Scbtn />
		</div>
	)
}

export default MyApp