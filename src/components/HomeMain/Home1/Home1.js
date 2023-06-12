import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home1.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home1 = () => {

    const navigate = useNavigate()

    const navigateToProject3 = () => {
        navigate("/project3")
    }

    const navigateToProject = () => {
        navigate("/project")
    }


    return (
        <header className='header1_Home1'>
            <div className='container'>
                {/* <div className='row'> */}
                <div className='header_content1'>
                    <h1>THESE ARE SOME OF OUR PERFECT MATCHES</h1>
                    <p>We are driven not only by exciting projects but also by the people who bring them to life. Finding the perfect team match is of utmost importance to us. Our clients are not just clients; they are our partners, collaborators, and friends throughout all stages of the project. Let's take a look at some instances where Gearheart proved to be the ideal teammate for our valued customers.</p>
                </div>

                <div className='header2'>
                    <div className='header_content2'>
                        <div className='header_section_image'>
                            <img src="./image/project1.png" alt="" className='image' />
                        </div>
                        <div className='header_section_home1'>
                            <h2 onClick={navigateToProject3}>Production Scheduler</h2>
                            <h1>JOB MANAGEMENT PLATFORM</h1>
                            <div className='header_para'>Country: India</div>
                            <div className='header_para'>Technologies : React, Node.js,PostgreSQL</div>
                            <div className='header_para'>Time together:  6 months till now</div>
                            <div className='header_para'>Team : 1 PM, 0.5 BA, 2 developers, 1 QA</div>
                            <div className='header_para'> <img src="./image/arrow.png" alt="" className='image1' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='header3'>
                    <div className='header_content3'>
                        <div className='header_section_image'>
                            <img src="./image/project2.png" alt="" className='image' />
                        </div>
                        <div className='header_section_home1'>
                            <h2>Gift Junction</h2>
                            <h1>A GIFT MANAGEMENT SOFTWARE</h1>
                            <div className='header_para'>Country: United States</div>
                            <div className='header_para'>Technologies : React, Node.js, PostgreSQL</div>
                            <div className='header_para'>Time together:  3 months till now</div>
                            <div className='header_para'>Team : 0.5 PM, 0.5 BA, 2 developers, 1 QA</div>
                            <div className='header_para'> <img src="./image/arrow.png" alt="" className='image1' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='header_button' onClick={navigateToProject}>EXPLORE MORE CASES</div>

            </div>
        </header >
    );
};

export default Home1;
