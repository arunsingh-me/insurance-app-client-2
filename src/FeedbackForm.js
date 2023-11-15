import React from 'react';
import './App.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';


function FeedbackForm() {


  return (
    <div className="App"> 
    
    <Grid container spacing={2}>
  <Grid item xs={4}>
  <img
          src="https://img.freepik.com/free-vector/organic-flat-feedback-concept_52683-62653.jpg?w=996&t=st=1700065075~exp=1700065675~hmac=2d7bfad5a97eed3664834fbf2f949c4acfa934b3a56e81c896e96fef6c898f63"
          alt="Your Image"
          style={{ padding:"200px",height: '300px', width:'500px' }}
        />
  </Grid>
  <Grid item xs={8}>
  <Grid>
        <Card style={{ maxWidth: 450, padding: "100px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
             FEEDBACK FORM
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            Please provide your valuable Feedback
          </Typography> 
            <form>

           
  <Grid container spacing={1}>
                
                <Grid item xs={12}>
                  <TextField type="text" placeholder="Title" label="Title" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Description" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>

          
            </form>
          </CardContent>
        </Card>
      </Grid>
      </Grid>  
      </Grid>
    </div>
  );
}

export default FeedbackForm;