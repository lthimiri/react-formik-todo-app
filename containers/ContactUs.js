import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));
function validate(){
  
}

const ContactUs = () => {
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Card
          className={classes.root}
          style={{
            backgroundColor: "#cfe8fc",
            height: "100vh",
            width: "50vw"
          }}
        >
          <CardContent>
            <h2>Talk to a Representative</h2>
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="sm">
                <Typography component="div">
                  Interested in HubSpot’s software? Just pick up the phone to
                  chat with a member of our sales team.
                </Typography>
                <Typography variant='h2'>
                  <Link
                    component="button"
                    variant="body1"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    +1 123-123-1234
                  </Link>
                </Typography>
              </Container>
            </React.Fragment>
          </CardContent>
        </Card>
      </div>
      <Card
        className={classes.root}
        style={{ backgroundColor: "#cfe8fc", height: "100vh", width: "50vw" }}
      >
        <CardContent>
          <h2>Drop us a Line</h2>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField required id="standard-basic" label="First Name" />
            <br />
            <TextField required id="standard-basic" label="Last Name" />
            <br />
            <TextField id="standard-basic" label="Company Name" />
            <br />
            <TextField required id="standard-basic" label="Company E-mail" />
            <br />
            <TextField required id="standard-basic" label="Country" />
            <br />
            <TextField required id="standard-basic" label="Comments" />
          </form>
          <br />
          <Button variant="contained" color="primary" onClick={validate()}>
            send message
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
