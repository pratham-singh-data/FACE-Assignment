import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import { ErrorPage } from "./ErrorPage";
import { PersonCard } from "./PersonCard";
import { Spinner } from "./Spinner";

// stops execution for ms milliseconds
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const MainHomeContent = () => {
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [last, setLast] = useState(10);
  const [loadingMore, setLoadingMore] = useState(false);

  //   get full dataset at the first render
  useEffect(() => {
    getData(setIsLoading)
      .then((res) => {
        setFullData(res);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  //   updates data whenever last value is updated or the original dataset is updated
  useEffect(() => {
    if (!fullData || fullData.length < last) return;
    setData(fullData.slice(0, last));
    setIsLoading(false);
  }, [fullData, last]);

  //   load more button handler
  const loadMoreClicked = async () => {
    setLoadingMore(true);
    await sleep(1000);
    setLast(last + 10);
    setLoadingMore(false);
  };

  return (
    <main>
      {/* if data is loading show loading page */}
      {isLoading && <Spinner />}

      {/* shown in case of errors */}
      {!isLoading && (!data || data.length === 0) && <ErrorPage />}

      {/* render contacts cards */}
      {data && data.length !== 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: { md: "row", sm: "column" },
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {data.map((entry) => {
            return <PersonCard data={entry} key={entry.login.uuid} />;
          })}
        </div>
      )}

      {/* load more button */}
      {data && data.length !== 0 && last < 500 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            margin: "10px",
          }}
        >
          <Button
            sx={{ display: "block", width: { md: "40%", sm: "100%" } }}
            variant="outlined"
            color="error"
            onClick={loadMoreClicked}
            disabled={loadingMore}
          >
            Load More
          </Button>
        </div>
      )}
    </main>
  );
};

// load more button was used instead of onScroll as onScroll was not possible due to how the cards were being renderred (wrapping instead of overflowing)
