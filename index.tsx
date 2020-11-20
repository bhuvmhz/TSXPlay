import React, { FC } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.scss";

interface IProps {}

const App: FC<IProps> = (props: IProps) => {
  return (
    <div className="container-fluid bg-primary p-3">
      <Hello name="Component 1" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
