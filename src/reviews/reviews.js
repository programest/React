import "./reviews.css";
import Title from "../title.js";
import { useState } from 'react';

const ReviewsTextSlide = ({ title, text, isActive }) => {
  const className = isActive ? "active-slide" : "";

  return (
    <div className={`slider__block ${className}`}>
      <div className="slider__block-title">
        <h2>{title}</h2>
      </div>
      <div className="slider__block-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blocks = [
    { title: "1", text: "lorem!dasdasdasldkasldkalsdkalsdkal;sdk;las" },
    { title: "2", text: "lorem!dasdasdasldkasldkalsdkalsdkal;sdk;las" },
    { title: "3", text: "lorem!dasdasdasldkasldkalsdkalsdkal;sdk;las" },
    { title: "4", text: "lorem!dasdasdasldkasldkalsdkalsdkal;sdk;las" },
    { title: "5", text: "lorem!dasdasdasldkasldkalsdkalsdkal;sdk;las" },
    { title: "6", text: "lorem!dasdasdasldkasldkalsdkalsdkal;sdk;las" },
    // Добавьте здесь другие блоки
  ];

  const visibleBlocks = blocks.slice(currentIndex, currentIndex + 3); // Отображаем только 3 блока, начиная с текущего индекса

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 >= blocks.length ? 0 : prevIndex + 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 < 0 ? blocks.length - 3 : prevIndex - 3));
  };

  return (
    <div>
      <button onClick={prevSlide}>Previous</button>
      <div>
        {visibleBlocks.map((block, index) => (
          <ReviewsTextSlide
            key={index}
            title={block.title}
            text={block.text}
            isActive={index === 0} // Первый видимый блок будет активным
          />
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Reviews;
