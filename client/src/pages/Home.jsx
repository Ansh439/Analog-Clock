import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressButton from "../assets/ProgressButton.png"
import NextIcon from '../assets/NextIcon.png'
const slides = [
  {
    image: 'https://s3-alpha-sig.figma.com/img/e088/8995/13a478aa6d3cc9bebac1c6fe29b1cf35?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ex-qdvOG4CU7LscqCsVdIQizo9lnSnv-E9rGlsYXUEdib-ekFB2UxagXNaEaDC1yyqrMSlrAmmbeQUMx-fUHSZ7gXrW6K0homEaOboDVi1tO0CIQENlaUUZA6bsLtvFLTrx0S4SSse7jd87O8MXOvGvjJk7XO22wkK3Qbdke4W7RdIDlWEhof63uRZOMw9V5qkIHUG7E2ZDc~JvGdwvAdn7UvurZa9NPw1xB20eE4pTx~gOURNif~HZ2sjYyz1Qp1uVQMTw26ynY63m8YQWQGU3nX28L2oqi7wAvKhJnnYcA2lkt5kLw~jm5RokL~SHvMqwj1530qswV3~gfM6VHyA__',
    title: "We serve incomparable delicacies",
    subtitle: "All the best restaurants with their top menu waiting for you, they can’t wait for your order!!",
    className: "rotate-y-180"
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/c0c9/6d15/e5e4395b092732d5f35b7ca909a724a6?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FoUKvRltOijKTNJU-1U4w1kHR05HbTolRfRGaNmpcrVHC9XH4mM6N7lZpItoAO2EQiq7bQbwbxm6Gfl-jVwYDSXW-nU87FpjCHdiUkF73BH9f46layGxJWuP7aFCR7Eg4mlhGZovnQNCjR8QcwrBTxhlYCFce~lsjS05cxHcBxQMGVgE6PEHE~SAwVbrO~QE~Rc2xk8UlP6ZJFSX6RyqwLsHSwfw2O~wEBjG74I33JqFsn5NVlBpPCFRujOsLyUUw2JACFFC9vKe-fShbA7ypRGEzC-WQJhpyBpLZX0uIx2fawcd5Yz~YNN2EJn0dch6nrORO-05sJKN-F6CHtCCjA__',
    title: "We serve incomparable delicacies",
    subtitle: "All the best restaurants with their top menu waiting for you, they can’t wait for your order!!",
    className: ""
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/4ba4/23e2/47ab2f521db10f62ad59b289265a82d4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gF1X1a8Ujv7TXvytT9dfBdgU-a3J7VYrN-7n2x~I4tIyW00srvDOECeIV2dOVcwKOL3B8zB0DC8Oh08bhdvwVC7DuswbdOeh36OrdJD-2825ra1mDEuxqbadF-NCPQzUvsWhQNcmUkL8Cdb~jNcw9hxJVzVX2McCUZZa3wyLHQq4F9XJc6fz2gk9q21o4o-8nwZtqQzFu7BvB5TzuYjndSqrVZ1wrWPUxs6o6~R4cjheOFd5JI0OGsZcFXPsOAWgCzgi64dv-FS3Vgqb3ao~kgs1qdjEIOhGEGDdaqnkazkFiFEE2ZLokxRD2bc13oDjnYNuvPpU5QNlchZAzoxmDg__',
    title: "We serve incomparable delicacies",
    subtitle: "All the best restaurants with their top menu waiting for you, they can’t wait for your order!!",
    className: ""
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('slide-in-right');
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    setAnimationClass('slide-in-right');
  };

  const skip = () => {
    setAnimationClass('slide-in-right');
    navigate('/signin')
  };

  console.log(currentIndex);

  return (
    <div className="relative h-screen flex items-center justify-center">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? `opacity-100 ${animationClass}` : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover ${slide.className}`}

          />
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-4">
            <div className="bg-[#FE8C00] bg-opacity-90 p-6 rounded-[48px] mb-4 max-w-md mx-auto h-[50vh] w-[311px] md:w-full md:max-w-lg flex flex-col justify-between">
              <div>
                <h1 className="inter-f6 text-white mb-4">
                  {slide.title}
                </h1>
                <p className="inter-f4 text-white">
                  {slide.subtitle}
                </p>
              </div>
              {currentIndex < slides.length - 1 ? (
                <>
                  <div className="flex justify-center mt-4">
                    {slides.map((_, index) => (
                      <span
                        key={index}
                        className={`h-[6px] w-[24px] rounded-full mx-1 ${
                          index === currentIndex ? 'bg-white' : 'bg-[#C2C2C2]'
                        }`}
                      />
                    ))}
                  </div>
                  <div className='w-full flex justify-center'>
                    <div className="flex justify-between mt-4 w-[247px]">
                      <button onClick={skip} className="text-white text-lg md:text-xl lg:text-2xl">
                        Skip
                      </button>
                      <button onClick={nextSlide} className="text-white text-lg md:text-xl lg:text-2xl flex justify-center items-center gap-1">
                        Next
                        <img src={NextIcon} alt="Next Icon" className='hover:cursor-pointer' />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex justify-center mt-4 " onClick={() => navigate('/signin')}>
                    <img src={ProgressButton} alt="Progress Icon" className='hover:cursor-pointer' />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}