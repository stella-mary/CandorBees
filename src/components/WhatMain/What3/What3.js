import { useState } from 'react';
import './What3.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const What3 = () => {

    return (
        <header className='header1'>
            <div className='container'>
                {/* <div className='row'> */}
                <div className='header_content1'>
                    <h1>THESE ARE SOME OF OUR PERFECT MATCHES</h1>
                    <p>We are burning not only with cool projects, but also with the people behind them. And a perfect team match truly matters. Our clients are our partners, co-authors, and friends at all project stages. Here are some examples of times when Gearheart became a best-fit teammate for our customers.</p>
                </div>

                <div className='header2'>
                    <div className='header_content2'>
                        <div className='header_section_image'>
                            <img src="./image/project1.png" alt="" className='image' />
                        </div>
                        <div className='header_section'>
                            <h2>H.M.Cole</h2>
                            <h1>CREATING CUSTOM CLOTHING WEBSITE</h1>
                            <div className='header_para'>Country: United States</div>
                            <div className='header_para'>Technologies: Typescript, Django, Python, PostgreSQL, Angular</div>
                            <div className='header_para'>Time together: 1 year</div>
                            <div className='header_para'>Team: PM, BA, 2 developers, QA</div>
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

                <div className='header_button'>EXPLORE MORE CASES</div>

            </div>
        </header >
    );
};

export default What3;
