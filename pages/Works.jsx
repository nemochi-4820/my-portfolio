import classes from "../styles/Works.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../portfolio.png";
import { Link } from 'react-router-dom';

const Works = () => {
    return (
        <div>
            <Header />
                <div className={classes.body}>
                    <div className={classes.area}>
                        <p className={classes.title}>Works</p>
                        <div className={classes.work1}>
                            <img className={classes.image} src={Image} alt="" />
                            <div className={classes.desc1}>
                                ポートフォリオ
                            </div>
                            <div className={classes.more1}>
                                <Link to="/">more</Link>
                            </div>
                        </div>
                        <div className={classes.work2}>
                            <div className={classes.desc2}>
                                To Be Added
                            </div>
                        </div>

                    <Footer />
                    </div>
                </div>
        </div>
    )
}

export default Works;