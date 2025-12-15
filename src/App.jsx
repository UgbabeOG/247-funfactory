import React, { useState } from 'react';
import { Lock, Phone, Mail } from 'lucide-react';

function App() {
    const [showRestricted, setShowRestricted] = useState(false);

    const handleRestrictedClick = (e) => {
        e.preventDefault();
        setShowRestricted(true);
        setTimeout(() => setShowRestricted(false), 2000);
    };

    return (
        <>
            <video className="video-bg" autoPlay loop muted playsInline>
                <source src="/hero-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>

            <div className="app-container">
                <nav>
                    <div className="logo">247 FunFactory</div>
                    <div className="nav-links">
                        {['Shop', 'Dungeon', 'Membership', 'Events'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="nav-item locked"
                                onClick={handleRestrictedClick}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </nav>

                <main>
                    <h1>Restricted Access</h1>
                    <p className="subtitle">
                        Welcome to the FunFactory. This area is reserved for verified members only.
                        <br />
                        Curated experiences. Exclusive toys. Private dungeons.
                    </p>

                    <div className="contact-card">
                        <h3 className="contact-heading">Gain Access Here</h3>
                        <div className="contact-icons">
                            {/* <a href="tel:7043886223" className="contact-icon" title="Call Us"><Phone size={32} /></a> */}
                        </div>
                        <a href="mailto:247funfactory@gmail.com" className="email-bold">247funfactory@gmail.com</a>
                        <div className={`restricted-notice ${showRestricted ? 'visible' : ''}`}>
                            <Lock size={12} style={{ display: 'inline', marginRight: '5px' }} />
                            Access Denied. Contact us for verification.
                        </div>
                    </div>
                </main>

                <footer>
                    <div className="footer-content">
                        <div className="footer-links">
                            <a href="#" className="footer-link" onClick={handleRestrictedClick}>Privacy Policy</a>
                            <a href="#" className="footer-link" onClick={handleRestrictedClick}>Terms of Service</a>
                            <a href="#" className="footer-link" onClick={handleRestrictedClick}>Join the Waitlist</a>
                        </div>
                        <p>&copy; {new Date().getFullYear()} 247 FunFactory. All Rights Reserved. Private Club.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default App;
