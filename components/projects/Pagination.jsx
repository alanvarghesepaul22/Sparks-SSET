import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationElement = ({
  cardsPerPage,
  totalCards,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  const prevBtnHandle = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    } else {
      paginate(currentPage);
    }
  };

  const nextBtnHandle = () => {
    if (totalCards > cardsPerPage) {
      paginate(currentPage + 1);
    } else {
      paginate(currentPage);
    }
  };
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {currentPage === 1 ? null : (
              <PaginationPrevious
                onClick={() => {
                  prevBtnHandle();
                }}
                className={"cursor-pointer"}
              />
            )}
          </PaginationItem>
          <PaginationItem>
            {pageNumbers.map((number, index) => (
              <PaginationLink
                key={index}
                onClick={() => {
                  paginate(number);
                }}
                className={"cursor-pointer"}
              >
                {number}
              </PaginationLink>
            ))}
          </PaginationItem>
          <PaginationItem>
            {currentPage >= pageNumbers.length ? null : (
              <PaginationNext
                onClick={() => {
                  nextBtnHandle();
                }}
                className={"cursor-pointer"}
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default PaginationElement;
