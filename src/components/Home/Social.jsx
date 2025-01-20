import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const Social = () => {
    return (
        <div className="home__social">
            <a href="" className="home__social-icon" target="_blank"><FaGithub /></a>
            <a href="" className="home__social-icon" target="_blank"><MdOutlineMailOutline /></a>
        </div>
    )
}