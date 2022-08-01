import { CircularProgress } from "@mui/material";
import React from "react";

export const Spinner = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        marginTop: "12%",
        marginBottom: "18%",
      }}
    >
      <CircularProgress />
    </div>
  );
};
