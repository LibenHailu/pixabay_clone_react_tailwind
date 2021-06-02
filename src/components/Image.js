import React from "react";
import { Link } from "react-router-dom";

function Image({ image }) {
  const tags = image.tags.split(",");
  return (
    <Link to={`detail/${image.id}`}>
      <div className="relative max-w-sm">
        <div className="flex flex-col absolute bottom-0 left-0 ">
          <div className=" flex justify-between items-center bg-black bg-opacity-5">
            <div className="px-2 py-1">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="cursor-pointer inline-block text-white px-1 py-1 text-sm font-semibold mr-1 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <div className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white text-sm font-semibold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="mx-2 text-white text-sm font-semibold">
                  {image.likes}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white text-sm font-semibold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="mx-2 text-white text-sm font-semibold">
                  {image.comments}
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          src={image.webformatURL}
          className="max-w-sm overflow-hidden"
          alt=""
          srcset=""
        />
      </div>
    </Link>
  );
}

export default Image;
