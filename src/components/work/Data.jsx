import Work1 from "../../assets/work1.jpg"
import Work2 from "../../assets/work2.jpg"
import Work3 from "../../assets/work3.jpg"
import Work4 from "../../assets/work4.jpg"
import Work5 from "../../assets/work5.jpg"

import cricket from "../../assets/cricket.jpg"
import social from "../../assets/bff.jpg"
import blog from "../../assets/blog.png"
import store from "../../assets/e-store.png"

export const projectData = [
    {
        id: 1,
        image: store,
        title: "E-commerce",
        category: "react",
        link: "https://blake-online-store.vercel.app/",
        tools: ["React", "Redux", "Firebase", "Tailwindcss", "Stripe"],
        description: ["Fully Functional E-Commerce platform. Made with React, React-Redux, React-Router-Dom, Tailwindcss, Stripe."]
    },
    {
        id: 2,
        image: social,
        title: "Socail Media",
        category: "django",
        link: "https://projectdev.pythonanywhere.com/",
        tools: ["Django", "Semantic UI", "JavaScript"],
        description: ["Social Media platform where you can post, make new friends. Made with Django Framework, JavaScript, Bootstrap and Semantic UI for styling."]
    },
    {
        id: 3,
        image: blog,
        title: "Blog Website",
        category: "react",
        link: "https://blog-with-react-beta.vercel.app/",
        tools: ["React", "Appwrite", "TinyMCE", "Redux", "Tailwindcss"],
        description: ["Bloging Platform where you can post content with images. Made with React, Appwrite, TinyMCE, React-Redux, React-Router-Dom, Tailwindcss."]
    },
    {
        id: 4,
        image: cricket,
        title: "Random Winner Game(IPL)",
        category: "django",
        link: "https://sujit10x12.pythonanywhere.com/",
        tools: ["Django", "JavaScript", "Bootstrap"],
        description: ["Random Winner Game of IPL teams. Made with Django, JavaScript, Bootstrap."]
    },
    {
        id: 5,
        image: Work5,
        title: "Blog API",
        category: "DRF",
        link: "",
        tools: [],
        description: [""]
    },
    {
        id: 6,
        image: Work5,
        title: "Store API",
        category: "DRF",
        link: "",
        tools: [],
        description: []
    },
]

export const projectNav = [
    {
        name: "all",
    },
    {
        name: "django",
    },
    {
        name: "react",
    },
    {
        name: "DRF",
    },
]