import { useState } from 'react';
import './What2.css';
import { useNavigate } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const What2 = () => {

    const navigate = useNavigate()

    const navigateToProcess = () => {
        navigate("/process")
    }

    return (
        <header className='header4'>
            <div className='container'>
                <div className='row'>
                    <div className='header_content_what2'>
                        <h1>WE ARE TRANSPARENT, AND SO IS OUR PROCESS</h1>
                        <p>The process is based on Scrum, which we have tweaked to make it more practical and allow us to work remotely in different time zones. You can read details in our knowledge base.</p>
                    </div>
                </div>
                <div className='header_content_what3'>
                    <div className='header_content_what3A'>
                        <h2>PREDICTABILITY</h2>
                        <p>We maintain a long-term roadmap for months in advance and detailed estimates for upcoming weeks. Working with startups forces us to change the plan a lot, but we always have it.</p>
                    </div>
                    <div className='header_content_what3A'>
                        <h2>PRACTICALITY</h2>
                        <p>We maintain projects in working and shippable conditions at all times. We also understand that humans are not perfect, so we do a lot of documenting and testing.</p>
                    </div>
                    <div className='header_content_what3A'>
                        <h2>TRANSPARENCY</h2>
                        <p>The client has full access to all tasks, documentation, servers, and code. Everyone can talk to anyone. Weekly demos ensure that everyone is on the same page.</p>
                    </div>
                </div>
                <div className='header_button_what2' onClick={navigateToProcess}>LEARN MORE ABOUT OUR PROCESS</div>

                <div className='header5'>
                    <div className='header_content5'>
                        <h2>We have specified a set of proven and flexible technologies that allow us to create functional apps of any complexity from scratch. And that is how we do our thing.</h2>
                        <h1>REACT, NODE.JS, GRAPHQL, TYPESCRIPT, DJANGO, FASTAPI, PYTHON, ELASTICSEARCH, AWS, KUBERNETES, POSTGRESQL, MONGODB, CYPRESS</h1>
                    </div>
                </div>
            </div >

        </header >
    );
};

export default What2;
