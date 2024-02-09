import Image from "next/image";
import Card from "../UI/Card";
import classes from "./services.module.css";

import ServiceItem from "./serviceItem";

import brush from "../../assets/Section3/brush.png";
import data from "../../assets/Section3/data.png";
import documentCode from "../../assets/Section3/document-code.png";
import mobile from "../../assets/Section3/mobile.png";
import setting from "../../assets/Section3/setting-5.png";
import shapes from "../../assets/Section3/shapes.png";

import vector from "../../assets/Section3/Vector 6.png";

const icons = [documentCode, setting, data, brush, mobile, shapes];
const titles = [
	"Custom Software Development",
	"QA and Testing",
	"AI and Data Science",
	"UX/UI Design",
	"Mobile App Development",
	"Platform and Infrastructure",
];
const subTitles = [
	"Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
	"Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
	"AI and Data Science Use leading AI, machine learning, and data engineering technologies to unlock business value.",
	"Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.",
	"Build performant, scalable, and secure mobile applications for iOS and Android devices.",
	"Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.",
];
const Services = () => {
	return (
		<main className={classes.main}>
			<h1>
                <span>
                    <Image src={vector} alt="vector" height={50} width={50} />
                </span>
                Empowering Your Digital Vision: Our <br />  Comprehensive Tech Services.
			</h1>
			<div className={classes.services}>
				{icons.map((icon, index) => {
					return (
						<ServiceItem
							key={index}
							iconImage={icon}
							title={titles[index]}
							subtitle={subTitles[index]}
						/>
					);
				})}
			</div>
		</main>
	);
};

export default Services;
