import styled from 'styled-components';

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 3rem 5% 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
`;

const FooterSection1 = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.light};
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 1rem;
    opacity: 0.9;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.light};
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    
    svg {
      margin-right: 0.5rem;
      min-width: 20px;
    }
    
    span {
      opacity: 0.9;
    }
  }
`;

const QuickLinks = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.light};
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.5rem;
      
      button {
        color: ${({ theme }) => theme.colors.light};
        text-decoration: none;
        opacity: 0.9;
        transition: opacity 0.3s ease;
        background: none;
        border: none;
        font-size: inherit;
        font-family: inherit;
        cursor: pointer;
        padding: 0;
        text-align: left;
        
        &:hover {
          opacity: 1;
        }
      }
      
      a {
        color: ${({ theme }) => theme.colors.light};
        text-decoration: none;
        opacity: 0.9;
        transition: opacity 0.3s ease;
        
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0.8;
  
  p {
    margin-bottom: 0.5rem;
    
    &:last-child {
      font-size: 0.9rem;
      opacity: 0.9;
    }
  }
`;

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterSection id="contact">
      <FooterContent>
        <FooterSection1>
          <h3>MIE Industrial Tech Carnival 2025</h3>
          <p>
            Join us for an inspiring day of learning, innovation, and networking. 
            The MIE Industrial Tech Carnival brings together industry experts, 
            academics, and students to explore the future of industrial technology.
          </p>
          <p>
            Organized by the Department of Mechatronics and Industrial Engineering, 
            Chittagong University of Engineering & Technology.
          </p>
        </FooterSection1>
        
        <ContactInfo>
          <h3>Contact Information</h3>
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>miecarnival25@gmail.com</span>
          </div>
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>CUET, Chattogram, Bangladesh</span>
          </div>
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>July 17-18, 2025</span>
          </div>
        </ContactInfo>
        
        <QuickLinks>
          <h3>Quick Links</h3>
          <ul>
            <li><button onClick={scrollToTop}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('events')}>Events</button></li>
            <li><button onClick={() => scrollToSection('schedule')}>Schedule</button></li>
            <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
            <li><button onClick={() => scrollToSection('sponsors')}>Sponsors</button></li>
            <li><button onClick={() => scrollToSection('guests')}>Guests</button></li>
            <li><button onClick={() => scrollToSection('faculty')}>Faculty</button></li>
            <li><button onClick={() => scrollToSection('team')}>Team</button></li>
            <li><a href="https://www.cuet.ac.bd/dept/mie" target="_blank" rel="noopener noreferrer">MIE Department</a></li>
          </ul>
        </QuickLinks>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; 2025 MIE Industrial Tech Carnival. All rights reserved. | Organized by CUET MIE Department</p>
        <p>This website was made by Shafqat Nawaz</p>
      </FooterBottom>
    </FooterSection>
  );
};

export default Footer; 