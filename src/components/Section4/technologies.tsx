import Image from "next/image";

import Button from "../UI/Button";

import classes from "./technologies.module.css";

import vector from "../../assets/Section4/vector.png";

import microsoft from "../../assets/Section4/logos_microsoft.png";
import lg from "../../assets/Section4/lg.png";
import slack from "../../assets/Section4/slack.png";
import google from "../../assets/Section4/logos_google.png";
import sony from "../../assets/Section4/sony.png";
import samsung from "../../assets/Section4/samsung.png";

const icons = [samsung, microsoft, google, slack, lg, sony];

const Technologies = () => {
	return (
		<main className={classes.technologies}>
			<Image src={vector} alt=""/>
			<h1>Trusted by Leading Organizations</h1>
			<h2>
				Our 4,000+ team has expertise in almost <br /> everyprogramming language.
			</h2>
			<div className={classes.companies}>
				{icons.map((icon, index) => (
					<Image key={index} src={icon} alt="" />
				))}
			</div>
			<div className={classes.button}>
				<Button className={classes.btn}>
					<a href="#">Our full repertorie</a>
				</Button>
			</div>
		</main>
	);
};
export default Technologies;
