import "./header.css"
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { useEffect, useState } from "react";

export const Header = () => {

    const [toggle, setToggle] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if (this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })

    const navItems = [
        {
            name: "home",
            icon: <GoHome />
        },
        {
            name: "about",
            icon: <FaRegUser />
        },
        {
            name: "skills",
            icon: <GiSkills />
        },
        {
            name: "projects",
            icon: <FaRegFileAlt />
        },
        {
            name: "contact",
            icon: <AiOutlineSend />
        },
    ]

    const home = document.querySelector("#home")

    useEffect(() => {
        const sections = [...document.querySelectorAll(".section")]
        
        const observerShort = new IntersectionObserver((entries) => {
            for (let entry of entries){
                if (entry.isIntersecting){
                    console.log(entry);
                    setActiveNav(`#${entry.target.id}`)
                }
            }
        }, {threshold: 0.2})

        const observerLong = new IntersectionObserver((entries) => {
            for (let entry of entries){
                if (entry.isIntersecting){
                    console.log(entry);
                    setActiveNav(`#${entry.target.id}`)
                }
            }
        }, {threshold: 0.5})

        sections.map((section) => {
            observerShort.observe(section)
        })

        sections.map((section) => {
            observerLong.observe(section)
        })
    })

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">SUJEET</a>
            
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"} >
                    <ul className="nav__list grid">
                        {
                            navItems.map(item => 
                                <li key={item.name} className="nav__item">
                                    <a href={`#${item.name}`} onClick={() => setActiveNav(`#${item.name}`)} className={activeNav === `#${item.name}` ? "nav__link active-link" : "nav__link"}>
                                        <span className="nav__icon">{item.icon}</span> {item.name}
                                    </a>
                                </li>
                            )
                        }
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