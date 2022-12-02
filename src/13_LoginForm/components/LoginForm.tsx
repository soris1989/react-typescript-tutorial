import { useState, ChangeEvent } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createEmptyLogin, LoginEntity, LoginProps } from "../model/login";
import { isEqual } from "../services/utils";

export const LoginForm = (props: LoginProps) => {
    // get styles
    const classes = useStyles();

    // state vars for parent access
    const [initialLoginInfo, setInitialLoginInfo] = useState<LoginEntity>(
        props.loginInfo || createEmptyLogin()
    );
    const [loginInfo, setLoginInfo] = useState<LoginEntity>(props.loginInfo || createEmptyLogin());

    // parent access
    if (!isEqual(props.loginInfo, initialLoginInfo)) {
        setLoginInfo(props.loginInfo);
        setInitialLoginInfo(props.loginInfo);
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setLoginInfo({
            ...loginInfo,
            [name]: value,
        });
    };

    return (
        <div className={classes.formContainer}>
            <TextField
                label="Name"
                margin="normal"
                name="login"
                value={loginInfo?.login || ""}
                onChange={onChange}
            />
            <TextField
                label="Password"
                type="password"
                margin="normal"
                name="password"
                value={loginInfo?.password || ""}
                onChange={onChange}
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.btnSubmit}
                onClick={() => props.onLogin(loginInfo)}
            >
                Login
            </Button>
        </div>
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
