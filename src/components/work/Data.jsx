import Work1 from "../../assets/work1.jpg"
import Work2 from "../../assets/work2.jpg"
import Work3 from "../../assets/work3.jpg"
import Work4 from "../../assets/work4.jpg"
import Work5 from "../../assets/work5.jpg"

import cricket from "../../assets/cricket.jpg"
import social from "../../assets/bff.jpg"
import blog from "../../assets/blog.png"
import store from "../../assets/store.png"

export const projectData = [
    {
        id: 1,
        image: store,
        title: "E-commerce",
        category: "react",
        link: "https://blake-online-store.vercel.app/",
        tools: ["React", "Redux", "Firebase", "Tailwindcss", "Stripe"],
        description: ["This project showcases a simple E-Commerce website created using React, React-Redux, React-Router-Dom, Tailwindcss, Stripe."]
    },
    {
        id: 2,
        image: social,
        title: "Social Media",
        category: "django",
        link: "https://projectdev.pythonanywhere.com/",
        tools: ["Django", "Semantic UI", "JavaScript"],
        description: ["Social media web application. This will include functionality of posting content with images, commenting, liking post, making new friends. Django Framework, JavaScript, Bootstrap and Semantic UI are used in this project."]
    },
    {
        id: 3,
        image: blog,
        title: "Blog Website",
        category: "react",
        link: "https://blog-with-react-beta.vercel.app/",
        tools: ["React", "Appwrite", "TinyMCE", "Redux", "Tailwindcss"],
        description: ["A Bloging Website that I have created with React, Appwrite, TinyMCE, React-Redux, React-Router-Dom, Tailwindcss. We can create a post, edit it, delete it and leave some comment in it."]
    },
    {
        id: 4,
        image: cricket,
        title: "Random Winner Game(IPL)",
        category: "django",
        link: "https://sujit10x12.pythonanywhere.com/",
        tools: ["Django", "JavaScript", "Bootstrap"],
        description: ["A simple web application created with Django, JavaScript and Bootstrap. It randomly choose a winner between two teams. You can play a full IPL tournament and 1 team emerged as a winner randomly."]
    },
    {
        id: 5,
        image: Work5,
        title: "Store API",
        category: "DRF",
        link: "https://sujit1210.pythonanywhere.com/api/v1/",
        tools: ["Django Rest Framework", "Other Tools"],
        description: [""]
    },
    {
        id: 6,
        image: Work5,
        title: "Blog API",
        category: "DRF",
        link: "https://github.com/sujit12x10/blango",
        tools: ["Django Rest Framework", "Other Tools"],
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