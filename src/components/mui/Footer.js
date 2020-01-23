import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © ' }
      <Link color="inherit" href="./contact">
        Oakbrook Yass Valley
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      <br/>
      <br/>
      <Link color="inherit" href="https://www.facebook.com/Oakbrook-Yass-Valley-316970248851172/" target="_blank">
        <FacebookIcon fontSize="large" />
      </Link>{'      '}
      <span/>
      <Link color="inherit" href="https://www.instagram.com/oakbrookyassvalley/" target="_blank">
      <InstagramIcon fontSize="large"/>
      </Link>{' '}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(3, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};