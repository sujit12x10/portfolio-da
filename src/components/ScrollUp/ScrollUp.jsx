import "./scrollup.css"
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup")
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll")
    })

    return (
        <a href="#" className="scrollup">
            <span className="scrollup__icon"><MdKeyboardDoubleArrowUp /></span>
        </a>
    )
}