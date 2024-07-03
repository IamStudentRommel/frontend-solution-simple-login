import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const ChuckNorris = ({ token }) => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFact = async () => {
      try {
        const response = await fetch("http://localhost:3333/fact", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setTimeout(() => {
            setFact(data.fact);
            setLoading(false);
          }, 3000);
        } else {
          console.error("Failed to fetch Chuck Norris fact.");
          setLoading(false);
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching Chuck Norris fact.",
          error
        );
        setLoading(false);
      }
    };

    getFact();
  }, [token]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="fact">
      <h2>Chuck Norris Fact</h2>
      <p>{fact}</p>
    </div>
  );
};

export default ChuckNorris;
