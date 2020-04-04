import React, { useState } from 'react'
// import { Button } from 'antd'
// import { User } from './components/User'
// import { UserModal } from './components/UserModal'
import video from './assets/videos/video2.mp4'

import './App.css'

export default function App() {

    const [userChange, setUserChange] = useState(false)
    const [userModal, setUserModal] = useState(false)

    const UserChanged = () => {
        setUserChange(!userChange)
    }

    const handleClick = () => {
        setUserModal(!userModal)
    }

    return (
        <div className="app">
            <nav className="app-nav">
                <div className="nav">
                    <ul className="link-container">
                        <a>
                            <li className="link">Home</li>
                        </a>
                        <a>
                            <li className="link">About</li>
                        </a>
                        <a>
                            <li className="link">Work</li>
                        </a>
                    </ul>
                </div>
            </nav>
            <div className="app-header">
                <video className="app-header-video" loop={true} autoPlay={true} src={video}>
                </video>
                <div className="brand">
                    <span>
                        <h2>Generic Designs</h2>
                        <span className="brand-footer">Developer - Dreamer - Generic man</span>
                    </span>
                </div>
            </div>
            <div className="app-content">
                <section className="section-one">

                </section>
            </div>
            {/* <Button type="primary" onClick={handleClick}>
                Create user
            </Button>
            <UserModal handleClick={handleClick} UserChanged={UserChanged} open={userModal} />
            <div className="users">
                <User userChange={userChange} UserChanged={UserChanged} />
            </div> */}
        </div>
    )

}
