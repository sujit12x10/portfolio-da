import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

export const OtherTools = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Other tools</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <span className="skills-icon"><FaGithub size={20}/></span>
                        <div>
                            <h3 className="skills__name">Github</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <span className="skills-icon"><SiPostman  size={20}/></span>
                        <div>
                            <h3 className="skills__name">Postman</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <span className="skills-icon"><VscVscode  size={20}/></span>
                        <div>
                            <h3 className="skills__name">VS Code</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}