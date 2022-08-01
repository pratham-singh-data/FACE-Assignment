import { Card, Typography } from "@mui/material";
import React from "react";
import UserNoPic from "../assets/user_no_pic.png";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";

export const PersonCard = ({ data }) => {
  const { cell, dob, email, gender, location, name, phone, picture } = data;

  return (
    <Card
      sx={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        width: { md: "40%", xs: "100%" },
        mt: { md: "20px", xs: "10px" },
        padding: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {/* peron's profile picture */}
        <img
          src={picture.large ? picture.large : UserNoPic}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "25px",
            margin: "5px",
          }}
          alt={name}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{`${name.title}. ${name.first} ${name.last}`}</Typography>

        {/* person's gender and age display */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          {gender === "male" ? (
            <ManIcon sx={{ mx: "5px" }} />
          ) : (
            <WomanIcon sx={{ mx: "5px" }} />
          )}
          <Typography>{`${dob.age} years old`}</Typography>
        </div>
      </div>

      <div>
        {/* display person's smartphone number */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SmartphoneIcon sx={{ mx: "5px" }} /> <Typography>{cell}</Typography>
        </div>

        {/* display person's phone number */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <PhoneEnabledIcon sx={{ mx: "5px" }} />{" "}
          <Typography>{phone}</Typography>
        </div>

        {/* display person's email address */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <MailIcon sx={{ mx: "5px" }} /> <Typography>{email}</Typography>
        </div>

        {/* display person's location */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LocationOnIcon sx={{ mx: "5px" }} />{" "}
          <Typography>{`${location.city}, ${location.state}, ${location.country}`}</Typography>
        </div>
      </div>
    </Card>
  );
};
