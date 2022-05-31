import classes from "../styles/Footer.module.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
    return (
        <footer className={classes.foot}>
            <div className={classes.list}>
                <p className={classes.item}>© 2022 Hiroki</p>
                <GitHubIcon className={classes.git} onClick={() => window.open("https://github.com/Hiroki-Nemoto", "_blank")}/>
                <TwitterIcon className={classes.twit} onClick={() => window.open("https://twitter.com/nemochi0119", "_blank")}/>
                <InstagramIcon className={classes.inst} onClick={() => window.open("https://www.instagram.com/nemochi_0119/", "_blank")}/>
            </div>
        </footer>
    )
}

export default Footer;