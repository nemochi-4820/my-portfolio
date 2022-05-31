import classes from "../styles/Header.module.scss";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <header className={classes.head}>
                <h1 className={classes.title}>Hiroki's Portfolio</h1>
                    <ul className={classes.u_list}>
                        <li className={classes.list}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={classes.list}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className={classes.list}>
                            <Link to="/works">Works</Link>
                        </li>
                    </ul>
            </header>
    )
}

export default Header;