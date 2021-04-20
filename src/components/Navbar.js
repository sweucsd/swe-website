import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import GetInvolved from '../pages/GetInvolved';
import Sponsors from '../pages/Sponsors';
import Calendar from '../pages/Calendar';
import Outreach from '../pages/Outreach';
import Logo from '../assets/swe_logo.png';
import Header from './Header';

function Navbar() {
  return (
    <Router>
      <div>
        <nav className="topNav">
          <NavLink exact to="/"><img className="logo" src={Logo} alt="logo" /></NavLink>
          <NavLink exact className="link" to="/">Home</NavLink>
          <NavLink exact className="link" to="/events">Events</NavLink>
          <NavLink exact className="link" to="/involvement">Get Involved</NavLink>
          <NavLink exact className="link" to="/outreach">Outreach</NavLink>
          <NavLink exact className="link" to="/sponsors">Sponsors</NavLink>
        </nav>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/involvement">
            <GetInvolved />
          </Route>
          <Route exact path="/sponsors">
            <Sponsors />
          </Route>
          <Route exact path="/events">
            <Calendar />
          </Route>
          <Route exact path="/outreach">
            <Outreach />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;