// When given a route that is one level from Home,
// renders Home with a link and CurrentPage without (active).
// When given a route that is two or more levels from home,
// renders each level before CurrentPage with links.

import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ currentPage, pastPages = [] }) {
  const links = pastPages.map((page) => (
    <li className="breadcrumb-item">
      <Link to={page.url}>{page.name}</Link>
    </li>
  ));

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {links}
        <li className="breadcrumb-item active" aria-current="page">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
}
