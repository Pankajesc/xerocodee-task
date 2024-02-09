import Image from "next/image";
import classes from "./transfrom.module.css";
import Button from "../UI/Button";

import intersect from "../../assets/intersect-horiz.png";

const Transform = () => {
	return (
		<main className={classes.transform}>
			<h1>
				Ready to Transform Your Vision into Reality? <br /> Let&apos;s Get Started!
			</h1>
			<div className={classes.button}>
				<Button className={classes.btn}>
					<a href="#">Schedule a Call</a>
				</Button>
			</div>
            <span className={classes.imageContainer}>
                <Image src={intersect} alt="" className={classes.image}/>
            </span>
		</main>
	);
};
export default Transform;
