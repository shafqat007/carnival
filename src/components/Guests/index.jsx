import styled from 'styled-components';
import { motion } from 'framer-motion';

const GuestSection = styled.section`
  padding: 5rem 5%;
  background: ${({ theme }) => theme.colors.background};
`;

const GuestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  gap: 2rem;
  margin-top: 3rem;
  justify-content: center;
`;

const GuestCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 25px ${({ theme }) => theme.colors.shadow};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 35px ${({ theme }) => theme.colors.shadow};
  }
`;

const GuestImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.gradients.primary};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;

  ${GuestCard}:hover & {
    transform: scale(1.05);
  }
`;

const GuestInfo = styled.div`
  padding: 1.2rem;
  text-align: center;
`;

const GuestName = styled.h3`
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.3;
`;

const GuestRole = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  line-height: 1.4;
`;

// Dynamic image imports
const guestImages = {
  ariful: new URL('/src/assets/images/l60Hf.png', import.meta.url).href,
};

// Default placeholder for any missing images
const placeholderImage = "https://via.placeholder.com/300x200/f78620/ffffff?text=Distinguished+Guest";

// Guest data
const guestMembers = [
  {
    name: "Md. Ariful Islam",
    role: "CTO & Head of R&D, Southern IOT",
    image: guestImages.ariful,
    imageKey: "ariful"
  }
];

const Guests = () => {
  // Function to get the correct image or fallback to placeholder if missing
  const getImage = (person) => {
    return person.image || placeholderImage;
  };

  return (
    <GuestSection id="guests">
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #f78620, #cd2a57)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontSize: 'clamp(2rem, 4vw, 3rem)'
      }}>
        Distinguished Guest
      </h2>
      <GuestGrid>
        {guestMembers.map((guest, index) => (
          <GuestCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GuestImage src={getImage(guest)} />
            <GuestInfo>
              <GuestName>{guest.name}</GuestName>
              <GuestRole>{guest.role}</GuestRole>
            </GuestInfo>
          </GuestCard>
        ))}
      </GuestGrid>
    </GuestSection>
  );
};

export default Guests; 