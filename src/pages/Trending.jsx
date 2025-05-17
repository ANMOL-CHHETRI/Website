import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Trending = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://blog-hqx2.onrender.com/blog');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Trending Page</h2>

      <div className="max-w-4xl mx-auto relative">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          interval={4000}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white shadow-md rounded-full hover:bg-gray-200"
              >
                &#10094;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white shadow-md rounded-full hover:bg-gray-200"
              >
                &#10095;
              </button>
            )
          }
        >
          {blogs.map((blog, index) => (
            <div key={index} className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <p className="legend">{blog.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Trending;
