import React from "react";
import "./ChangeView.css";
import { useNavigate } from "react-router-dom";

export const ChangeView = ({ path, name }) => {
  const navigate = useNavigate();

  return (
    <div className="changeViewDesign" onClick={() => navigate(path)}>
      {name}
    </div>
  );
};
