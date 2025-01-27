import "./skills.css"
import { Frontend, Backend, OtherTools } from "../../index"
import { FaReact } from "react-icons/fa6";
import { DiJsBadge } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";

export const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Techinal Level</span>

            <div className="skills__container container grid">
                <div className="skills__group">
                    <h3 className="skill__title">Languages</h3>
                    <ul>
                        <li><span className="skills-icon"><FaPython size={20}/></span> Python</li>
                        <li><span className="skills-icon"><DiJsBadge size={20}/></span> JavaScript</li>
                        <li><span className="skills-icon"><FaHtml5 size={20}/></span> HTML5</li>
                        <li><span className="skills-icon"><FaCss3Alt size={20}/></span> CSS3</li>
                    </ul>
                </div>
                <div className="skills__group">
                    <h3 className="skill__title">Frameworks</h3>
                    <ul>
                        <li><span className="skills-icon"><FaReact size={20}/></span> React</li>
                        <li><span className="skills-icon"><SiDjango size={20}/></span> Django</li>
                        <li><span className="skills-icon"><IoInformationCircle size={20}/></span> Django Rest Framework</li>
                        <li><span className="skills-icon"><SiTailwindcss size={20}/></span> Tailwind CSS</li>
                        <li><span className="skills-icon"><FaBootstrap size={20}/></span> Bootstrap</li>
                    </ul>
                </div>
                <div className="skills__group">
                    <h3 className="skill__title">Other tools</h3>
                    <ul>
                        <li><span className="skills-icon"><FaGithub size={20}/></span> Github</li>
                        <li><span className="skills-icon"><VscVscode size={20}/></span> VS Code</li>
                        <li><span className="skills-icon"><SiPostman size={20}/></span> Postman</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}