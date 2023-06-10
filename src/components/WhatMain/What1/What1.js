import { useState } from 'react';
import './What1.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const What1 = () => {

    return (
        <header className='header1_What1'>
            <div className='container'>
                <div className='header_content_what1'>
                    <h1>WE VALUE RELATIONSHIPS</h1>
                    <p>We are burning not only with cool projects, but also with the people behind them. And a perfect team match truly matters. Our clients are our partners, co-authors, and friends at all project stages. Here are some examples of times when Gearheart became a best-fit teammate for our customers.</p>
                    <h1>WE KNOW EXACTLY WHAT WE ARE GOOD AT</h1>
                    <p>Our clear definition makes us really good experts.</p>
                    <h2>WE PROVIDE:</h2>
                    <ul>
                        <li>Programming.</li>
                        <li>Testing.</li>
                        <li>Development process management.</li>
                        <li>Server configuration and support.</li>
                        <li>Documentation creation.</li>
                    </ul>
                    <h2>WE DO NOT PROVIDE:</h2>
                    <ul>
                        <li>Consulting; we can share our experience, but consulting is not our area.</li>
                        <li>Design; if you don't have your own designer, we are ready to recommend our partners.</li>
                        <li>AI/VR/AR/ML; we can determine the need for such technologies and attract third-party narrow experts.</li>
                        <li>Promotion and sales; we are techies, so business endeavors are up to you.</li>
                    </ul>
                    <h1>IT’S EASY TO GET US STARTED</h1>
                    <p>If you have a vision for a future product, you simply need to reach out and tell us your idea. There’s no need to include technical specifications and other complex documentation, and we won’t burden you with requests for payment or cost estimations right away. If we feel your project is a good match for us, we will assemble a team, draw up a roadmap, and launch sprints. There will be interesting and difficult work ahead, but this stage is very simple.</p>
                    <p className='para_what'>More about our relationships from <a href="#">SmartSuite</a> CEO interview</p>
                    <div className='header_button_what1'>TO THE INTERVIEW <ArrowRightAltIcon style={{ fontSize: '4rem', verticalAlign: 'middle' }} />
                    </div>
                </div>
            </div>
        </header >
    );
};

export default What1;
