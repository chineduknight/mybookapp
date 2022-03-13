import { nanoid } from "nanoid";
import React from "react";

const Loader = () => {
  return (
    <div className="main">
      <div className="lds-spinner">
        {new Array(12).fill(0).map(() => (
          <div key={nanoid()} />
        ))}
      </div>
    </div>
  );
};

export default Loader;
