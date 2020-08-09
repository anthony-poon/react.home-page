import React from "react";
import "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
class IndexApp extends React.Component {
    render() {
        return (
            <div className={"container-fluid px-0"}>
                <div className={"hero-image__container"}>
                    <div className={"hero-image__bg-container"}>
                        <div className={"hero-image__bg-text-1"}>
                            PHP
                        </div>
                        <div className={"hero-image__bg-text-2"}>
                            JAVA
                        </div>
                        <div className={"hero-image__bg-text-3"}>
                            NODE
                        </div>
                        <div className={"hero-image__bg-text-4"}>
                            REACT
                        </div>
                    </div>
                    <div className={"hero-image__text-container"}>
                        <div className={"hero-image__line-1"}>I'm</div>
                        <div className={"hero-image__line-2"}>Anthony<br/>Poon</div>
                        <div className={"hero-image__line-3"}>I'm a</div>
                        <div className={"hero-image__line-4"}>Full Stack Developer</div>
                    </div>
                    <div className={"hero-image__footer"}>
                        <div className={"hero-image__footer-icon"}>
                            <FontAwesomeIcon icon={faGithub} className={"mr-4"}/>
                        </div>
                        <div className={"hero-image__footer-icon"}>
                            <FontAwesomeIcon icon={faLinkedin} className={"mr-4"}/>
                        </div>
                    </div>
                </div>
                <div className={"section-1__container"}>
                    <div className={"py-5 px-3"}>
                        <h1 className={"mb-5 text-center text-theme"}>
                            About Me
                        </h1>
                        <div className={"col col-md-8 mx-auto"}>
                            <div className={"section-1__hexagon-wrapper"}>
                                <div className={"section-1__hexagon"}>
                                    <div className={"section-1__hexagon-icon"}>
                                        <FontAwesomeIcon className={""} icon={faBriefcase}/>
                                    </div>
                                </div>
                                <div className={"section-1__hexagon-text"}>
                                    Work
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default IndexApp;