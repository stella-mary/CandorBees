import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Project3.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, TextField } from '@mui/material';

const Home1 = () => {

    return (
        <header className='header1_Project3'>
            <div className='container'>

                <div className='header2_Project3'>
                    <div className='header_content2'>
                        <div className='header_section_image'>
                            <img src="./image/project1.png" alt="" className='image' />
                        </div>
                        <div className='header_section'>
                            <h2>Production Scheduler</h2>
                            <h1>JOB MANAGEMENT PLATFORM</h1>
                            <div className='header_para'>Country: India</div>
                            <div className='header_para'>Technologies : React, Node.js,PostgreSQL</div>
                            <div className='header_para'>Time together:  6 months till now</div>
                            <div className='header_para'>Team : 1 PM, 0.5 BA, 2 developers, 1 QA</div>
                        </div>
                    </div>
                </div>

                <div className='header3_Project3'>
                    <p className='header_para1'>Summary </p>
                    <p className='header_para1'><a href="#over">OVERVIEW <ArrowRightAltIcon style={{ width: '40px', height: '40px', verticalAlign: 'middle' }} /></a></p>
                    <p className='header_para1'><a href="#pur">PURPOSE AND NEED <ArrowRightAltIcon style={{ width: '40px', height: '40px', verticalAlign: 'middle' }} /></a></p>
                    <p className='header_para1'><a href="#work">WORKFLOW <ArrowRightAltIcon style={{ width: '40px', height: '40px', verticalAlign: 'middle' }} /></a></p>
                    <p className='header_para1'><a href="#tech">TECHNOLOGY <ArrowRightAltIcon style={{ width: '40px', height: '40px', verticalAlign: 'middle' }} /></a></p>
                    <p className='header_para1'><a href="#stru">STRUCTURE AND FEATURES <ArrowRightAltIcon style={{ width: '40px', height: '40px', verticalAlign: 'middle' }} /></a></p>
                    <p className='header_para1'><a href="#res">RESULTS <ArrowRightAltIcon style={{ width: '40px', height: '40px', verticalAlign: 'middle' }} /></a></p>
                </div>

                <div className='header4_Project3'>
                    <h1><a id="over"></a>OVERVIEW</h1>
                    <p>SmartSuite is a web and mobile no-code platform that serves as a tool for managing everything needed to get work done: spreadsheets, documents, collaboration tools, databases, file management products and automation capabilities — all in one place.</p>
                    <p>SmartSuite is transforming how organizations get work done by providing a collaborative Work Management platform that enables teams to plan, track and manage workflows - whether it be a project, an ongoing process or routine everyday tasks.</p>


                    <h1><a id="pur"></a>PURPOSE AND NEED</h1>
                    <p>SmartSuite, if you study the market, has proven to be what the no-code market needs, as it is not just beautifully designed with cool features. SmartSuite was conceived as a deeply customizable tool. All its functions are configured by the development team so that they are as useful and convenient as possible. Of course, to set up these functions, we needed high technical skills, as well as deep knowledge in business analysis, quality assurance and project management. Its wide functionality, which we will discuss below, is accompanied by wide scalability, use of two databases and multilingualism.</p>

                    <h1><a id="work"></a>WORKFLOW</h1>
                    <p>Our story with the project began when the SmartSuite founder Jon Darbyshire approached us. He was looking for a development team to implement his business idea and drew attention to one of the projects we implemented. It was a project management tool called Transpose. So Jon realized that our team has enough expertise. We had a very warm and pleasant acquaintance story. Jon flew to Ukraine, where he met us personally, and we realized that the same perfect match had happened.</p>

                    <p>It's important to say that we had a lot of work to do, as our team started the project from scratch, and worked at all stages from requirements creation, development, testing and deployment to production.</p>

                    <p>SmartSuite is one of the biggest projects we’ve ever worked on. Along with Gearheart, two different teams of different sizes located in different time zones work on the product. For this reason, besides the development-based challenges, we had to adjust our processes to learn how to work with a big team.</p>

                    <h1><a id="tech"></a>TECHNOLOGY</h1>
                    <p>Under SmartSuite’s hood are React, Angular, Python, Django, Typescript, WebSockets, Node.js, MongoDB, ElasticSearch, Kubernetes, Postgres, Cypress.</p>

                    <h1><a id="stru"></a>STRUCTURE AND FEATURES</h1>
                    <p>SmartSuite works great for any size business from startup to large enterprise. The platform’s core features include:</p>

                    <h2>DATA VISUALIZATION & INTERACTION</h2>
                    <p>Put your data to work with powerful reports, dashboards, charts and views. Interact with those records, tracking your progress, interactions with customers and more.</p>

                    <img src="./image/project1.png" alt="" className='image' />

                    <h2>TEAM COLLABORATION</h2>
                    <p>Collaborate with your team seamlessly with comments, messaging and through integrations with technologies like Slack. With these functions built directly into SmartSuite interfaces your interactions are made in the context of your work.</p>
                    <img src="./image/project2.png" alt="" className='image' />

                    <h2>ROLES AND PERMISSIONS</h2>
                    <p>Protect sensitive data while allowing teams access to the information they need with multiple permissions options. Share data across the organization while limiting edits to specific teams or assigned users.</p>
                    <img src="./image/project2.png" alt="" className='image' />

                    <h2>SECURITY AND PRIVACY</h2>
                    <p>SmartSuite ensures the privacy and security of your data throughout its lifecycle. With data secured from the user’s browser or mobile device all the way through encryption at rest, your information is safe with SmartSuite. SmartSuite is also GDPR compliant and supports all of your regulatory obligations to maintain privacy.</p>

                    <h2>TASK MANAGEMENT</h2>
                    <p>Plan, manage and assign tasks to make sure that you're on time, every time. Tasks are integrated into every part of SmartSuite, allowing you to assign work items, specify due dates and ensure that everyone is accountable.</p>
                    <img src="./image/project2.png" alt="" className='image' />

                    <h2>WORKFLOW AUTOMATIONS</h2>
                    <p>Streamline your workflow with point-and-click automations to eliminate busy work. An easy to configure rules engine reacts to events in the system or external events, triggering actions that you define as part of your workflow. Update records, send Slack notifications, change a Google Sheet document and much more.</p>
                    <img src="./image/project2.png" alt="" className='image' />

                    <h2>REAL TIME NOTIFICATIONS</h2>
                    <p>Bring important details to your attention through online notifications, email or Slack. Users can configure how they are notified, and notifications can be configured as SmartSuite automations actions to bring attention to important events.</p>
                    <img src="./image/project2.png" alt="" className='image' />

                    <h2>SOLUTION TEMPLATES</h2>
                    <p>Over 200 industry best-practices solution templates get you up and running fast. These pre-configured sets of SmartSuite applications allow you to create the structure to track all of your work and processes in minutes. From there you can tweak and adjust any component of those templates to make it a perfect fit for your organization.</p>
                    <img src="./image/project2.png" alt="" className='image' />

                    <h2>RESULTS</h2>
                    <p>After the successful release of the product, our team continues to work on the project, provide support and work with feedback to improve the functionality of SmartSuite.</p>
                    <p>Watch the video where John Darbyshire, CEO of SmartSuite, talks about how we met and how they work on the product was arranged. John also shares details on how SmartSuite has grown since its launch to reach 1.2M ARR in 4 weeks.</p>
                    <img src="./image/project2.png" alt="" className='image' />

                    <h2>SO WE STARTED WITH THE TEAM</h2>
                    <div className='header_button_Home2'>LOOK HOW THE PROJECT LIVES IN THE WILD</div>

                    <div className='header_content1'>
                        <h1>THESE ARE SOME OF OUR PERFECT MATCHES</h1>
                        <p>We are burning not only with cool projects, but also with the people behind them. And a perfect team match truly matters. Our clients are our partners, co-authors, and friends at all project stages. Here are some examples of times when Gearheart became a best-fit teammate for our customers.</p>
                    </div>

                    <div className='header_button_Home2'>LOOK HOW THE PROJECT LIVES IN THE WILD</div>
                </div>
            </div>
            <div className='header_content1_project3'>
                <div className='header_button_Home2'>LOOK HOW THE PROJECT LIVES IN THE WILD</div>
            </div>

            <div>
                <header className='header7'>
                    <div className='container'>
                        <div className='row'>
                            <h1>LET’S MAKE IT TOGETHER</h1>
                            <div className='header_content_home'>
                                <div className='header_content_home_form'>
                                    <Box
                                        sx={{
                                            width: 800,
                                            maxWidth: '100%',
                                            marginBottom: '20px',
                                            marginTop: '20px',
                                        }}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Your Name"
                                            variant='standard'
                                            InputLabelProps={{ style: { color: 'white', fontSize: '25px', fontFamily: 'AmericanTypewriter' } }}
                                            InputProps={{
                                                style: {
                                                    border: 'none',
                                                    borderBottom: '2px solid white',
                                                    fontSize: '25px'
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            width: 800,
                                            maxWidth: '100%',
                                            marginBottom: '20px',
                                            marginTop: '20px',
                                        }}
                                    >
                                        <TextField
                                            fullWidth
                                            label="Your email"
                                            variant='standard'
                                            InputLabelProps={{ style: { color: 'white', fontSize: '25px', fontFamily: 'AmericanTypewriter' } }}
                                            InputProps={{
                                                style: {
                                                    border: 'none',
                                                    borderBottom: '2px solid white',
                                                    fontSize: '25px'
                                                },
                                            }}
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            width: 800,
                                            maxWidth: '100%',
                                            marginBottom: '40px',
                                            marginTop: '20px',
                                        }}
                                    >
                                        <TextField
                                            fullWidth
                                            label="How can we help"
                                            variant='standard'
                                            InputLabelProps={{ style: { color: 'white', fontSize: '25px', fontFamily: 'AmericanTypewriter' } }}
                                            InputProps={{
                                                style: {
                                                    border: 'none',
                                                    borderBottom: '2px solid white',
                                                    fontSize: '25px'
                                                },
                                            }}
                                        />
                                    </Box>

                                    <div className='header_button1'>
                                        Drop useful files here or upload them from your computer<br /><br />
                                        <small>We accept files up to 15 MB</small>
                                    </div>
                                    <div className='header_button2'>SUBMIT</div>
                                </div>
                                <div className='header_content_home_form'>
                                    <div className='header_para_content'>WE’RE HERE:</div>
                                    <div className='header_para_content'>32b Velyka Vasylkivska str., Kyiv, Ukraine</div>
                                    <div className='header_para_content'>WORKING HOURS:</div>
                                    <div className='header_para_content'>From 9 am to 8 pm (UTC +3)</div>
                                    <div className='header_para_content'>DROP US A LINE:</div>
                                    <div className='header_para_content_head'>srilekha.rajasekar@gmail.com</div>
                                    <div className='header_para_content'>+91 9176856135</div>
                                    <div className='header_para_content_link1'>FACEBOOK<span className='space' />LINKEDIN</div>
                                </div>
                            </div>
                        </div>
                    </div >
                </header >

            </div>
        </header >
    );
};

export default Home1;
