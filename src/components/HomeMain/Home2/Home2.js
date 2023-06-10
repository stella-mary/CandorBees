import { useState } from 'react';
import './Home2.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home2 = () => {

    return (
        <header className='header4_Home2A'>
            <div className='container'>
                <div className='row'>
                    <div className='header_content4'>
                        <h1>We believe in transparency, and that extends to our process as well.</h1>
                        <p>Our process is designed to be straightforward, reliable, and customer-friendly. We grant customers access to all essential project tools and maintain consistent communication throughout. Utilizing a Scrum-based workflow, we ensure efficient collaboration, even across different time zones between our team and clients.</p>
                    </div>
                </div>
                <div className='header_button'>LOOK AT HOW WE WORK</div>

                <div className='header5_Home2'>
                    <div className='header_content5'>
                        <h2>"We have carefully chosen a range of established and adaptable technologies that empower us to develop fully functional apps of any level of complexity, starting from scratch. This is our tried-and-true approach to delivering exceptional results."</h2>
                        <h1>REACT, NODE, NEXT, NEST, MONGODB, POSTGRESQL</h1>
                    </div>

                    <div className='header_content4_Home2'>
                        <h1>OUR CANDORBEES</h1>
                        <p>We are a remote team of 5 professionals who are passionate about creating complex projects. With a remarkable track record of zero staff turnover, each member of our community is a highly skilled expert who finds joy in crafting intricate projects.</p>
                    </div>

                    <div className='header_content2_Home'>

                        <div className='header_content2_Home2'>
                            <img src="./image/profile1.jpeg" alt="" className='image_home' />
                            <h3>ANTHONY SELVI</h3>
                            <div className='header_para'>Country: India</div>
                            <div className='header_para'>Role: Full Stack Developer</div>
                            <div className='header_para'>Time together :  2 years</div>
                        </div>
                        <div className='header_content2_Home2'>
                            <img src="./image/profile2.jpg" alt="" className='image_home' />
                            <h3>FATIMA MARY</h3>
                            <div className='header_para'>Country: India</div>
                            <div className='header_para'>Role: Full Stack Developer</div>
                            <div className='header_para'>Time together:  2 years</div>
                        </div>
                        <div className='header_content2_Home2'>
                            <img src="./image/profile3.jpg" alt="" className='image_home' />
                            <h3>STELLA MARY</h3>
                            <div className='header_para'>Country: India</div>
                            <div className='header_para'>Role: UI Developer</div>
                            <div className='header_para'>Time together:  2 years</div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Home2;
