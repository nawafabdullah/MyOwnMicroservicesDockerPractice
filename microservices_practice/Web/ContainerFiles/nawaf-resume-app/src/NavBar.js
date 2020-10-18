import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <ul>
            <li> <Link to="/"> Home </Link></li>
            <li> <Link to="/CoursesAndProjects"> Courses And Projects </Link></li>
            <li> <Link to="/WorkExpirience"> Work Expirience </Link></li>
            <li> <Link to="/GoalsAndVision"> Goals And Vision </Link></li>
            <li> <Link to="/ContactMe"> Contact Me </Link></li>
        </ul>
    );
}

export default NavBar;