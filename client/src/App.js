import React from "react";
import video from './assets/videos/video2.mp4'
import {
    Route,
    Link,
} from 'react-router-dom'
import { FaLaptopCode } from "react-icons/fa";
import About from "./components/About";
import Work from './components/Work'

import './App.css'

export default function App() {
    return (
        <div className="app">
            <nav className="app-nav">
                <div className="nav">
                    <FaLaptopCode />
                    <ul className="link-container">
                        <Link to="/" >
                            <li className="link">Home</li>
                        </Link>
                        <Link to="/about">
                            <li className="link">About</li>
                        </Link>
                        <Link to="/work">
                            <li className="link">Work</li>
                        </Link>
                    </ul>
                </div>
            </nav>
            <div className="app-header">
                <video className="app-header-video" loop autoPlay muted src={video}>
                    <source src={video} type="video/mp4" /> Your browser does not support the video tag.
                </video>
                <div className="brand">
                    <span>
                        <h2>Generic Designs</h2>
                        <span className="brand-footer">Developer - Dreamer - Generic man</span>
                    </span>
                </div>
            </div>
            <div className="app-content">
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/work">
                        <Work />
                    </Route>
            </div>
        </div>
    )

}
