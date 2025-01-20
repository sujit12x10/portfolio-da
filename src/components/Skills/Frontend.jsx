import { FaReact } from "react-icons/fa6";
import { DiJsBadge } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

export const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
                {/* Line 1 */}
                <div className="skills__group">
                    <div className="skills__data">
                        <span className="skills-icon"><FaReact size={20}/></span>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <span className="skills-icon"><TbBrandRedux size={20}/></span>
                        <div>
                            <h3 className="skills__name">Redux</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <span className="skills-icon"><DiJsBadge size={20}/></span>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <span className="skills-icon"><SiTailwindcss size={20}/></span>
                        <div>
                            <h3 className="skills__name">Tailwind</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>
                </div>
                
                {/* Line 2 */}
                <div className="skills__group">
                    <div className="skills__data">
                        <span className="skills-icon"><FaBootstrap size={20}/></span>
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <span className="skills-icon"><FaCss3Alt size={20}/></span>
                        <div>
                            <h3 className="skills__name">CSS3</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <span className="skills-icon"><FaHtml5 size={20}/></span>
                        <div>
                            <h3 className="skills__name">HTML5</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}