import styled from 'styled-components';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Dynamic image imports
const aboutImages = {
  carnival: new URL('/src/assets/images/carnival-main.jpg', import.meta.url).href,
  // Add more images as needed
};

const placeholderImage = "https://via.placeholder.com/400x300/f78620/ffffff?text=MIE+Tech+Carnival";

const AboutSection = styled.section`
  padding: 5rem 5%;
  background: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  h2 {
    background: ${({ theme }) => theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2rem;
    font-size: clamp(2rem, 4vw, 3rem);
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    text-align: justify;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media (max-width: 768px) {
      text-align: left;
    }
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(247, 134, 32, 0.2);
  background: white;
  padding: 1rem 1rem 0.5rem 1rem;

  .carnival-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 15px;
    display: block;
  }

  .carnival-image:hover {
    transform: scale(1.05);
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Button = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-decoration: none;
  border-radius: 30px;
  font-size: 1.1rem;
  border: 2px solid transparent;
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.3s ease;
  text-align: center;
  font-weight: bold;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(247, 134, 32, 0.3);
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 5px 20px ${({ theme }) => theme.colors.shadow};

  .number {
    font-size: clamp(2.2rem, 4vw, 3rem);
    background: ${({ theme }) => theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: ${({ theme }) => theme.fonts.heading};
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  p {
    text-align: center;
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 600;
    font-size: 1rem;
  }
`;

const About = () => {
  const [participantsRef, participantsInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [eventsRef, eventsInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Function to get image with fallback
  const getImage = (imageKey) => {
    return aboutImages[imageKey] || placeholderImage;
  };

  return (
    <AboutSection id="about">
      <Content>
        <TextContent>
          <h2>About MIE Industrial Tech Carnival 2025</h2>
          <p>
            The MIE Department at CUET, established in 2015, addresses the growing demand for automation and industrial innovation in Bangladesh. Integrating mechanical, electronics, and control systems, it prepares skilled engineers for careers in precision engineering, automation, and industrial research.
          </p>
          <p>
            MIE Industrial Tech Carnival 2025 is a comprehensive event that brings together industry experts, academics, and students to explore the latest trends in industrial technology. This one-day carnival features three main events designed to bridge the gap between academia and industry.
          </p>
          <p>
            Join us for an inspiring day of learning, networking, and discovering opportunities in the rapidly evolving world of industrial technology and automation.
          </p>
        </TextContent>

        <RightContent>
          <ImageContainer
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={getImage('carnival')} 
              alt="MIE Industrial Tech Carnival 2025"
              className="carnival-image"
            />
          </ImageContainer>

          <ButtonContainer>
            <Button
              href="#events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              EXPLORE EVENTS
            </Button>
            <Button
              href="https://www.cuet.ac.bd/dept/mie"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ABOUT MIE DEPARTMENT
            </Button>
          </ButtonContainer>

          <Stats>
            <StatItem
              ref={participantsRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="number">
                {participantsInView ? (
                  <CountUp
                    start={0}
                    end={300}
                    duration={2.5}
                    suffix="+"
                  />
                ) : (
                  "0"
                )}
              </div>
              <p>Expected Participants</p>
            </StatItem>
            <StatItem
              ref={eventsRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="number">
                {eventsInView ? (
                  <CountUp
                    start={0}
                    end={3}
                    duration={2.5}
                  />
                ) : (
                  "0"
                )}
              </div>
              <p>Main Events</p>
            </StatItem>
          </Stats>
        </RightContent>
      </Content>
    </AboutSection>
  );
};

export default About; 