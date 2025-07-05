import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EventsSection = styled.section`
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

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const EventCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 30px ${({ theme }) => theme.colors.shadow};

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transform: translateY(-10px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.shadow};
  }
`;

const EventImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EventIcon = styled.div`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.light};
`;

const EventContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const EventTitle = styled.h3`
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-align: center;
`;

const EventDescription = styled.div`
  flex-grow: 1;
  text-align: center;
  
  p {
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const EventDetails = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};

  .detail-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    
    svg {
      margin-right: 0.5rem;
      color: ${({ theme }) => theme.colors.primary};
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fonts.heading};
  transition: all 0.3s ease;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.light};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(247, 134, 32, 0.3);
  }
`;

// Event data for the carnival
const events = [
  {
    id: "industrial-techathon",
    title: 'Industrial Techathon',
    description: 'A comprehensive hackathon focused on solving real-world industrial challenges using cutting-edge technology and automation solutions.',
    icon: '🏭',
    date: 'July 17, 2025',
    time: '10:00 AM - 2:00 PM',
    venue: 'IT Business Incubator',
    audience: 'Students & Professionals'
  },
  {
    id: "technical-seminar",
    title: 'Technical Seminar',
    description: 'Industry experts and thought leaders share insights on the latest trends, technologies, and career opportunities in industrial engineering.',
    icon: '🎓',
    date: 'July 17, 2025',
    time: '3:30 PM',
    venue: 'Auditorium',
    audience: 'Open to all'
  },
  {
    id: "job-placement",
    title: 'Job Placement',
    description: 'Connect with leading companies and explore exciting career opportunities in industrial technology, automation, and engineering sectors.',
    icon: '💼',
    date: 'July 18, 2025',
    time: '9:30 AM - 2:00 PM',
    venue: 'Department of MIE',
    audience: 'Students & Graduates'
  }
];

const Events = () => {
  const navigate = useNavigate();

  const handleCardClick = (e, eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <EventsSection id="events">
      <h2>Main Events</h2>
      
      <EventsGrid>
        {events.map((event, index) => (
          <EventCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onClick={(e) => handleCardClick(e, event.id)}
          >
            <EventImageContainer>
              <EventIcon>{event.icon}</EventIcon>
            </EventImageContainer>
            <EventContent>
              <EventTitle>{event.title}</EventTitle>
              <EventDescription>
                <p>{event.description}</p>
              </EventDescription>
              
              <EventDetails>
                <div className="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{event.time}</span>
                </div>
                <div className="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{event.venue}</span>
                </div>
                <div className="detail-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>{event.audience}</span>
                </div>
              </EventDetails>

              <ButtonGroup>
                <Button 
                  to={`/events/${event.id}`} 
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn More
                </Button>
              </ButtonGroup>
            </EventContent>
          </EventCard>
        ))}
      </EventsGrid>
    </EventsSection>
  );
};

export default Events; 