import { useState } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { LoginProps } from "../model/login";

export const LoginForm = (props: LoginProps) => {
    // get styles
    const classes = useStyles();

    // state vars for parent access
    const [initialName, setInitialName] = useState(props.login || "");
    const [initialPassword, setInitialPassword] = useState(props.login || "");
    // state vars
    const [login, setLogin] = useState(props.login || "");
    const [password, setPassword] = useState(props.password || "");

    // parent access
    if (props.login !== initialName) {
        setLogin(props.login);
        setInitialName(props.login);
    }
    if (props.password !== initialPassword) {
        setPassword(props.login);
        setInitialPassword(props.login);
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <TextField
                label="Name"
                margin="normal"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.btnSubmit}
                onClick={() => props.onLogin(login, password)}
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
    })
);
