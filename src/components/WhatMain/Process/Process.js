import { useState } from 'react';
import './Process.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Project1 = () => {
    return (
        <div>
            <div className='header_process'>
                <div className='container'>
                    <div className='row'>
                        <div className='header_content_what'>
                            <h1>AGILE DEVELOPMENT PROCESS</h1>
                            <p>We use an agile workflow, based on Scrum. The workflow is tweaked to let us work effectively in a distributed team, even with the difficulty of working with clients in significantly different time zones.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header1_What1'>
                <div className='container'>
                    <div className='header_content_what1'>
                        <p>We use an agile workflow, based on Scrum. The workflow is tweaked to let us work effectively in a distributed team, even with the difficulty of working with clients in significantly different time zones.</p>
                        <p>We implement projects in small iterations («sprints»). By the end of each sprint we deploy a stable working project to the server.</p>
                        <p>Sprints are either one or two weeks long depending on the project specifics. Duration is fixed and we always deploy the same day*.</p>
                        <p>Workflow is optimized to ensure that:</p>
                        <ul>
                            <li>there is a stable product by the end of each sprint</li>
                            <li>product concepts can be changed in the middle of the project</li>
                            <li>we are never blocked in the middle of the sprint, due to delayed correspondence from the client</li>
                            <li>there is no delay in development between the sprints</li>
                        </ul>
                        <p>We use Continuous Integration and follow the git-flow approach in order to manage our repositories.</p>
                        <p>By the end of each sprint we have a call and demo the project to the client. During the sprint we have short daily calls with a team.</p>
                        <img src="https://gearheart.io/_next/image/?url=https%3A%2F%2Fapi.gearheart.io%2Fuploads%2Fprocess_overview_original_52efaf6007.png&w=3840&q=75" alt="" className='image' />
                        <p>Each project begins with a plan and the creation of a backlog which includes all features that are to be developed.</p>
                        <h2>SPRINT PHASES</h2>
                        <p>Each sprint goes through multiple phases:</p>
                        <ul>
                            <li>Preparation – describe and estimate tasks</li>
                            <li>Development – write code and develop designs</li>
                            <li>Stabilization – test and fix bugs</li>
                            <li>Deployment – deploy the stable product to the server</li>
                        </ul>
                        <p>During Preparation and Stabilization, the developers’ workload is not constant. Therefore our scheduled sprints overlap in such a way that by the end of one sprint’s development phase, we have already started the next sprint’s development.</p>
                        <h2>PREPARATION</h2>
                        <p>During the preparation stage, the analyst:</p>
                        <ul>
                            <li>clarifies with the client, what needs to be done for each task</li>
                            <li> prepares a technical description for each task that is enough for full implementation</li>
                            <li>verifies that the following resources are ready and available:</li>
                            <li>designs</li>
                            <li>html/css code</li>
                            <li>texts</li>
                            <li>estimates various tasks in conventional t-shirt sizes (XS - S - M - L - XL) using historical data engine to predict how much time each task will take. Further information can be found by reading about it in our blog.</li>
                            <li>forms a sprint from prepared tasks, making sure that:</li>
                            <li>all planned tasks can be accomplished</li>
                            <li>developers are fully loaded</li>
                            <li>developers are loaded equally</li>
                            <li>developers have spare tasks to switch to in case of blockers</li>
                            <li>This process continues repeatedly over the course of the project. We split it into separate phases with specified timelines to make sure that upcoming sprints are always prepared on time.</li>
                            <li>Phase Input: client’s general explanation of what is required.</li>
                            <li>Phase Output: described, estimated and assigned tasks in task management system.</li>
                            <li>Responsible parties: analyst, and developers when required.</li>
                        </ul>

                        <h2>DEVELOPMENT</h2>
                        <p>At the beginning of the development phase, developers split their tasks into subtasks and prepare estimations of the number of hours required. Based on these estimations we can see if we are outside of the original predicted hourly ranges and make adjustments accordingly.</p>
                        <p>When we complete tasks, developers deploy new features to our development server. QA begins testing those features as they arrive.</p>
                        <p>During the development phase, developers are rarely blocked on any tasks and don’t require input from the client. On the rare occasion that input is required, we contact the client. Most clients are in a different time zone generating a short lag-time between asking the question and receiving an answer. This is one reason why we prepare multiple tasks for each developer to guarantee that they are kept busy while waiting.</p>
                        <p>By the end of the development phase developers create a release branch and deploy it to the staging server.</p>
                        <ul>
                            <li>Phase input: prepared sprint in task manager.</li>
                            <li>Phase output: release branch with all implemented features, deployed to the staging server.</li>
                            <li>Responsible parties: developers and QA.</li>
                        </ul>

                        <h2>STABILIZATION</h2>

                        <p>Our testing process consists of two parts:</p>

                        <p>1. Individual features are tested during the Development phase. QAs safeguards that the new features are working as required.</p>
                        <p>2. QAs test the entire product during the stabilization phase to make sure that new features did not break anything when they were added.
                            When bugs are discovered, developers fix them in the release branch and then deploy updates to the staging server.</p>
                        <p>Sprints overlap in the stabilization phase. QAs do regression testing while developers start working on the next sprint. When bugs are found - developers fix them and switch back to the next sprint.</p>
                        <ul>
                            <li>Input phase: release branch on the staging server.</li>
                            <li>Output phase: stable product on the staging server.</li>
                            <li>Responsible parties: QA and Developers.</li>
                        </ul>

                        <h2>DEPLOYMENT</h2>
                        <p>Deployment is not really a phase, it is more of a joyful event. It is worth mentioning because deployment is our ultimate goal.</p>

                        <h2>HOT FIXES</h2>
                        <p>It would be suspicious if we told you that everything always goes according to plan. Sometimes there are situations that require us to fix something in production immediately regardless of our sprint phase or even sleep phase.</p>

                        <p>When this happens, we create a small ad-hoc sprint that runs parallel to the current sprint.</p>

                        <p>Any new feature is implemented on top of the current production code (not the current development branch) and is pushed to the staging server for testing. When testing is completed - we deploy a hot fix to production and merge it to the development branch.</p>

                        <p>Hot fixes are usually small and don’t require any changes in the current sprint, but from time to time we may have to move low-priority tasks to the following sprint.</p>

                        <h2>INTEGRATION WITH THE CLIENT’S TEAM</h2>
                        <p>We often work with a client’s existing team, but we still prefer to follow our workflow.</p>

                        <p>This collaboration works best when we are given a separate section of the project which saves on coordination efforts. We prefer to avoid projects where our developers are directly managed by the client’s personnel.</p>

                        <h2>WORKING WITH EXTERNAL PROVIDERS</h2>
                        <p>We work with external providers for: designs, mobile applications, HTML/CSS coding and other services. Our workflow does not conflict with our partners’ processes in any way. We schedule our work in such a way that we always have externally-provided materials ready before sprint starts - this way we don’t have to coordinate and micro-manage our tasks during the week.</p>

                        <h2>ROLES</h2>
                        <p>We have the following roles in our workflow: Analyst, Developer, QA. Some management work is required, especially when we have to coordinate with external teams. We don’t have a designated manager, instead an Analyst or a lead Developer takes care of the management tasks.</p>

                        <h2>TASK MANAGEMENT SYSTEM</h2>
                        <p>We built our own task management system and we use it on all of our projects. It allows us to schedule sprints, predict task durations, and track time. It also features a user friendly client UI that permits clients to monitor their project in real time.</p>

                        <p>Sometimes clients have to use Jira, Trello, Asana or another system for their projects. In these cases we use our system, but sync data with the client’s system.</p>

                        <h2>REPOSITORY MANAGEMENT</h2>
                        <p>We use git for all of our projects. Recently we’ve migrated to GitLab, but prior to that we were using Bitbucket. Git is a very flexible tool, but in order to use it efficiently with a team, it requires some conventions. We follow the famous git-flow approach, which matches our workflow perfectly.</p>

                        <h2>CONTINUOUS INTEGRATION</h2>
                        <p>We’ve used different combinations of Jenkins, TeamCity, Fabric and Ansible scripts. Today we use GitLab’s continuous integration system on all of our projects.</p>

                        <p>If for some reason we cannot use GitLab, our fallback is Jenkins.</p>

                        <div className='header_button_process'>
                            <p>CONCLUSION</p>
                            <h1>DESCRIBED WORKFLOW PROVES TO BE OF GREAT ASSISTANCE IN KEEPING PROJECTS ON TIME FOR OUR CLIENTS. CONTACT US IF YOU HAVE ANY IDEAS ON HOW TO IMPROVE THIS WORKFLOW OR IF YOU HAVE ANY OTHER QUESTIONS.</h1>
                        </div>

                        <h1>THESE IS ONE OF OUR RECENT PROJECTS</h1>

                        <div className='header3'>
                            <div className='header_content3'>
                                <div className='header_section_image'>
                                    <img src="./image/project2.png" alt="" className='image' />
                                </div>
                                <div className='header_section'>
                                    <h2>Plair</h2>
                                    <h1>AIR MICROBIAL MONITORING APP</h1>
                                    <div className='header_para'>Country: Switzerland</div>
                                    <div className='header_para'>Technologies: Django, Angular</div>
                                    <div className='header_para'>Time together: 4 months</div>
                                    <div className='header_para'>Team: PM, BA, 4 developers, QA</div>
                                    <div className='header_para'> <img src="./image/arrow.png" alt="" className='image1' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1>RECENT ARTICLES</h1>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Project1;
