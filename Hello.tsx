import React, { FC } from "react";

interface IProps {
  name?: string;
}

const Hello: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <p className="text-primary">{props.name}</p>
    </div>
  );
};

export default Hello;
