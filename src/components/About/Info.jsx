import { BsSuitcaseLg } from "react-icons/bs";
import { RiFileTextLine } from "react-icons/ri";
import { FiAward } from "react-icons/fi";

export const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <span className="about__icon"><BsSuitcaseLg /></span>
                <h3 className="about__title">Experience</h3>
                {/* <span className="about__subtitle">8 Years Working</span> */}
                <span className="about__subtitle">Fresher</span>
            </div>
            
            <div className="about__box">
                <span className="about__icon"><RiFileTextLine /></span>
                {/* <h3 className="about__title">Completed</h3> */}
                {/* <span className="about__subtitle">42+ Projects</span> */}
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">Personal Projects</span>
            </div>
            <div className="about__box">
                {/* <span className="about__icon"><BiSupport /></span>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span> */}
                <span className="about__icon"><FiAward /></span>
                <h3 className="about__title">Quality</h3>
                <span className="about__subtitle">Dedicated</span>
            </div>
        </div>
    )
}