import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "../components/ImageCard";

function Detail() {
  const { id } = useParams();
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=21863459-1d141a90f11a0e9dd3fd32369&id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);
  console.log(image.id);
  return (
    <>
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="flex  h-screen justify-center items-center  -top-50">
          <div className="flex-grow content-center ">
            <div className="flex flex-col justify-center items-center">
              <ImageCard image={image[0]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
