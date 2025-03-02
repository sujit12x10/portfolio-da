import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export const WorkItems = ({item}) => {
    const [toggleState, setToggleState] = useState(false)

    
    return (
        <>
            <div className="work__card" key={item.id}>
                <img onClick={() => setToggleState(true)} src={item.image} alt="" className="work__img"/>
                <div className="work__detail">
                    <h3 className="work__title">{item.title}</h3>
                    {/* <p onClick={() => setToggleState(true)}>Detail</p> */}
                    <a href={item.link} target="_blank" className="work__button">
                        Demo <FaArrowRightLong className="work__button-icon"/>
                    </a>    
                </div>
                <div className="work__detail-tools">
                    {
                        item.tools.map((item) => (
                            <button key={item} className="work__detail-tool-button">{item}</button>
                        ))
                    }
                </div>
                {/* <a href={item.link} target="_blank" className="work__button">
                    Demo <FaArrowRightLong className="work__button-icon"/>
                </a> */}
            </div>
            <div className={toggleState ? "detail__modal detail__modal-active" : "detail__modal"}>
                <div className="detail__modal-content">
                    <span onClick={() => setToggleState(false)} className="detail__modal-close"><IoClose /></span>
                    <div className="detail__modal-description">
                        <h3 className="detail__modal-title">{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}