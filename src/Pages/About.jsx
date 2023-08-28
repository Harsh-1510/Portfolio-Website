import React from "react";
import aboutpic from "../assets/about-pic.png";
import experience from "../assets/experience.png";
import education from "../assets/education.png";
import arrow from "../assets/arrow.png";


const About = () => {
    return (
        <section id="about">
            <p className="section__text__p1">Get to know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img src={aboutpic} alt="Profile Pic" class="about-pic" />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img
                                src={experience}
                                alt="Experience icon"
                                class="icon"
                            />
                            <h3>Experience</h3>
                            <p>
                                FullStack Development
                            </p>
                        </div>
                        <div className="details-container">
                            <img
                                src={education}
                                alt="education icon"
                                class="icon"
                            />
                            <h3>Education</h3>
                            <p>B.E. Computer Science</p>
                            <p>UIET Panjab University, Chandigarh</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                        As a MERN stack developer fresher, my career objective is to leverage my expertise in frontend and backend development to contribute to the success of an organization while continuously learning and growing in my role. My expertise in the MERN stack aligns perfectly with the requirements of a MERN stack developer role. I am looking for an opportunity to work with an organization where I can enhance my skills and contribute to the development of innovative web applications.
                        </p>
                    </div>
                </div>
            </div>
            <a href="#experience">
                <img
                    src={arrow}
                    alt="Arrow icon"
                    className="icon arrow"
                />
            </a>
        </section>
    );
};

export default About;
