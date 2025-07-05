import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const GallerySection = styled.section`
  padding: 5rem 5%;
  background: ${({ theme }) => theme.colors.light};

  h2 {
    text-align: center;
    background: ${({ theme }) => theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 3rem;
  }
`;

const CarouselContainer = styled.div`
  max-width: 1000px;
  height: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px ${({ theme }) => theme.colors.shadow};
`;

const CarouselSlide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  img {
  width: 100%;
  height: 100%;
    object-fit: cover;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${({ active }) => active ? 'white' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    transform: scale(1.2);
  }
`;

const galleryImages = [
  {
    src: new URL('/src/assets/images/gallery/CUETAI3-xKWmqJRb.jpg', import.meta.url).href,
    alt: 'CUET AI Event 3'
  },
  {
    src: new URL('/src/assets/images/gallery/CUETAI2-BUh5Dcnv.jpg', import.meta.url).href,
    alt: 'CUET AI Event 2'
  },
  {
    src: new URL('/src/assets/images/gallery/CUETAI-DMd82CD9.jpg', import.meta.url).href,
    alt: 'CUET AI Event'
  },
  {
    src: new URL('/src/assets/images/gallery/img-D1P1yj6a.png', import.meta.url).href,
    alt: 'Event Image'
  },
  {
    src: new URL('/src/assets/images/gallery/mie-BRdf5lb1.jpg', import.meta.url).href,
    alt: 'MIE Department'
  },
  {
    src: new URL('/src/assets/images/gallery/imgg-N-0B0vwi.jpg', import.meta.url).href,
    alt: 'Event Highlights'
  },
  {
    src: new URL('/src/assets/images/gallery/e3-B7V9-sMT.jpg', import.meta.url).href,
    alt: 'Event 3'
  },
  {
    src: new URL('/src/assets/images/gallery/e2-CZ9prWTm.jpg', import.meta.url).href,
    alt: 'Event 2'
  },
  {
    src: new URL('/src/assets/images/gallery/cuet-DuKpPzxH.jpg', import.meta.url).href,
    alt: 'CUET Campus'
  },
  {
    src: new URL('/src/assets/images/gallery/e1-CDEj1c_e.jpg', import.meta.url).href,
    alt: 'Event 1'
  }
];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <GallerySection id="gallery">
      <h2>Event Highlights</h2>
      <CarouselContainer
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <CarouselSlide
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={galleryImages[currentSlide].src} 
              alt={galleryImages[currentSlide].alt}
              loading="lazy"
            />
          </CarouselSlide>
        </AnimatePresence>

        <NavigationButton className="prev" onClick={prevSlide}>
          ‹
        </NavigationButton>
        <NavigationButton className="next" onClick={nextSlide}>
          ›
        </NavigationButton>

        <Indicators>
          {galleryImages.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
        </Indicators>
      </CarouselContainer>
    </GallerySection>
  );
};

export default Gallery; 