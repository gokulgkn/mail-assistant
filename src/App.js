import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Sider from "./components/sidebar";
import MailFeature from "./components/mailfeature";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/home";
import History from "./components/history";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/mail">
          <Sider /><MailFeature />
        </Route>
        <Route path="/home">
          <Sider /><Home   />
        </Route>
        <Route path="/history">
          <Sider /><History   />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
