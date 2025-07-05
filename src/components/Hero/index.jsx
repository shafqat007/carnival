import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import ThemeToggle from '../ThemeToggle';

// Dynamic image import
const heroImages = {
  logo: new URL('/src/assets/images/logo.png', import.meta.url).href,
};

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  position: relative;
  background: ${({ theme }) => theme.gradients.primary};
  overflow-x: hidden;
  box-sizing: border-box;
`;

const LogoContainer = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);

  img {
    max-width: 100%;
    height: auto;
    max-height: 250px;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1.5rem;
    
    img {
      max-height: 180px;
    }
  }
`;

const CountdownContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 90%;
  }
`;

const CountdownTitle = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 1.5rem;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
`;

const CountdownTimer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  color: ${({ theme }) => theme.colors.light};

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const CountdownUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;

  @media (max-width: 480px) {
    min-width: 50px;
    padding: 0.5rem;
  }
`;

const CountdownValue = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light};
`;

const CountdownLabel = styled.span`
  font-size: clamp(0.8rem, 1.2vw, 1rem);
  color: ${({ theme }) => theme.colors.light};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 600px) {
    gap: 1rem;
    flex-direction: column;
    width: 100%;
    max-width: 280px;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-decoration: none;
  border-radius: 30px;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }

  ${({ primary, theme }) => primary ? `
    background: ${theme.colors.light};
    color: ${theme.colors.primary};
    
    &:hover {
      background: rgba(255, 255, 255, 0.9);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  ` : `
    border: 2px solid ${theme.colors.light};
    color: ${theme.colors.light};
    background: transparent;
    
    &:hover {
      background: ${theme.colors.light};
      color: ${theme.colors.primary};
      transform: translateY(-2px);
    }
  `}
`;

const ScrollButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  left: 5%;
  padding: 0.5rem 1.5rem;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 5px;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1.2rem;
    font-size: clamp(0.8rem, 1.2vw, 1rem);
    bottom: 1.5rem;
    left: 3%;
  }
`;

const ThemeToggleWrapper = styled.div`
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 100;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`;

const Hero = () => {
  const location = useLocation();
  const [timeLeft, setTimeLeft] = useState({});
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isOnHero, setIsOnHero] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date('July 17, 2025 00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setIsButtonVisible(heroBottom > 0);
      }
      // Theme toggle is visible only when in hero section (first screen)
      if (window.scrollY < window.innerHeight * 0.8) {
        setIsOnHero(true);
      } else {
        setIsOnHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (sectionId) => {
    const id = sectionId.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollForMore = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ThemeToggleWrapper isVisible={isOnHero}>
        <ThemeToggle />
      </ThemeToggleWrapper>
      
      <HeroSection ref={heroRef}>
        <LogoContainer
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={heroImages.logo} 
            alt="MIE Industrial Tech Carnival 2025" 
          />
        </LogoContainer>
        
        <CountdownContainer>
          <CountdownTitle>Event Dates: July 17-18, 2025<br />Event starting in:</CountdownTitle>
          {timeLeft.expired ? (
            <p>Event has started!</p>
          ) : (
            <CountdownTimer>
              <CountdownUnit>
                <CountdownValue>{timeLeft.days || 0}</CountdownValue>
                <CountdownLabel>Days</CountdownLabel>
              </CountdownUnit>
              <CountdownUnit>
                <CountdownValue>{timeLeft.hours || 0}</CountdownValue>
                <CountdownLabel>Hours</CountdownLabel>
              </CountdownUnit>
              <CountdownUnit>
                <CountdownValue>{timeLeft.minutes || 0}</CountdownValue>
                <CountdownLabel>Minutes</CountdownLabel>
              </CountdownUnit>
              <CountdownUnit>
                <CountdownValue>{timeLeft.seconds || 0}</CountdownValue>
                <CountdownLabel>Seconds</CountdownLabel>
              </CountdownUnit>
            </CountdownTimer>
          )}
        </CountdownContainer>
        
        <ButtonContainer>
          <Button 
            primary
            onClick={() => handleScrollTo('#events')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            EXPLORE EVENTS
          </Button>
          <Button 
            onClick={() => handleScrollTo('#about')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            LEARN MORE
          </Button>
        </ButtonContainer>

        <ScrollButton
          onClick={handleScrollForMore}
          initial={{ opacity: 0 }}
          animate={{ opacity: isButtonVisible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          Scroll for More
        </ScrollButton>
      </HeroSection>
    </>
  );
};

export default Hero; 