import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const SiteLayout = ({ children, menu = c => null }) => {
  return (
    <div className="site-container">
      <div>{menu}</div>
      <div>{children}</div>
    </div>
  );
};

const Menu = () => (
  <ErrorBoundary>
    <p style={{ color: "white" }}>TODO: Build Menu</p>
    {/* <loadStatus></loadStatus> */}
    {/* {loadStatus()()} */}
  </ErrorBoundary>
);

const Callout = ({ children }) => (
  <ErrorBoundary>
    <div className="callout">{children}</div>
    <Gnar />
  </ErrorBoundary>
);

export default function Main() {
  return (<SiteLayout menu={<Menu />}>
    <Callout>Welcome to the site</Callout>
    <ErrorBoundary>
      <h1>TODO: Home Page</h1>
      <p>Complete the main contents for this home page</p>
    </ErrorBoundary>
  </SiteLayout>
  );
}


function Gnar() {
  const result = resource.read();
  return <h1>Gnar: {result.gnar}</h1>;
}

function createResource(pending) {
  let error, response;
  pending.then(r => (response = r)).catch(e => (error = e));
  return {
    read() {
      if (error) throw error;
      if (response) return response;
      throw pending;
    }
  };
}
const threeSecondsToGnar = new Promise(resolves =>
  setTimeout(() => resolves({ gnar: "gnarly!" }), 3000)
);
const resource = createResource(threeSecondsToGnar);