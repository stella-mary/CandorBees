import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [state, setState] = React.useState(true);

    const navigate = useNavigate()

    const navigateToProject = () => {
        navigate("/project")
    }

    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='navbar_container'>
                    <ul className='navbar_left'>
                        <div className='navbar_left-logo'>
                            <p><a href="/">CandorBees</a> <FavoriteBorderIcon /></p>
                            {/* <img src='./image/logo-img.png' alt="" /> */}
                        </div>
                    </ul>

                    {state ? (
                        <ul className='navbar_right'>
                            <li><a href="/what">WHAT WE DO</a></li>
                            <li><a href="/project">PROJECTS</a></li>
                            <li><a href="#touch">GET IN TOUCH</a></li>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className='toggle' onClick={() => setState(!state)}>
                <DehazeOutlinedIcon />
            </div >
        </nav >
    )
}

export default Navbar

