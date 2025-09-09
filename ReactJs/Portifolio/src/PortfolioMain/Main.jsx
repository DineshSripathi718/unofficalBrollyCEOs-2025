import './Main.css';
import Card from './CardComponent/Card';
import training from '../assets/training.jpg';
import restApi from '../assets/restApis.jpg';
import softwareDev from '../assets/softwareDevelopment.jpg';


const Main = () => {
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
           <Card
            image = {softwareDev}
            title = "Full Stack Development (Java)"
            para1 = "Tech Stack: Java 8+, Spring Boot, Hibernate/JPA, REST APIs, MySQL, React.js"
            para2 = "I create end-to-end Java-based applications with layered architecture, responsive frontend, and seamless database integration."
           ></Card> 
           <Card
            image = {restApi}
            title = "API Development & Integration"
            para1 = "Bridging Systems Seamlessly."
            para2 = "RESTful APIs built for flexibility and performance, tested using Postman and integrated with frontend platforms for complete functionality."
           ></Card> 
           <Card
            image = {training}
            title = "Technical Training & Mentorship"
            para1 = "Teaching Code Like a Developer."
            para2 = "Conduct structured training sessions for students, interns, and junior devs covering Java, Spring Boot, SQL, RESTful services, Git, and microservice basics."
           ></Card> 
        </section>
    </main>
}

export default Main;