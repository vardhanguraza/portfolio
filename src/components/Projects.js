import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            pane: "first",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            pane: "second",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            pane: "third",
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>These are my own projects. Created by my own knowledge using tools freely available online.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <Row>
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                                <p>Social media dashboard: a dashboard that aggregates data from various social media platforms. This project demonstrates my ability to work with third-party APIs, data visualization, and responsive design.</p>

                                                            </Row>

                                                        )
                                                    })
                                                }
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <Row>
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                                <p>Coming soon - Real time chat application: a real-time chat application using technologies like WebSocket or a chat API. Implemented features such as private messaging, group chats, and message notifications. </p>

                                                            </Row>

                                                        )
                                                    })
                                                }
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <Row>
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                                <p> My own React Components Library named Gurza Components Library. This collection of reusable React components is designed to empower developers with high-quality, customizable UI elements. With a focus on modern design principles and user experience, these components streamline development while ensuring a polished and consistent look across projects. Explore the documentation and examples to see how Gurza Components Library can enhance your web development workflow and bring a touch of elegance to your applications</p>
                                                            </Row>
                                                        )
                                                    })
                                                }
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}