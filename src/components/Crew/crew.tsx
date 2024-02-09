import Image from "next/image";
import classes from "./crew.module.css";
import image1 from "../../assets/Crew Section/software Developers.png";
import image2 from "../../assets/Crew Section/data scientists.png";
import image3 from "../../assets/Crew Section/designers.png";
import image4 from "../../assets/Crew Section/managers.png";
import image5 from "../../assets/Crew Section/engineers.png";

import Button from "../UI/Button";

const images = [image1, image5, image3, image4, image2];

const crewMembers = [
	"Software Developers",
	"QA Engineers",
	"UX Designers",
	"Data Scientists",
	"Project Managers",
];

const Crew = () => {
	return (
		<main className={classes.crew}>
			<div className={classes.crewMembers}>
				{crewMembers.map((member, index) => (
					<div className={classes.member} key={index}>
						<Image src={images[index]} alt="" />
						<div className={classes.crewName}>
							<p>{member}</p>
						</div>
					</div>
				))}
			</div>
            <h1>
                Let&apos;s Form Your Crew.
            </h1>
            <div className={classes.button}>
            <Button className={classes.btn}><a href="#">Schedule a Call</a></Button>
            </div>
		</main>
	);
};
export default Crew;
