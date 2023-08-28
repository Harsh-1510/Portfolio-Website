import React from "react";
import profilepic from "../assets/profile-pic.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const HeroSection = () => {
    const scrollToContactSection = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src={profilepic} alt="Profile pic" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Harsh Kumar Singh</h1>
                <p className="section__text__p2">Full Stack Developer</p>
                <div className="btn-container">
                    <a href="https://drive.google.com/file/d/1GJBiN4JutNXiG7sj3I8ywmFr1JF11j9K/view?usp=drive_link">
                    <button
                        className="btn btn-color-2"
                    >
                        Download Resume
                    </button>
                    </a>
                    <button
                        className="btn btn-color-1"
                        onClick={scrollToContactSection}
                    >
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <img
                        src={linkedin}
                        alt="Linkdin Image"
                        class="icon"
                        onClick={()=>window.open('https://www.linkedin.com/in/harsh-kumar-singh-475b64201/','_black')}
                    />
                    <img
                        src={github}
                        alt="github image"
                        class="icon"
                        onClick={()=>window.open('https://github.com/Harsh-1510')}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
