import React, { ChangeEvent, FC, useState } from "react";
import HelloChild from "./HelloChild";

interface IProps {
  size: number;
}

const Hello: FC<IProps> = (props: IProps) => {
  const [text, setText] = useState("");
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length > props.size) return;
    setText(event.target.value);
  };

  return (
    <div className="p-3">
      <textarea
        rows={props.size / 4}
        className="form-control form-control-sm bg-success text-white"
        onChange={handleChange}
        value={text}
      />
      <HelloChild text={text} size={props.size} />
    </div>
  );
};

export default Hello;
