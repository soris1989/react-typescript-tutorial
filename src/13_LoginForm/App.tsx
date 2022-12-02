import { HashRouter, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { PageB } from "./pages/PageB";

export const App = () => {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact={true} path="/" component={Login} />
                    <Route path="/pageB" component={PageB} />
                </Switch>
            </HashRouter>
        </>
    );
};
