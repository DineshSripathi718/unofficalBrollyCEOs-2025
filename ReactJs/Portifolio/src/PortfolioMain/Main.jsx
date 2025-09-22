import './Main.css';
import Card from './CardComponent/Card';
import training from '../assets/training.jpg';
import restApi from '../assets/restApis.jpg';
import softwareDev from '../assets/softwareDevelopment.jpg';
import EDetails from './EDetailsCardComponent/EDetails';
import { useState } from 'react';


const Main = () => {

    const [FullStackDevelopmentButton, setFullStackDevelopmentButton] = useState(true);
    const [APIDevelopmentNIntegrationButton, setAPIDevelopmentNIntegrationButton] = useState(true);
    const [TechnicalTrainingNMentorshipButton, setTechnicalTrainingNMentorshipButton] = useState(true);

    const ExperinceArray = [
        {
            company : "Digital Brolly",
            designation : "Software Development Trainer",
            timeline : "Dec 2024 - present",
            description : "I am responsible for backend development and integration of internal platforms used for training and content delivery. I design and develop RESTful APIs using Java and Spring Boot, ensuring seamless communication with frontend interfaces. My day-to-day activities involve collaborating with frontend developers, optimizing backend performance, and guiding interns through the development lifecycle. Additionally, I contribute to the technical upskilling of new recruits by mentoring them on API structures and backend logic."
        },
        {
            company : "Freelancing",
            designation : "Full Stack Developer",
            timeline : "Since 2023",
            description : "I am responsible for backend development and integration of internal platforms used for training and content delivery. I design and develop RESTful APIs using Java and Spring Boot, ensuring seamless communication with frontend interfaces. My day-to-day activities involve collaborating with frontend developers, optimizing backend performance, and guiding interns through the development lifecycle. Additionally, I contribute to the technical upskilling of new recruits by mentoring them on API structures and backend logic."
        },
        {
            company : "Pari Tech Soft Pvt.Ltd",
            designation : "Software Developer",
            timeline : "May 2024 - Nov 2024",
            description : "I am responsible for backend development and integration of internal platforms used for training and content delivery. I design and develop RESTful APIs using Java and Spring Boot, ensuring seamless communication with frontend interfaces. My day-to-day activities involve collaborating with frontend developers, optimizing backend performance, and guiding interns through the development lifecycle. Additionally, I contribute to the technical upskilling of new recruits by mentoring them on API structures and backend logic."
        },
        {
            company : "Freelance Trainer",
            designation : "Java Full Stack Trainer",
            timeline : "Since 2022",
            description : "I am responsible for backend development and integration of internal platforms used for training and content delivery. I design and develop RESTful APIs using Java and Spring Boot, ensuring seamless communication with frontend interfaces. My day-to-day activities involve collaborating with frontend developers, optimizing backend performance, and guiding interns through the development lifecycle. Additionally, I contribute to the technical upskilling of new recruits by mentoring them on API structures and backend logic."
        }
    ]

    const EducationArray = [
        {
            institue : "Vignan Information and Technology",
            degree : "Master of Computer Applications",
            timeline : "Dec 2024 - present",
            description : "I am responsible for backend development and integration of internal platforms used for training and content delivery. I design and develop RESTful APIs using Java and Spring Boot, ensuring seamless communication with frontend interfaces. My day-to-day activities involve collaborating with frontend developers, optimizing backend performance, and guiding interns through the development lifecycle. Additionally, I contribute to the technical upskilling of new recruits by mentoring them on API structures and backend logic."
        },
        {
            institue : "SSR Degree College",
            degree : "Bachleor of Computer Science",
            timeline : "Dec 2024 - present",
            description : "I am responsible for backend development and integration of internal platforms used for training and content delivery. I design and develop RESTful APIs using Java and Spring Boot, ensuring seamless communication with frontend interfaces. My day-to-day activities involve collaborating with frontend developers, optimizing backend performance, and guiding interns through the development lifecycle. Additionally, I contribute to the technical upskilling of new recruits by mentoring them on API structures and backend logic."
        },
        {
            institue : "Narayana Junior College",
            degree : "MPC",
            timeline : "Dec 2024 - present",
            description : "I am responsible for backend development and integration of internal platforms used for training and content delivery. I design and develop RESTful APIs using Java and Spring Boot, ensuring seamless communication with frontend interfaces. My day-to-day activities involve collaborating with frontend developers, optimizing backend performance, and guiding interns through the development lifecycle. Additionally, I contribute to the technical upskilling of new recruits by mentoring them on API structures and backend logic."
        },
        {
            institue : "Jawahar Public School",
            degree : "Secondary School",
            timeline : "Dec 2024 - present",
            description : "I am responsible for backend development and integration of internal platforms used for training and content delivery. I design and develop RESTful APIs using Java and Spring Boot, ensuring seamless communication with frontend interfaces. My day-to-day activities involve collaborating with frontend developers, optimizing backend performance, and guiding interns through the development lifecycle. Additionally, I contribute to the technical upskilling of new recruits by mentoring them on API structures and backend logic."
        }
    ]


    const FSDButtonHandler = () => {
        setAPIDevelopmentNIntegrationButton(false);
        setTechnicalTrainingNMentorshipButton(false);
        setFullStackDevelopmentButton(true);
    }

    const ADIButtonHandler = () => {
        setAPIDevelopmentNIntegrationButton(true);
        setTechnicalTrainingNMentorshipButton(false);
        setFullStackDevelopmentButton(false);
    }

    const TTMButtonHandler = () => {
        setAPIDevelopmentNIntegrationButton(false);
        setTechnicalTrainingNMentorshipButton(true);
        setFullStackDevelopmentButton(false);
    }

    const resetButtons = () => {
        setAPIDevelopmentNIntegrationButton(true);
        setTechnicalTrainingNMentorshipButton(true);
        setFullStackDevelopmentButton(true);
    }
    return <main>
        <section className = "hero">
            <div className='navigation'>
                <a href="">
                    home
                </a>
                <a href="">
                    experience
                </a>
                <a href="">
                    services
                </a>
                <a href="">
                    education
                </a>
                <a href="">
                    projects
                </a>
                <a href="">
                    testimonials
                </a>
                <a href="">
                    download resume
                </a>
            </div>
            <div className='details'>
                <div className="name">
                    Dinesh Sripathi
                </div>
                <div className="social-media-icons">
                    <a href="" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="" target="_blank">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </div>
                <div>
                    <p>
                        I’m a passionate Java Full Stack Developer with a strong focus on backend development, API integration, and real-world problem-solving using Spring Boot, Hibernate, and modern development stacks. With experience working on live industry projects and mentoring aspiring developers, I bring both technical expertise and teaching experience to the table.
                    </p>
                    <p>
                        I thrive in collaborative environments, contribute to code and clarity, and believe in continuous learning and teaching.
                    </p>
                </div>
            </div>
        </section>
        <section className='services-container'>
            <h1 className="title">Services Offered</h1>
            <div className="option-button">
                <button className={(!FullStackDevelopmentButton)? "" : "active"} onClick={FSDButtonHandler} onDoubleClick={resetButtons}>Full Stack Development</button>
                <button className={(!APIDevelopmentNIntegrationButton)? "" : "active"} onClick={ADIButtonHandler} onDoubleClick={resetButtons}>API Development & Integration</button>
                <button className={(!TechnicalTrainingNMentorshipButton)? "" : "active"} onClick={TTMButtonHandler} onDoubleClick={resetButtons}>Technical Training & Mentorship</button>
            </div>
            <div className='containers'>
                {FullStackDevelopmentButton && <Card
                    image = {softwareDev}
                    title = "Full Stack Development (Java)"
                    para1 = "Tech Stack: Java 8+, Spring Boot, Hibernate/JPA, REST APIs, MySQL, React.js"
                    para2 = "I create end-to-end Java-based applications with layered architecture, responsive frontend, and seamless database integration."
                ></Card>}
                {APIDevelopmentNIntegrationButton && <Card
                    image = {restApi}
                    title = "API Development & Integration"
                    para1 = "Bridging Systems Seamlessly."
                    para2 = "RESTful APIs built for flexibility and performance, tested using Postman and integrated with frontend platforms for complete functionality."
                ></Card> }
                {TechnicalTrainingNMentorshipButton && <Card
                    image = {training}
                    title = "Technical Training & Mentorship"
                    para1 = "Teaching Code Like a Developer."
                    para2 = "Conduct structured training sessions for students, interns, and junior devs covering Java, Spring Boot, SQL, RESTful services, Git, and microservice basics."
                ></Card>}
            </div>  
        </section>
        <EDetails
            sectionTitle = "Relavent Experience"
            className= "experience"
            information = {ExperinceArray}
            sectionName="experienceContainers"
        ></EDetails>
        <EDetails
            sectionTitle="Education"
            className="education"
            information={EducationArray}
            sectionName="educationContainers"
        ></EDetails>
    </main>
}

export default Main;