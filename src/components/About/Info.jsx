import { BsSuitcaseLg } from "react-icons/bs";
import { LuAward } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

export const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <span className="about__icon"><LuAward /></span>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">8 Years Working</span>
            </div>
            
            <div className="about__box">
                <span className="about__icon"><BsSuitcaseLg /></span>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">42+ Projects</span>
            </div>
            <div className="about__box">
                <span className="about__icon"><BiSupport /></span>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>

        </div>
    )
}