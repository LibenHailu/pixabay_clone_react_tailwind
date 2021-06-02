import React, { useEffect, useState } from "react";
import Image from "../components/Image";
import Hero from "../components/Hero";

function Home() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <Hero searchText={(text) => setTerm(text)} />
      <div className="container mx-auto mb-20">
        {/* <ImageSearch searchText={(text) => setTerm(text)} /> */}
        {!isLoading && images.length === 0 && (
          <h1 className="text-6xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <>
                {/* <ImageCard key={image.id} image={image} /> */}
                <Image key={image.id} image={image} />
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
