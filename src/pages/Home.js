import React from "react";
import { Navigate } from "react-router";
import { Footer } from "../components/Footer";
import { MainHomeContent } from "../components/MainHomeContent";

export const Home = ({ login }) => {
  if (!login) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <MainHomeContent />
      <Footer />
    </div>
  );
};
