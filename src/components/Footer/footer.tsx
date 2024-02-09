import Image from "next/image";
import styles from "./footer.module.css";
import logo from "../../assets/Navbar/logo.png";

import twitter from "../../assets/Footer/Twitter.png";
import facebook from "../../assets/Footer/Facebook.png";
import linkedin from "../../assets/Footer/linkedin.png";
const Footer = () => {
	return (
		<main>
			<hr className={styles.ruler} />
			<div className={styles.footer}>
				<Image src={logo} alt="" />
				<div className={styles.terms}>
					<a href="">Terms</a>
					<a href="">Privacy</a>
					<a href="">Cookies</a>
				</div>
				<div className={styles.connect}>
					<a href=""><Image src={linkedin} alt=""/></a>
					<a href=""><Image src={facebook} alt=""/></a>
					<a href=""><Image src={twitter} alt=""/></a>
				</div>
			</div>
		</main>
	);
};

export default Footer;
