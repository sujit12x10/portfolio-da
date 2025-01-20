import "./work.css"
import { projectData } from "./Data"
import { projectNav } from "./Data"
import { WorkItems } from "./WorkItems"
import { useEffect, useState } from "react"

export const Works = () => {

    const [item, setItem] = useState({name: "all"})
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)
    
    const handleClick = (event, index) => {
        setItem({name: event.target.textContent})
        setActive(index)
    }

    useEffect(() => {
        if (item.name === "all"){
            setProjects(projectData)
        } else{
            const newProjects = projectData.filter((project) => project.category === item.name)
            console.log(newProjects);
            
            setProjects(newProjects)
        }
    }, [item])

    return (
        <div>
            <div className="work__filters">
            {
                projectNav.map((item, index) => (
                    <span onClick={(event) => handleClick(event, index)} key={item.name} className={`${active === index ? "active-work" : ""} work__item`}>
                        {item.name}
                    </span>
                ))
            }
            </div>

            <div className="work__container container grid">
                {   projects &&
                    projects.map((item) => (
                        <WorkItems item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}