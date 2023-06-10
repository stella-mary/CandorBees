import { useState } from 'react';
import './Project.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Project = () => {

    return (
        <header className='header_Project'>
            <div className='container'>
                {/* <div className='row'> */}
                <div className='header_content1'>
                    <h1>WE CREATE CUSTOM WEB AND MOBILE APPLICATIONS</h1>
                    <p>We are good at working on products for work. These are mainly tools for organizing workflows and working with data based on Django and ReactJS. And here the subject area is not so important, since we know how to understand the client's business and needs. Have a look at our selected projects.</p>
                </div>


                <div className='header_content2'>
                    <div className='header_section_image'>
                        <img src="./image/project1.png" alt="" className='image' />
                    </div>
                    <div className='header_section'>
                        <h2>SmartSuite</h2>
                        <h1>WORK MANAGEMENT PLATFORM</h1>
                        <div className='header_para'>Country: United States</div>
                        <div className='header_para'>Technologies: React, Node.js, Typescript, Django, Python, ElasticSearch, Kubernetes, PostgreSQL, Mongodb, Cypress, Angular, WebSockets</div>
                        <div className='header_para'>Time together: 4 years till now</div>
                        <div className='header_para'>Team: 3 PMs, 2 BAs, 12 developers, 6 HTML/CSS coders, 5 Automation Engineers, 8 QAs</div>
                        <div className='header_para'> <img src="./image/arrow.png" alt="" className='image1' />
                        </div>
                    </div>
                </div>


                <div className='header_content3'>
                    <div className='header_section_image'>
                        <img src="./image/project2.png" alt="" className='image' />
                    </div>
                    <div className='header_section'>
                        <h2>ShootQ</h2>
                        <h1>A PHOTOGRAPHY MANAGEMENT CRM SOFTWARE</h1>
                        <div className='header_para'>Country: United States</div>
                        <div className='header_para'>Technologies: Typescript, Django, Python, AWS, Angular</div>
                        <div className='header_para'>Time together: 3 years</div>
                        <div className='header_para'>Team: PM, BA, 4 developers, QA</div>
                        <div className='header_para'> <img src="./image/arrow.png" alt="" className='image1' />
                        </div>
                    </div>
                </div>

            </div>
        </header >
    );
};

export default Project;
