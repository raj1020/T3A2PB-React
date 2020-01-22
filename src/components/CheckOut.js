// import React from 'react';



// class CheckOut extends React.Component {


//     render () {

//         return( <>
//                 <p>Please checkout the products that you are buying.</p>
//                 <form>
//                         <div>
//                             <span>First Name</span>
//                             <textarea></textarea>
//                         </div>
//                         <div>
//                             <span>Last Name</span>
//                             <textarea></textarea>
//                         </div>
//                         <div>
//                             <span>Email</span>
//                             <textarea></textarea>
//                         </div>
//                         <div>
//                             <span>Confirm Email</span>
//                             <textarea></textarea>
//                         </div>
//                         <input type="submit" value="Continue to Payment" />
//                     </form>
//             </>
//         );

//     }
// }

// export default CheckOut;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      
    },
  },
}));

export default function CheckOut() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <div> 
        <label>First Name:</label> <TextField id="outlined-basic" label = "First Name" variant="outlined" />
      </div>
      <TextField id="outlined-basic"  variant="outlined" />
    </form>
  );
}

