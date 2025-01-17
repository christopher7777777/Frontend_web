import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelReview, getTravelPackage } from "../api";
import Map from "../elements/Map";
import Reviews from "../elements/Review";
import WriteReview from "../elements/WriteReview";
import { hotelDetails } from "../helper/data";

const TravelPackage = () => {
  const { id } = useParams();
  const [travelPackageData, setTravelPackageData] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchTravelPackage = async () => {
      const data = await getTravelPackage(id);
      setTravelPackageData(data);
      console.log(data);
    };

    const fetchReviews = async () => {
      const data = await getHotelReview(id);
      setReviews(data);
    };

    fetchTravelPackage();
    fetchReviews();
  }, [id]);

  return (
    <>
      {travelPackageData.length !== 0 ? (
        <div className="flex flex-col">
          {/* images section */}
          <div className="h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-[75vh] w-full flex md:gap-2 lg:gap-4 mt-2 xl:mt-4 transition-all duration-300">
            <div className="flex h-full w-full flex-[1.3]">
              <img
                src={travelPackageData.img[0]}
                alt="single image"
                className="h-full w-full object-cover rounded-lg cursor-pointer shadow-lg drop-shadow-xl"
              />
            </div>
            <div className="hidden md:flex h-full w-full flex-1 duration-300">
              <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-1 lg:gap-2">
                {travelPackageData.img.slice(1, 5).map((img, i) => (
                  <>
                    <img
                      key={i}
                      src={img}
                      alt="multi images"
                      className="h-full w-full object-cover rounded-lg cursor-pointer drop-shadow-xl shadow-lg"
                    />
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* hotel nav */}
          <div className="flex gap-2 xl:gap-4 my-4 lg:mt-4">
            {hotelDetails.map((nav) => (
              <>
                <li
                  key={nav.id}
                  className="h-full list-none font-semibold xl:text-lg"
                >
                  <a
                    href={nav.to}
                    className="hover:border-b-4 hover:border-b-blue-500"
                  >
                    {nav.name}
                  </a>
                </li>
              </>
            ))}
          </div>

          {/* about */}
          <div
            className="flex flex-col shadow-lg drop-shadow-xl rounded-lg mb-4 p-5"
            id="about"
          >
            <div className="flex gap-4 items-end pb-2">
              <h1 className="text-5xl font-bold">{travelPackageData.rating}</h1>
              <p className="text-3xl font-bold text-blue-500">
                {travelPackageData.name}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="flex text-justify font-normal">
                {travelPackageData.desc}
              </p>
              <div className="flex w-full justify-start">
                <button className="h-12 w-32 font-bold text-white rounded-lg bg-blue-500 hover:bg-blue-700 transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* location */}
          <div className="h-[60vh] my-4 w-full" id="location">
            <Map />
          </div>

          {/* write a review */}
          <WriteReview />

          {/* reviews */}
          <Reviews reviews={reviews} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default TravelPackage;