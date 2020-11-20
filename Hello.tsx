import React, { ChangeEvent, FC, useState } from "react";

interface IProps {
  name?: string;
}

const Hello: FC<IProps> = (props: IProps) => {
  const [fullName, setFullName] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="col-md-4 p-3">
      <input
        type="text"
        className="form-control form-control-sm"
        onChange={handleChange}
        value={fullName}
      />
    </div>
  );
};

export default Hello;
