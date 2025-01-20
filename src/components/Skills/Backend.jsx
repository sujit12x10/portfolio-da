import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

export const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <span className="skills-icon"><FaPython size={20}/></span>
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <span className="skills-icon"><IoInformationCircle  size={20}/></span>
                        <div>
                            <h3 className="skills__name">Django Rest Framework</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <span className="skills-icon"><SiDjango  size={20}/></span>
                        <div>
                            <h3 className="skills__name">Django</h3>
                            <span className="skills__level">Intermidate</span>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}