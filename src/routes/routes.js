import { Suspense } from "react";
import { Switch, Route,} from "react-router-dom";

import Home from "../pages/home";
import Pricing from "../pages/Pricing";

const Router = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pricing" component={Pricing} />
      </Switch>
    </Suspense>
  );
};

export default Router;

/*const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);*/
