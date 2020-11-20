import React, { FC } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.scss";

interface IProps {}

const App: FC<IProps> = (props: IProps) => {
  return (
    <div className="container-fluid bg-light p-3">
      <Hello size={8} />
      <Hello size={16} />
      <Hello size={32} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
