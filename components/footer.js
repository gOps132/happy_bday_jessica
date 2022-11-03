import footer_style from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<div className={footer_style.m_footer}>
			<div className={footer_style.m_footer_elm}>
				<h2>To</h2>
				<h3>A good friend</h3>
				<h3>And gross e-girl</h3>
			</div>
			<div className={footer_style.m_footer_elm}>
				<h2>Made by</h2>
				<h3>Gops132</h3>
				<h3>Gian Cedrick</h3>
				<h3>With Nextjs Framework</h3>
				<p>
					<a href="https://nextjs.org/"><u>here</u></a>
				</p>
			</div>
		</div>
	);
}

export default Footer;