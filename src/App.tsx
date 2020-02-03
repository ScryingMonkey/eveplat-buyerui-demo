import React, { Suspense, useContext, useEffect } from "react";
import "./App.css";
import { AppContext } from "./GlobalState";
import {
  Loading,
  Topbar,
  Footer,
  LandingImage,
  SectionPresenter,
  EventPresenter
} from "./components/_index";

function App() {
  const { sections } = useContext(AppContext).screens.home;
  const { version } = useContext(AppContext);

  useEffect(() => {
    console.log(`eveplat buyer ui ${version}...`);
  }, [version]);

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <EventPresenter />

        {/* <div className="layout-grid">
          <div className="layout-topbar App-topbar">
            <Topbar />
          </div>

          <div className="layout-content">
            {sections.map((section, i) => (
              <SectionPresenter section={section} key={i} />
            ))}
          </div>

          <div className="layout-footer App-footer">
            <Footer />
          </div>
        </div> */}
      </Suspense>
    </div>
  );
}

export default App;
