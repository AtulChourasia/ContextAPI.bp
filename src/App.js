import React, { Fragment } from "react";
import Provider from "./provider";
import Context from "./context";

const Agents = () => {
  return <AgentOne />;
};
const AgentOne = () => {
  return <AgentTwo />;
};
const AgentTwo = () => {
  return <AgentBond />;
};
const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => {
        return (
          <Fragment>
            <h3>Agent info</h3>
            <p>Mission Name :{context.data.mname}</p>
            <p> AgentNo:{context.data.agent}</p>
            <h2>Mission Status : {context.data.accept}</h2>
            <button onClick={context.isMissionAccepted}>
              change mission data
            </button>
          </Fragment>
        );
      }}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>hii</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;
