import React, { useState, useEffect } from "react";
function Hero({ searchText }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=21863459-1d141a90f11a0e9dd3fd32369&per_page=3`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <>
          <div className="w-100 relative mb-20">
            <div className="div w-full flex flex-col absolute top-0 left-0 justify-center items-center">
              <div className=" h-screen flex flex-col justify-center items-center">
                <h1 className="text-white px-4 text-3xl font-black mb-7">
                  Stunning free stock photos for download
                </h1>
                <p className="px-4 text-white">
                  Over 2 million+ royalty free stock photos shared by our
                  talented community.
                </p>

                <div className="w-full overflow-hidden my-10 mx-auto">
                  <form
                    onSubmit={onSubmit}
                    className="bg-white rounded  max-w-sm md:max-w-3xl mx-auto"
                  >
                    <div className="flex items-center  border-teal-500 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg my-2"
                        className="h-6 w-6 ml-5 ext-gray-500t"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <input
                        onChange={(e) => setText(e.target.value)}
                        className="py-2 appearance-none bg-transparent border-r-2 w-full text-gray-600   px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search Image Term..."
                      />
                      <button
                        className="my-2 mx-3 text-gray-600 py-1 px-2 rounded focus:outline-none"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>

                <p className="px-4  text-white text-opacity-50">
                  Popular Images: nature, wallpaper, background, food, dog,
                  flowers, money, beach, love, cat, sky, flower, business,
                </p>
              </div>
            </div>
            <img
              src={images[1].webformatURL}
              alt=""
              className="object-cover w-full h-screen "
            />
          </div>
        </>
      )}
    </>
  );
}

export default Hero;
