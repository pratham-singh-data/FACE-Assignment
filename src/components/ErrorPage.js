import { Typography } from "@mui/material";
import React from "react";
import NoResultsIMG from "../assets/no_search.png";

export const ErrorPage = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "12%",
        marginBottom: "12%",
      }}
    >
      <div>
        <img
          style={{ width: "100px", height: "100px" }}
          src={NoResultsIMG}
          alt="No results found"
        />
        <Typography>No Results Found</Typography>
      </div>
    </div>
  );
};
