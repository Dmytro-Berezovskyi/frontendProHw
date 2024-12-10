import {useContext} from "react";

import {ThemeContext} from "../../context/ThemeContext";

import facebookIcon from "../../img/facebook.svg";
import instagramIcon from "../../img/instagram.svg";
import linkedinIcon from "../../img/linkedin.svg";

export default function Contacts() {
    const {theme} = useContext(ThemeContext);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
            <div style={{
                background: theme === 'light' ? '#ada69c' : '#292929',
                width: '500px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '3px',
            }}>
                <h1 style={{color: 'white', margin: '0', marginBottom: '20px'}}>Contacts</h1>
                <ul style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px',
                    justifyContent: 'center',
                    marginLeft: '0',
                    paddingLeft: '0',
                    margin: '0'
                }}>
                    <li style={{listStyleType: 'none'}}>
                        <img style={{width: '30px', height: '30px', cursor: 'pointer'}} src={facebookIcon} alt=''/>
                    </li>
                    <li style={{listStyleType: 'none'}}>
                        <img style={{width: '30px', height: '30px', cursor: 'pointer'}} src={instagramIcon} alt=''/>
                    </li>
                    <li style={{listStyleType: 'none'}}>
                        <img style={{width: '30px', height: '30px', cursor: 'pointer'}} src={linkedinIcon} alt=''/>
                    </li>
                </ul>
            </div>
        </div>
    );
}