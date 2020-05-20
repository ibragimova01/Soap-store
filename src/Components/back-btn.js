import React from "react";
import { useHistory } from "react-router-dom";

const BackBtn = () => {
 let history = useHistory();
  return (
    <button className="btn-card btn-primary" onClick={history.goBack}>
      Назад
    </button>
  );
};

export default BackBtn;