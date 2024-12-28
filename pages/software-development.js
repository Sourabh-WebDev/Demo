import React, { useState } from 'react'
import PageBanner from '../src/components/PageBanner'
import Layout from '../src/layout/Layout'

const SoftwareDevelopment = () => {
    const [active, setActive] = useState(`collapse1`);
    const onClick = (value) => {
        console.log(value);
        setActive(value === active ? "" : value);
    };

    const tasks = [

        "Understand the Requirements ",
        "Technology Stack ",
        "Map Services ",
        "Data Integration ",
        "Spatial Analysis ",
        "User Interface ",
        "Performance Optimization ",
        "Cross - Platform Compatibility ",
        "Offline Capabilities ",
        "Scalability and Security ",
        "Testing ",
        "Documentation and Support ",
        "Compliance "

    ];


    return (

        <Layout>
            <PageBanner pageName={"Software Development"} img={"assets/images/newweb/WDS.jpg"} />
            <section className="course-details-area pt-130 rpt-100">
                <div className="container">
                    <div className="row large-gap">
                        <div className="col-lg-6">
                            <div className="course-details-content">
                                <div className="course-header">
                                    <span className="category">Software Development</span>
                                    <img src="assets/images/shapes/line-shape.png" alt="Line" />
                                    {/* <span className="off">30% off</span> */}
                                    <div className="ratting">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <span>(50)</span>
                                    </div>
                                </div>
                                <h2>Software Development</h2>
                                {/* <ul className="author-date-enroll">
                                    <li>
                                        <img
                                            src="assets/images/coachs/couse-author.jpg"
                                            alt="Authro"
                                        />
                                        <h6>Donald J. Miller</h6>
                                    </li>
                                    <li>
                                        <i className="fas fa-cloud-upload-alt" /> Last Update
                                        February 15, 2022
                                    </li>
                                    <li>
                                        <i className="far fa-user" /> 25 Enrolled
                                    </li>
                                </ul> */}
                                <div className="image mb-35">
                                    <img
                                        width={768}
                                        src="assets/images/newweb/SFT.jpg"
                                        alt="Course Details"
                                    />
                                </div>
                                <p>
                                    Quality-centered and adherent to mature software development practices, Apex Path provides application development services to startups, software companies, and enterprises across 30+ industries. We are ready to offer end-to-end development that covers everything from business analysis to software delivery and support, help modernize your legacy software, or augment your team with our IT experts at any stage of SDLC.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-6">

                            <h3 className="mt-40">Reliable Techs & Tools We Are Proficient In  ​</h3>
                            {/* <ul className="list-style-two mb-45">

                                {
                                    tasks.map((item) => (
                                        <li>
                                            {item}
                                        </li>
                                    ))
                                }
                            </ul> */}
                            <div>
                                <h3 className="mt-40">Back-end programming languages ​</h3>
                                <p> .Net, Node, Java, C#, Python, PHP, Ruby, GO</p>
                            </div>
                            <div>
                                <h3 className="mt-40">Front-end programming languages ​</h3>
                                <p>HTML, CSS, JavaScript, Angular, React, Vue</p>
                            </div>
                            <div>
                                <h3 className="mt-40">Desktop​</h3>
                                <p>C++, QT, WPF, JavaFX, Swift, Python, C#, OBJ-C​</p>
                            </div>
                            <div>
                                <h3 className="mt-40">Mobile​</h3>
                                <p>IOS, Android, React Native, Flutter,​</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    )
}

export default SoftwareDevelopment