import "./App.css";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateAnAccount from "./components/CreateAnAccount/CreateAnAccount";
import CreateAccountTry from "./components/CreateAnAccount/CreateAccountTry";

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    fetch("/users/show").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setLoggedUser(user);
          setAuthorized(true);
        });
      } else {
        setAuthorized(true);
      }
    });
  }, []);

  if (!authorized) {
    return <div></div>;
  }

  return (
    <div className="App">
      {loggedUser ? (
        <Switch>
          <p>App</p>
        </Switch>
      ) : (
        <Switch>
          <Route exact path= "/create_account" >
            {/* <CreateAnAccount /> */}
            <CreateAccountTry />
          </Route>
          <Route exact path="*">
            <h1>Error 404 Not Found</h1>
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
