import { Tab } from "@mui/material";
import React from "react";

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
};
export default LinkTab;
