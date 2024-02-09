import Image, { StaticImageData } from "next/image";
import classes from "./teamItem.module.css";
interface TeamItemProps {
	iconImage: StaticImageData;
	title: string;
	subtitle: string;
}

const TeamItem = (props: TeamItemProps) => {
	return (
		<div className={classes.team}>
			<Image src={props.iconImage} alt="team" />
			<div className={classes.title}>{props.title}</div>
			<div className={classes.subTitle}>{props.subtitle}</div>
		</div>
	);
};
export default TeamItem;
