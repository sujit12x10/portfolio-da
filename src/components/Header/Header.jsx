import "./header.css"
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { useState } from "react";

export const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if (this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })

    const [toggle, setToggle] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">SUJEET</a>
            
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"} >
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <span className="nav__icon"><GoHome /></span> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"} href="#about">
                                <span className="nav__icon"><FaRegUser /> </span> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"} href="#skills">
                                <span className="nav__icon"><FaRegFileAlt /></span> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"} href="#portfolio">
                                <span className="nav__icon"><FaRegImage /></span> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"} href="#contact">
                                <span className="nav__icon"><AiOutlineSend /></span>Contact
                            </a>
                        </li>
                    </ul>
                    <span className="nav__close" onClick={() => setToggle(!toggle)}>
                        <IoClose />
                    </span>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <AiOutlineAppstore size={30}/>
                </div>
            </nav>
        </header>
    )
}