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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));
function validate() {}

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
                <Typography variant="h2">
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
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              companyName: "",
              companyEmail: "",
              country: "",
              comments: ""
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
              companyEmail: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              companyName: Yup.string().max(
                20,
                "Must be 20 characters or less"
              ),
              country: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
              comments: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required")
            })}
            onSubmit={(values, { setSubmitting }) => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form
                className={classes.root}
                noValidate
                autoComplete="on"
                onSubmit={handleSubmit}
              >
                <TextField
                  name="firstName"
                  id="standard-basic"
                  label="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                <br />
                <ErrorMessage name="firstName" />
                <br />
                <TextField
                  name="lastName"
                  required
                  id="standard-basic"
                  label="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                <br />
                <ErrorMessage name="lastName" />
                <br />
                <TextField
                  name="companyName"
                  id="standard-basic"
                  label="Company Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyName}
                />
                <br />
                <ErrorMessage name="companyName" />
                <br />
                <TextField
                  name="companyEmail"
                  required
                  id="standard-basic"
                  label="Company E-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyEmail}
                />
                <br />
                <ErrorMessage name="companyEmail" />
                <br />
                <TextField
                  name="country"
                  required
                  id="standard-basic"
                  label="Country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                />
                <br />
                <ErrorMessage name="country" />
                <br />
                <TextField
                  name="comments"
                  required
                  id="standard-basic"
                  label="Comments"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comments}
                />
                <br />
                <ErrorMessage name="comments" />
                <br />
                <Button variant="contained" color="primary" type="submit">
                  send message
                </Button>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
