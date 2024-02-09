import Image from "next/image";
import classes from "./subscribe.module.css";
import arrow from "../../assets/Footer/arrow.png";

const SubscribeForm=()=>{
    return <main className={classes.subscribe}>
            <h3>Subscribe</h3>
        <form action="" className={classes.form}>
            <input type="email" placeholder="Email address"/>
            <button type="submit" className={classes.btn}>
                <Image src={arrow} alt=""/>
            </button>
        </form>
            <p>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
    </main>
};

export default SubscribeForm;