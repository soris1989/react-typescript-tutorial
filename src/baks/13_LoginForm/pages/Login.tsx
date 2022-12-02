import { useHistory } from "react-router-dom";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { LoginForm } from "../components/LoginForm";
import { createLogin } from "../model/login";
import { login } from "../api/login";
import { useState } from "react";

export const Login = (props: any) => {
    const history = useHistory();
    const classes = useStyles();

    const [error, setError] = useState("");

    const onLogin = async (name: string, password: string) => {
        const loginInfo = createLogin(name, password);
        if (await login(loginInfo)) {
            history.push("/pageB");
        } else {
            setError("Invalid credentials.");
        }
    };

    return (
        <Card className={classes.card}>
            <CardHeader title="Login" />
            <CardContent>
                <LoginForm login={""} password={""} onLogin={onLogin} />
            </CardContent>
        </Card>
    );
};

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            maxWidth: 400,
            margin: "0 auto",
        },
    })
);
