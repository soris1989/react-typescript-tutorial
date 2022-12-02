import { useHistory } from "react-router-dom";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { LoginForm } from "../components/LoginForm";
import { createEmptyLogin, createLogin, LoginEntity } from "../model/login";
import { login } from "../api/login";
import { useEffect, useState } from "react";
import { Notification } from "../components/Notification";

export const Login = (props: any) => {
    const history = useHistory();
    const classes = useStyles();

    const [isShowAlert, setShowAlert] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (error) {
            setShowAlert(true);
        }
    }, [error]);

    const onLogin = async (loginInfo: LoginEntity) => {
        if (await login(loginInfo)) {
            history.push("/pageB");
        } else {
            setError("Invalid credentials.");
        }
    };

    const onClose = () => {
        setShowAlert(false);
        setError("");
    };

    return (
        <Card className={classes.card}>
            <CardHeader title="Login" />
            <CardContent>
                <LoginForm loginInfo={createEmptyLogin()} onLogin={onLogin} />
                <Notification show={isShowAlert} message={error} onClose={onClose} />
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
