"use client";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import PaginationElement from "./Pagination";
import MyProjectsCards from "./MyProjectsCards";
import NoProjectsFound from "./NoProjectsFound";

const MyProjectsCardsSection = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const res = await fetch("/api/projects/myProjects", {
          cache: "no-store",
        });

        if (!res.ok) {
          //   setError("Failed to fetch data");
          return;
        }

        const data = await res.json();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        // setError("Error fetching papers: " + error.message);
      }
    };

    fetchData();
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = projects.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {projects.length > 0 ? (
        <div className="flex flex-col justify-center gap-10">
          <MyProjectsCards projects={currentCards} />
          <PaginationElement
            cardsPerPage={cardsPerPage}
            totalCards={projects.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <NoProjectsFound />
      )}
    </>
  );
};

export default MyProjectsCardsSection;
