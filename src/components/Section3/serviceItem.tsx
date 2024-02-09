import Image, { StaticImageData } from "next/image";
import classes from "./serviceItem.module.css";
import Card from "../UI/Card";

interface ServiceItemProps {
	iconImage: StaticImageData;
	title: string;
	subtitle: string;
}

const ServiceItem = (props: ServiceItemProps) => {
	return (
		<Card className={classes.service}>
			<>
			<Image src={props.iconImage} alt="team" />
			<div className={classes.title}>{props.title}</div>
			<div className={classes.subTitle}>{props.subtitle}</div>
			</>
		</Card>
	);
};
export default ServiceItem;
