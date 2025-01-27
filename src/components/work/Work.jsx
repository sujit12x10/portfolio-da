import "./work.css"
import { Works } from "./Works"

export const Work = () => {
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Most Recent Works</span>

            <Works />
        </section>
    )
}