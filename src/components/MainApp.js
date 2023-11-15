import React from 'react';
import BackendCall from './BackendCall';
import { Grid} from "@material-ui/core";
function MainApp(props) {
    return (
        <div>
            <h2>FEEDBACKS</h2>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            <img
          src="https://img.freepik.com/free-vector/business-people-arranging-appointment-digital-booking-app_74855-20006.jpg?w=996&t=st=1700061826~exp=1700062426~hmac=eec04d60c5ec75911f8f1139f98b68fe193bbf6ff6af3e806dc4292aab5372cc"
          alt="Your Image"
          style={{ padding:"100px",height: '500px', width:'700px' }}
        />
  </Grid>
  <Grid item xs={6}>
    <BackendCall/>
  </Grid>
  </Grid>
        </div>
    );
}

export default MainApp;