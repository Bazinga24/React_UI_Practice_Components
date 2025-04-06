import React from "react";

function Page({ postPerPage, totalPosts, paginateHandler }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="button-container">
      <ul>
        {pageNumbers.map((number, index) => (
          <li key={index}>
            <a href="#" onClick={() => paginateHandler(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Page;
