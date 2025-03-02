import { FaUserGraduate } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import "./qualification.css"
import { useState } from "react";


export const Qualification = () => {

    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => setToggleState(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <span className="qualification__icon"><FaUserGraduate /></span>Education
                    </div>

                    <div onClick={() => setToggleState(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <span className="qualification__icon"><PiSuitcaseSimpleDuotone size={25}/>Experience</span>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Django Rest Framework</h3>
                                <span className="qualification__subtitle">
                                    Coursera
                                </span>
                                <div className="qualification__calender">
                                    <span><IoCalendarOutline /> January 2024</span>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Django Framework</h3>
                                <span className="qualification__subtitle">
                                    Coursera
                                </span>
                                <div className="qualification__calender">
                                    <span><IoCalendarOutline /> October 2023</span>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">
                                    Coursera
                                </span>
                                <div className="qualification__calender">
                                    <span><IoCalendarOutline /> January 2023</span>
                                </div>
                            </div>


                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Python</h3>
                                <span className="qualification__subtitle">
                                    Google
                                </span>
                                <div className="qualification__calender">
                                    <span><IoCalendarOutline /> September 2022</span>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BCOM</h3>
                                <span className="qualification__subtitle">
                                    IGNOU
                                </span>
                                <div className="qualification__calender">
                                    <span><IoCalendarOutline /> 2017 - 2020</span>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <p>
                            Having experience with personal projects. I have done projects in Django, Django Rest Framework, React.
                        </p>
                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">
                                    Microsoft - Spain
                                </span>
                                <div className="qualification__calender">
                                    <span><IoCalendarOutline /> 2021 - Present</span>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">
                                    Apple Inc - Spain
                                </span>
                                <div className="qualification__calender">
                                    <span><IoCalendarOutline /> 2020 - 2021</span>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Deginer</h3>
                                <span className="qualification__subtitle">
                                    Figma - Spain
                                </span>
                                <div className="qualification__calender">
                                    <span><IoCalendarOutline /> 2018 - 2020</span>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}