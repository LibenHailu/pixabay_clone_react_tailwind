import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="flex  justify-center">
      <img src={image.webformatURL} alt="" className="w-fulls" />
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-black text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
