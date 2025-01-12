import React, { useState } from "react";

const Annual = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      title: "Spectrum",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
      image: "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg", // Image link
    },
    {
        title: "Spectrum",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
        image: "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg", // Image link
      },
      {
        title: "Spectrum",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
        image: "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg", // Image link
      },
      {
        title: "Spectrum",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
        image: "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg", // Image link
      },
      {
        title: "Spectrum",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
        image: "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg", // Image link
      },
      {
        title: "Spectrum",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
        image: "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg", // Image link
      },
      {
        title: "Spectrum",
        description:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.",
        image: "https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736681210/bangkok-city-sunrise-thailand_lfnmni.jpg", // Image link
      }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 text-white">
        <div className="galImg flex justify-center items-center mb-[70px]">
                    <img src="https://res.cloudinary.com/dqlnb4ddv/image/upload/v1736675717/Group_48096075_jdlhkt.png" alt="" />
                </div>

      <div className="relative flex items-center justify-between">
        {/* Left Button */}
        <button
          className="absolute left-0 z-10 bg-[#001021] hover:bg-[#3e2db6] text-white p-4 rounded-full shadow-lg"
          onClick={handlePrev}
        >
          &#8249;
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden w-full px-10">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 33.33}%)`,
            }}
          >
            {data.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-[33.33%] px-4">
                {/* Card Component */}
                <div
                  className="relative text-white shadow-lg overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(12% 0, 94% 0, 100% 0, 100% 89%, 87% 100%, 3% 100%, 0 100%, 0 10%)",
                    backgroundColor: "#1b2a4e", // Card background color
                    border: "2px solid #007bff", // Border
                    borderTopRightRadius: "30px", // Rounded corner
                    borderBottomLeftRadius: "30px", // Rounded corner
                    boxShadow: "0 0 10px 2px #007bff, inset 0 0 5px #007bff", // Glow effect
                  }}
                >
                  {/* Square Image Shape */}
                  <div
                    className="mx-auto mt-6 h-48 w-[300px] bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      border: "2px solid #007bff", // Border for the square
                      borderRadius: "20px", // Slight rounding for the square
                      boxShadow: "0 0 10px 2px #007bff, inset 0 0 5px #007bff", // Glow effect
                    }}
                  ></div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-blue-400 text-center">
                      {item.title}
                    </h2>
                    <p className="text-gray-300 text-sm mt-3 text-center">
                      {item.description}
                    </p>
                    <div className="mt-5">
                      <button
                        className="w-full py-2 text-center bg-blue-500 hover:bg-blue-400 text-white"
                        style={{
                          clipPath:
                            "polygon(12% 0, 94% 0, 100% 0, 100% 89%, 87% 100%, 3% 100%, 0 100%, 0 10%)",
                        }}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          className="absolute right-0 z-10 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full shadow-lg"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-8">
        {data.slice(0, data.length - 2).map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-[#000aad]" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Annual;
