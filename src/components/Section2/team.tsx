import Image from "next/image";
import classes from "./team.module.css";
import Card from "../UI/Card";
import monitor from "../../assets/Section2/monitor.png";
import driver from "../../assets/Section2/driver.png";
import simCard from "../../assets/Section2/simcard.png";
import TeamItem from "./teamItem";

const icons=[monitor,simCard,driver];
const titles=[
    "Front-end",
    "Back-end",
    "Data Analysts"
];
const subTitles=[
    "Our frontend developers understand the delicate balance betweenaesthetics and functionality.",
    "Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.",
    "Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts."
];
const Team = () => {
	return (
		<main className={classes.main}>
			<h1>
				We have multidisplinary teams to meet any <span>challenge</span>
			</h1>
			<Card className={classes.card}>
				<div className={classes.teams}>
                    {icons.map((icon,index)=>{
                        return <TeamItem 
                        key={index} 
                        iconImage={icon} 
                        title={titles[index]}
                        subtitle={subTitles[index]}/>
                    })}
				</div>
			</Card>
		</main>
	);
};

export default Team;
