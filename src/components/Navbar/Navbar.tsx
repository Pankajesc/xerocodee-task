import React from "react";
import Image from "next/image";
import classes from "./navbar.module.css";
import Button from "../UI/Button";
import LogoImg from "../../assets/Navbar/logo.png";
const Navbar=()=>{
    return <>
        <div className={classes.navbar}>
            <div className={classes.logo}>
                <Image src={LogoImg} alt="logo" />
            </div>
            <div className={classes.navContainer}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
            </div>
            <div className={classes.accessebility}>
                <select name="lang" id="lang">
                    <option value="eng">ENG</option>
                    <option value="french">FR</option>
                    <option value="german">GER</option>
                    <option value="hindi">HIN</option>
                </select>
                <Button className={classes.btn}><a href="#">Schedule a Call</a></Button>   
            </div>
        </div>
    </>
};

export default Navbar;