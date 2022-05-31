import classes from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Header />
                <div className={classes.area}>
                <p className={classes.text}>Welcome to<br />my Portfolio</p>
                <Footer/>
                </div>
        </div>
    )
}

export default Home;