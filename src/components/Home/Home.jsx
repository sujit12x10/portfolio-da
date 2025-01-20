import "./home.css"
import { Social, Data, ScrollDown } from "../../index"

export const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                        <div className="home__img"></div>
                    <Data />
                </div>
                <ScrollDown />
            </div>
        </section>
    )
}