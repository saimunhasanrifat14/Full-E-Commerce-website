import React from "react";
import { useLocation, Link } from "react-router-dom";

export const BreadCrumb = () => {
  const { pathname } = useLocation();

  let pathnameArr = pathname.split("/").filter((path) => path);
  let BreadCrumbPath = "";

  return (
    <div className="md:pt-20 pt-10">
      <div className="container">
        <div className="flex items-center gap-x-2">
          <span className="inline-block px-2 py-1 text-GraySemiDark font-popins">
            <Link to={"/"}>Home</Link>
          </span>
          <span className="text-xl text-GraySemiDark">/</span>
          {pathnameArr?.map((name, index) => {
            BreadCrumbPath += `/${name}`;
            const isLast = index === pathnameArr?.length - 1;
            return isLast ? (
              <div>
                <span
                  className="text-TextBlack font-medium font-popins py-1 mx-2"
                  key={index}
                >
                  {name}
                </span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-xl text-GraySemiDark">/</span>
                <span key={index}>
                  <Link
                    className="px-2 py-1 mx-2 text-TextBlack font-popins"
                    to={BreadCrumbPath}
                  >
                    {name}{" "}
                  </Link>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
