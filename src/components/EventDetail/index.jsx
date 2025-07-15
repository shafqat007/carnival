import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EventDetailSection = styled.section`
  padding: 5rem 5%;
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

const EventDetailContainer = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px ${({ theme }) => theme.colors.shadow};
`;

const EventImageContainer = styled.div`
  width: 100%;
  height: 300px;
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light};
  font-size: 5rem;
`;

const EventContentContainer = styled.div`
  padding: 3rem;
`;

const EventTitle = styled.h1`
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const EventMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  
  & svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const EventDescription = styled.div`
  margin-bottom: 2.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: justify;
`;

const EventDetails = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 15px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  .detail-row {
    display: flex;
    margin-bottom: 1rem;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .detail-label {
    min-width: 120px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  .detail-value {
    flex: 1;
    color: ${({ theme }) => theme.colors.textPrimary};
    word-break: break-word;
    min-width: 200px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.a`
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fonts.heading};
  transition: all 0.3s ease;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
  background: ${({ theme, variant }) => 
    variant === 'outline' 
      ? 'transparent'
      : theme.gradients.primary};
  color: ${({ theme, variant }) => 
    variant === 'outline'
      ? theme.colors.primary
      : theme.colors.light};
  border: ${({ theme, variant }) =>
    variant === 'outline'
      ? `2px solid ${theme.colors.primary}`
      : 'none'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(247, 134, 32, 0.3);
    background: ${({ theme, variant }) => 
      variant === 'outline'
        ? theme.gradients.primary
        : theme.gradients.primary};
    color: ${({ theme }) => theme.colors.light};
  }
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem;
  
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const SectionHeading = styled.h3`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const events = [
  {
    id: "industrial-techathon",
    title: 'MIE Industrial Tech Carnival 2025',
    description: 'A ground-breaking competition merging robotics, automation, and intelligent systems.',
    icon: '🏭',
    fullDescription: 'The Department of Mechatronics and Industrial Engineering, CUET, proudly presents 𝙈𝙄𝙀 𝙄𝙣𝙙𝙪𝙨𝙩𝙧𝙞𝙖𝙡 𝙏𝙚𝙘𝙝 𝘾𝙖𝙧𝙣𝙞𝙫𝙖𝙡 𝟐𝟎𝟐𝟓, a ground-breaking competition merging robotics, automation, and intelligent systems. This year\'s segment challenges participants to develop hybrid hardware-software solutions.',
    date: 'July 17, 2025',
    time: '10:00 AM - 2:00 PM',
    venue: 'IT Business Incubator',
    duration: '4 hours',
    teamSize: '3',
    audience: 'Undergraduate Students from any university',
    tagline: 'Innovate • Automate • Dominate',
    theme: 'Smart Solutions for Real-World Problem that Can be Commercialized/Industrialized',
    prizes: {
      champion: '41,000 BDT',
      firstRunnerUp: '30,000 BDT',
      secondRunnerUp: '20,000 BDT',
      thirdRunnerUp: '10,000 BDT'
    },
    registration: {
      deadline: 'July 15, 2025 - 11:59 AM',
      fee: 'BDT 2500'
    },
    teamComposition: {
      hardwareSpecialist: 'Circuit design, Microcontroller programming, Simulation',
      softwareDeveloper: 'Backend logic, Frontend, Data visualization, ML skills',
      documentationPresenter: 'Technical writing, Clear communication'
    },
    technicalRequirements: [
      'Wireless Communication (Bluetooth/Wi-Fi) – If hardware sends to software wirelessly',
      'Data Analytics – Generate reports from the database'
    ],
    eventType: 'On-site secured competition'
  },
  {
    id: "technical-seminar",
    title: 'Technical Seminar',
    description: 'Industry experts and thought leaders share insights on the latest trends, technologies, and career opportunities in industrial engineering.',
    icon: '🎓',
    fullDescription: 'Attend engaging presentations from industry veterans and academic leaders covering topics like Industry 4.0, smart manufacturing, automation technologies, and career pathways in industrial engineering. The seminar features keynote speakers from leading companies, interactive Q&A sessions, and networking opportunities. Topics include emerging technologies in industrial automation, IoT applications in manufacturing, artificial intelligence in production systems, and sustainable industrial practices.',
    date: 'July 17, 2025',
    time: '3:30 PM',
    venue: 'Auditorium',
    duration: '1.5 hours',
    audience: 'Open to all',
    speakers: ['Industry Leaders', 'Academic Experts', 'Tech Innovators']
  },
  {
    id: "job-placement",
    title: 'Job Placement',
    description: 'Connect with leading companies and explore exciting career opportunities in industrial technology, automation, and engineering sectors.',
    icon: '💼',
    fullDescription: 'Take advantage of this exclusive opportunity to meet directly with recruiters and hiring managers from top companies in the industrial sector. The job placement drive includes company presentations, on-the-spot interviews, and resume reviews. Come prepared with your updated resume and portfolio to showcase your skills and experience to potential employers.',
    date: 'July 18, 2025',
    time: '9:30 AM - 2:00 PM',
    venue: 'Department of MIE',
    duration: '4.5 hours',
    audience: 'Students & Graduates',
    requirements: ['Updated Resume', 'Portfolio (if applicable)', 'Professional Attire'],
    participating_companies: ['Leading Industrial Companies', 'Manufacturing Firms', 'Technology Companies']
  }
];

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const foundEvent = events.find((event) => event.id === id);
    setEvent(foundEvent);
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('events');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (loading) {
    return (
      <EventDetailSection>
        <BackButton onClick={handleBackClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Events
        </BackButton>
        <EventDetailContainer>
          <div style={{ padding: '3rem', textAlign: 'center' }}>
            <h2>Loading event details...</h2>
          </div>
        </EventDetailContainer>
      </EventDetailSection>
    );
  }

  if (!event) {
    return (
      <EventDetailSection>
        <BackButton onClick={handleBackClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Events
        </BackButton>
        <NotFound>
          <h2>Event not found</h2>
          <p>Sorry, the event you're looking for doesn't exist.</p>
        </NotFound>
      </EventDetailSection>
    );
  }

  return (
    <EventDetailSection>
      <BackButton onClick={handleBackClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Events
      </BackButton>
      
      <EventDetailContainer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <EventImageContainer>
          {event.icon}
        </EventImageContainer>
        
        <EventContentContainer>
          <EventTitle>{event.title}</EventTitle>
          
          <EventMeta>
            <MetaItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {event.date}
            </MetaItem>
            <MetaItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {event.time}
            </MetaItem>
            <MetaItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {event.venue}
            </MetaItem>
            <MetaItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              {event.audience}
            </MetaItem>
          </EventMeta>

          <EventDescription>
            {event.fullDescription}
          </EventDescription>

          {event.id === 'industrial-techathon' && (
            <>
              <EventDetails>
                <div className="detail-row">
                  <div className="detail-label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l10 7-10 7-10-7z"></path>
                      <path d="M12 16l10-7"></path>
                      <path d="M12 16l-10-7"></path>
                    </svg>
                    Tagline
                  </div>
                  <div className="detail-value">{event.tagline}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg>
                    Theme
                  </div>
                  <div className="detail-value">{event.theme}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Event Type
                  </div>
                  <div className="detail-value">{event.eventType}</div>
                </div>
              </EventDetails>

              <EventDetails>
                <SectionHeading>Prize Pool</SectionHeading>
                <div className="detail-row">
                  <div className="detail-label">Champion</div>
                  <div className="detail-value">{event.prizes.champion}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">1st Runner Up</div>
                  <div className="detail-value">{event.prizes.firstRunnerUp}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">2nd Runner Up</div>
                  <div className="detail-value">{event.prizes.secondRunnerUp}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">3rd Runner Up</div>
                  <div className="detail-value">{event.prizes.thirdRunnerUp}</div>
                </div>
              </EventDetails>

              <EventDetails>
                <SectionHeading>Registration Details</SectionHeading>
                <div className="detail-row">
                  <div className="detail-label">Deadline</div>
                  <div className="detail-value">{event.registration.deadline}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Fee</div>
                  <div className="detail-value">{event.registration.fee}</div>
                </div>
              </EventDetails>

              <EventDetails>
                <SectionHeading>Team Composition</SectionHeading>
                <div className="detail-row">
                  <div className="detail-label">Hardware</div>
                  <div className="detail-value">{event.teamComposition.hardwareSpecialist}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Software</div>
                  <div className="detail-value">{event.teamComposition.softwareDeveloper}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Documentation</div>
                  <div className="detail-value">{event.teamComposition.documentationPresenter}</div>
                </div>
              </EventDetails>

              <EventDetails>
                <SectionHeading>Technical Requirements</SectionHeading>
                {event.technicalRequirements.map((req, index) => (
                  <div key={index} className="detail-row">
                    <div className="detail-value">• {req}</div>
                  </div>
                ))}
              </EventDetails>

              <ButtonGroup>
                <Button 
                  href="https://forms.gle/CHt26uMLSaSoWYBs8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Register Now
                </Button>
                <Button 
                  href="https://drive.google.com/file/d/1qoYP85y1x1RZdIaHz9npa7zFzJdcZ1aY/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  Download Rulebook
                </Button>
              </ButtonGroup>
            </>
          )}

          {event.id === 'job-placement' && (
            <ButtonGroup>
              <Button 
                href="https://forms.gle/F17N5MAksR6PXZEh6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Register & CV Drop
              </Button>
            </ButtonGroup>
          )}
        </EventContentContainer>
      </EventDetailContainer>
    </EventDetailSection>
  );
};

export default EventDetail; 