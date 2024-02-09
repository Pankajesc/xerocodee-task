import Button from "../UI/Button";
import classes from "./mainsection.module.css";

const MainSection=()=>{
    return <main>
        <div className={classes.main}>
            <div className={classes.mainText}>
            <div className={classes.heading}>
                TECH SERVICES
            </div>
            <div className={classes.title}>
                TechSynergy;
                <br />
                Innovate,<br />
                Create, Elevate
            </div>
            <div className={classes.subtitleText}>
                Unlocking Possibilities, One Code at a Time
            </div>
            <div>
                <Button className={classes.btn}><a href="#">See Projects</a></Button>
            </div>
            </div>
        </div>
    </main>
};

export default MainSection;