import React from 'react'
import './../../styles/index.css';
// import Link from '@material-ui/core/Link';
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

class Footer extends React.Component {

    render() {
        return (
            <>
                <div className="footerLayer1">
                    <div className="SocialMedia">
                        <a className="socialIcons" color="inherit" href="https://www.facebook.com/Oakbrook-Yass-Valley-316970248851172/" target="_blank">
                        <FacebookIcon fontSize="large" />
                        </a>{'          '}
                        <span/>
                        <a className="socialIcons" color="inherit" href="https://www.instagram.com/oakbrookyassvalley/" target="_blank">
                        <InstagramIcon fontSize="large"/>
                        </a>{' '}
                    </div>
                </div>
                <div className="footerLayer2">
                    <div className="FooterText">
                        Copyright <Link to="/" className="footerLink" >Oakbrook Yass Valley</Link>{' '}{new Date().getFullYear()}{'.'}
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;

