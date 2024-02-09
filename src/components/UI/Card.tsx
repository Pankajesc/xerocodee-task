import { ReactElement } from "react";
import classes from "./card.module.css";

interface CardProps{
    className?:string;
    children:ReactElement;
}

const Card = (props:CardProps) => {
	return (
		<div className={`${classes.Card} ${props.className}`}>
			{props.children}
		</div>
	);
};
export default Card;
