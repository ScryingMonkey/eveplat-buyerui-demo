import React, { Suspense, useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { AppContext } from "./GlobalState";
import {
  Loading,
  Topbar,
  Footer,
  LandingImage,
  SectionPresenter,
  EventPresenter,
  EventPage
} from "./components/_index";
import ShoppingCartPresenter from "./components/ShoppingCartPresenter/ShoppingCartPresenter";

function App() {
  const { version } = useContext(AppContext);

  useEffect(() => {
    console.log(`eveplat buyer ui ${version}...`);
  }, [version]);

  // TODO: Implement a router. Needs an events page, individual event pages.  Links should be added to topbar and event cards.
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <div className="layout-grid">
            <div className="layout-topbar App-topbar">
              <Topbar />
            </div>

            {/* <Suspense fallback={<Loading />}> */}
            <div className="layout-content">
              <Switch>
                <Route path={"/"} component={EventPresenter} exact={true} />
                <Route
                  path={"/events"}
                  component={EventPresenter}
                  exact={true}
                />
                <Route
                  path={"/events"}
                  component={EventPresenter}
                  exact={true}
                />
                <Route
                  path={"/event/:eventId"}
                  component={EventPage}
                  exact={false}
                />
                <Route
                  path={"/sections"}
                  component={SectionPresenter}
                  exact={true}
                />
                <Route
                  path={"/cart"}
                  component={ShoppingCartPresenter}
                  exact={true}
                />
              </Switch>
            </div>
            {/* </Suspense> */}

            <div className="layout-footer App-footer">
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
