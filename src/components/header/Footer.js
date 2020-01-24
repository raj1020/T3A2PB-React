import React from 'react'
// import fbLogo from '../../images/fbLogo.png'
import './../../styles/index.css';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

class Footer extends React.Component {

    render() {
        return (
            <>
                <div className="footerLayer1">
                    <div className="SocialMedia">
                        <Link color="inherit" href="https://www.facebook.com/Oakbrook-Yass-Valley-316970248851172/" target="_blank">
                        <FacebookIcon fontSize="large" />
                        </Link>{'      '}
                        <span/>
                        <Link color="inherit" href="https://www.instagram.com/oakbrookyassvalley/" target="_blank">
                        <InstagramIcon fontSize="large"/>
                        </Link>{' '}
                    </div>
                </div>
                <div className="footerLayer2">
                    <div className="FooterText">Copyright Oakbrook Yass Valley 2020</div>
                </div>
            </>
        );
    }
}

export default Footer;