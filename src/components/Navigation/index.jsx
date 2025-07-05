import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 100;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: relative;
  z-index: 1000;

  span {
    display: block;
    width: 30px;
    height: 2px;
    background: ${({ theme, isOpen, isOnHero }) => {
      if (isOpen) return 'transparent';
      return isOnHero ? theme.colors.light : theme.colors.primary;
    }};
    position: relative;
    transition: all 0.3s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 2px;
      background: ${({ theme, isOpen, isOnHero }) => {
        if (isOpen) return theme.colors.primary;
        return isOnHero ? theme.colors.light : theme.colors.primary;
      }};
      transition: all 0.3s ease;
    }

    &::before {
      top: ${({ isOpen }) => (isOpen ? '0' : '-8px')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'none')};
    }

    &::after {
      bottom: ${({ isOpen }) => (isOpen ? '0' : '-8px')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'none')};
    }
  }

  @media (max-width: 768px) {
    span {
      &::before {
        top: ${({ isOpen }) => (isOpen ? '0' : '-8px')};
      }
      &::after {
        bottom: ${({ isOpen }) => (isOpen ? '0' : '-8px')};
      }
    }
  }
`;

const GoToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  z-index: 99;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-size: 2.5rem;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const Menu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 6rem 2rem;
  backdrop-filter: blur(10px);
  box-shadow: -5px 0 15px ${({ theme }) => theme.colors.shadow};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 100;
`;

const MenuItem = styled(motion.button)`
  display: block;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  padding: 1rem 0;
  transition: color 0.3s ease;
  cursor: pointer;
  background: none;
  border: none;
  width: 100%;
  text-align: left;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:nth-last-of-type(2) {
    margin-bottom: 2rem;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [isOnHero, setIsOnHero] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/#about' },
    { title: 'Events', to: '/#events' },
    { title: 'Schedule', to: '/#schedule' },
    { title: 'Gallery', to: '/#gallery' },
    { title: 'Sponsors', to: '/#sponsors' },
    { title: 'Faculty', to: '/#faculty' },
    { title: 'Guests', to: '/#guests' },
    { title: 'Team', to: '/#team' },
    { title: 'Contact', to: '/#contact' },
    { title: 'Visit Robolution', to: 'https://mierobolution.com', external: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
      
      // Check if user is on hero section (first screen)
      if (window.scrollY < window.innerHeight * 0.8) {
        setIsOnHero(true);
      } else {
        setIsOnHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const menuVariants = {
    closed: {
      x: 300,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.2,
      },
    },
    open: {
      opacity: 1,
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  const handleClick = (to) => {
    setIsOpen(false);

    if (to.startsWith('http')) {
      window.open(to, '_blank');
    } else if (to === '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (to.startsWith('/#')) {
      const sectionId = to.substring(2);
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(to);
    }
  };

  return (
    <>
      <Nav>
        <MenuButton 
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          isOnHero={isOnHero && location.pathname === '/'}
        >
          <span />
        </MenuButton>

        <AnimatePresence>
          {isOpen && (
            <>
              <Backdrop
                variants={backdropVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => setIsOpen(false)}
              />
              <Menu
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {menuItems.map((item, i) => (
                  <MenuItem
                    key={item.title}
                    onClick={() => handleClick(item.to)}
                    custom={i}
                    variants={itemVariants}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </AnimatePresence>
      </Nav>

      <AnimatePresence>
        {showGoToTop && (
          <GoToTopButton
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
          >
            ↑
          </GoToTopButton>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 