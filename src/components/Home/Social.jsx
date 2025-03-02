import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/sujit12x10/" className="home__social-icon" target="_blank"><FaGithub /></a>
            <a href="mailto:sujit12x10@gmail.com" className="home__social-icon" target="_blank"><MdOutlineMailOutline /></a>
        </div>
    )
}