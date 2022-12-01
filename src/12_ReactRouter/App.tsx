import { HashRouter, Switch, Route } from "react-router-dom";
import { PageA } from "./pages/PageA";
import { PageB } from "./pages/PageB";

export const App = () => {
    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact={true} path="/" component={PageA} />
                    <Route path="/pageB" component={PageB} />
                </Switch>
            </HashRouter>
        </>
    );
};
