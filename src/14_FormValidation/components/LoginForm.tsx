import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import Button from "@material-ui/core/Button";
import { createEmptyLogin, LoginEntity, LoginProps } from "../model/login";
import { TextField } from "./TextField";
import { Form, Formik } from "formik";
import { loginFormValidation } from "./LoginValidation";

export const LoginForm = (props: LoginProps) => {
    const classes = useStyles();

    return (
        <Formik
            onSubmit={props.onLogin}
            initialValues={createEmptyLogin()}
            validate={loginFormValidation.validateForm}
        >
            {() => (
                <Form>
                    <div className={classes.formContainer}>
                        <TextField label="Name" name="login" />
                        <TextField label="Password" type="password" name="password" />
                        <Button variant="contained" color="primary" className={classes.btnSubmit}>
                            Login
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        btnSubmit: {
            marginTop: 20,
        },
        formContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
    })
);
