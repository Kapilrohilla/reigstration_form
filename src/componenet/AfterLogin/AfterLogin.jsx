import React from 'react'
import './AfterLogin.css';

const AfterLogin = (props) => {
    return (
        <div className="loggedIn">
            <h1 className="title">
                Settings
            </h1>
            <div className="logout">
                <section className="userProfile section">
                    <div className="nav">
                        <h2>Profile</h2>
                        <p>Edit</p>
                    </div>
                    <div className="profile">
                        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
                        <div className="profileDetail">
                            <h3>John Do</h3>
                            <p>Digital Product Designer</p>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="nav">
                        <h2>Show events</h2>
                        <p>Near me</p>
                    </div>
                </section>
                <section className="section">
                    <div className="nav">
                        <h2>Maximum distance: </h2>
                        <p>14km.</p>
                    </div>
                    <input type="range" defaultValue={70} min="0" max="100" />
                </section>
                <section className="section">
                    <div className="nav">
                        <h2>Notification</h2>
                        <p>OFF.</p>
                    </div>
                </section>
                <section className="logoutBtn section">
                    <button onClick={() => props.handleLogin(false)}>Logout</button>
                </section>
            </div>
        </div >
    )
}

export default AfterLogin
