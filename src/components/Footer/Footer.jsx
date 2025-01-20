import { FaGithub } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"
import { GoHome } from "react-icons/go";
import "./footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">SUJEET</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="" className="home__social-icon" target="_blank"><FaGithub /></a>
                    <a href="" className="home__social-icon" target="_blank"><MdOutlineMailOutline /></a>
                </div>

                <span className="footer__copy">
                    &#169; SUJEET. All Rights Reserved
                </span>
            </div>
        </footer>
    )
}