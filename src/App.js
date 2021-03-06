import React, { useState, useEffect } from "react";
import MyNavbar from "./components/common/MyNavbar";
import HomeNavbar from "./components/homapage/HP-component/HomeNavbar";
import MyFooter from "./components/common/MyFooter";
import HomeFooter from "./components/homapage/HP-component/HomeFooter";
import MainContent from "./components/common/MainContent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Donate from "./components/homapage/Donate";
import Homepage from "./components/homapage/Homepage";
import NotFound from "./components/common/NotFound";

function App() {
  const [navbar, setNavbar] = useState(<MyNavbar />);
  const [footer, setFooter] = useState(<MyFooter />);
  const [home, setHome] = useState(false);

  useEffect(() => {
    if (home) {
      setNavbar(<HomeNavbar />);
      setFooter(<HomeFooter />);
    } else {
      setNavbar(<MyNavbar />);
      setFooter(<MyFooter />);
    }
  }, [home]);

  return (
    <Router>
      <>
        {navbar}
        <MainContent>
          <Switch>
            <Route path="/" exact>
              <Homepage setHome={setHome} />
            </Route>
            <Route path="/donate">
              <Donate />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </MainContent>
        {footer}
      </>
    </Router>
  );
}

export default App;
