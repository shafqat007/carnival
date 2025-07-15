import styled from 'styled-components';
import { motion } from 'framer-motion';

// Dynamic image import
const sponsorImages = {
  southern: new URL('/src/assets/images/southern.png', import.meta.url).href,
};

const SponsorsSection = styled.section`
  padding: 5rem 5%;
  background: ${({ theme }) => theme.colors.background};

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

const SponsorContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const SponsorCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 30px ${({ theme }) => theme.colors.shadow};
  border: 2px solid ${({ theme }) => theme.colors.border};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px ${({ theme }) => theme.colors.shadow};
  }
`;

const SponsorTitle = styled.h3`
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const SponsorLogo = styled.div`
  width: 300px;
  height: 300px;
  margin: 2rem auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px ${({ theme }) => theme.colors.shadow};
  background: white;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }
  
  img:hover {
    transform: scale(1.05);
  }
`;

const SponsorDescription = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Sponsors = () => {
  return (
    <SponsorsSection id="sponsors">
      <h2>Our Sponsor</h2>
      <SponsorContainer>
        <SponsorCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SponsorTitle>Southern IoT</SponsorTitle>
          <SponsorLogo>
            <img 
              src={sponsorImages.southern} 
              alt="Southern IoT"
            />
          </SponsorLogo>
          <SponsorDescription>
          Southern IoT Limited is a pioneering technology company under the umbrella of Southern Apparel Holdings Limited. Founded to lead innovation in the IoT sector, we specialize in designing, developing, and deploying cutting-edge IoT solutions.
          </SponsorDescription>
        </SponsorCard>
      </SponsorContainer>
    </SponsorsSection>
  );
};

export default Sponsors; 