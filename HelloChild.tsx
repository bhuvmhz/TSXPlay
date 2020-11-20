import React, { ChangeEvent, FC, useState } from "react";

interface IProps {
  text: string;
  size: number;
}

const HelloChild: FC<IProps> = (props: IProps) => {
  return (
    <div className="pt-3">
      <label className="text-muted">
        {props.size - props.text.length} characters left
      </label>
    </div>
  );
};

export default HelloChild;
