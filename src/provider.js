import React, { useState } from "react";

import PackageContext from "./context.js";

const Provider = (props) => {
  const [mission, setMisssion] = useState({
    mname: "go to rusia",
    agent: 10,
    accept: "not accepted",
  });
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMisssion({ ...mission, accept: "ACCEPTED" });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
