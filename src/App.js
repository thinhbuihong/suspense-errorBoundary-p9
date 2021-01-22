import React, { useState, lazy, Suspense } from "react";
import Agreement from "./Agreement";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// import Main from "./Main";
const Main = React.lazy(() => import("./Main"));
// import "./SiteLayout.css";
export default function App() {
  const [agree, setAgree] = useState(false);
  if (!agree)
    return <Agreement onAgree={() => setAgree(true)} />;
  return (
    <Suspense fallback={<ClimbingBoxLoader />}>
      <Main />
    </Suspense>
  );
}