import React, { FC } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.scss";

interface IProps {}

const App: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <Hello name="h1" />
      <Hello name="h2" />
      <Hello name="h3" />
      <Hello name="h4" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
