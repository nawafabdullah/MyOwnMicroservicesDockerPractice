import React from 'react'
import { Link } from 'react-router-dom'
import styles from './appStyles.module.css';

function NavBar() {
    return (
        <ul className= {styles.listNoBullet}>
            <li> <Link className= {styles.navBar} to="/"> Home </Link></li>
            <li> <Link className= {styles.navBar} to="/CoursesAndProjects"> Courses And Projects </Link></li>
            <li> <Link className= {styles.navBar} to="/WorkExpirience"> Work Expirience </Link></li>
            <li> <Link className= {styles.navBar} to="/GoalsAndVision"> Goals And Vision </Link></li>
            <li> <Link className= {styles.navBar} to="/ContactMe"> Contact Me </Link></li>
        </ul>
    );
}

export default NavBar;