import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Add your CSS styles here

const Carousel = () => {
  const images = [
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.42.16%20PM%20(1).jpeg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2019.59.08_cae3be81.jpg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.06.55%20PM.jpeg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.42.17%20PM.jpeg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.42.18%20PM.jpeg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%2019.56.43_6bfcfe46.jpg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202023-03-20%20at%2008.21.13%20(18).jpeg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/31fd881b-32f5-4a3c-b953-1b6b002cf881.jpg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/25d832b5-e817-429c-a9d9-f723d738fde7.jpg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/blob-bb16e11.png",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/e8c22d59-d752-4874-b627-9caddadc36fc.jpg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/d023117d-d3e9-4493-a373-e057f29e72f5.jpg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/81962e3b-69a6-40ed-ab82-dbacbd0c37b4%20(1).jpg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/b3bb26cc-5808-4ed7-b165-f57016544231%20(2).jpg",
    "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/0168ad0b-5280-4be9-a8d7-b1ce26880481.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const imagesPerSlide = 3; // Number of images per slide
  const totalSlides = Math.ceil(images.length / imagesPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000); // Slide duration (3 seconds)
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div className="carousel-slide" key={slideIndex}>
            {images
              .slice(
                slideIndex * imagesPerSlide,
                slideIndex * imagesPerSlide + imagesPerSlide
              )
              .map((src, imgIndex) => (
                <img
                  key={imgIndex}
                  src={src}
                  alt={`Slide ${slideIndex} Image ${imgIndex}`}
                  className="carousel-image"
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
