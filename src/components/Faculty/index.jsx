import styled from 'styled-components';
import { motion } from 'framer-motion';

const FacultySection = styled.section`
  padding: 5rem 5%;
  background: ${({ theme }) => theme.colors.light};
`;

const FacultyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const FacultyCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.light};
  border: 2px solid rgba(247, 134, 32, 0.2);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(247, 134, 32, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(247, 134, 32, 0.2);
  }
`;

const FacultyImageWrapper = styled.a`
  display: block;
  width: 100%;
  cursor: pointer;
`;

const FacultyImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.gradients.primary};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;

  ${FacultyCard}:hover & {
    transform: scale(1.05);
  }
`;

const FacultyInfo = styled.div`
  padding: 1.2rem;
`;

const FacultyNameLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  
  &:hover h3 {
    text-decoration: underline;
  }
`;

const FacultyName = styled.h3`
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.4rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

const FacultyRole = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.8rem;
  font-weight: 500;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

// Dynamic image imports using shortcut names (same as MIE Robolution)
const facultyImages = {
  prasanjit: new URL('/src/assets/images/faculty/prasanjit.jpg', import.meta.url).href,
  homayun: new URL('/src/assets/images/faculty/homayun.jpg', import.meta.url).href,
  abdur: new URL('/src/assets/images/faculty/abdur.jpg', import.meta.url).href,
  hridoy: new URL('/src/assets/images/faculty/hridoy.jpg', import.meta.url).href,
  sanjeeb: new URL('/src/assets/images/faculty/sanjeeb.jpg', import.meta.url).href,
  miraiz: new URL('/src/assets/images/faculty/miraiz.jpg', import.meta.url).href,
  fahim: new URL('/src/assets/images/faculty/shofol.jpg', import.meta.url).href,
  tasnuva: new URL('/src/assets/images/faculty/tasnuva.jpg', import.meta.url).href,
  naimur: new URL('/src/assets/images/faculty/naimur.jpg', import.meta.url).href,
  tasmia: new URL('/src/assets/images/faculty/tasmia.jpg', import.meta.url).href,
  nusrat: new URL('/src/assets/images/faculty/nusrat.jpg', import.meta.url).href,
  emran: new URL('/src/assets/images/faculty/emran.jpg', import.meta.url).href,
};

// Default placeholder for any missing images
const placeholderImage = "https://via.placeholder.com/300x400/f78620/ffffff?text=Faculty";

// Faculty data (same as MIE Robolution)
const facultyMembers = [
  { 
    name: "Dr. Prasanjit Das", 
    role: "Head & Professor", 
    email: "headmie@cuet.ac.bd", 
    phone: "016-42997909", 
    image: facultyImages.prasanjit,
    details: "https://www.cuet.ac.bd/members/434",
    imageKey: "prasanjit"
  },
  { 
    name: "Dr. Homayun Kabir", 
    role: "Associate Professor", 
    email: "homayun@cuet.ac.bd", 
    phone: "+8801814330170", 
    image: facultyImages.homayun,
    details: "https://www.cuet.ac.bd/members/393",
    imageKey: "homayun"
  },
  { 
    name: "Md. Abdur Rahman", 
    role: "Assistant Professor", 
    email: "abdurrahman@cuet.ac.bd", 
    phone: "+8801683215377", 
    image: facultyImages.abdur,
    details: "https://www.cuet.ac.bd/members/488",
    imageKey: "abdur"
  },
  { 
    name: "Monowar Wadud Hridoy", 
    role: "Assistant Professor", 
    email: "hridoy@cuet.ac.bd", 
    phone: "01734641700", 
    image: facultyImages.hridoy,
    details: "https://www.cuet.ac.bd/members/604",
    imageKey: "hridoy"
  },
  { 
    name: "Sanjeeb Roy", 
    role: "Assistant Professor", 
    email: "sanjeeb@cuet.ac.bd", 
    phone: "01771810318", 
    image: facultyImages.sanjeeb,
    details: "https://www.cuet.ac.bd/members/590",
    imageKey: "sanjeeb"
  },
  { 
    name: "Md. Miraiz Hossain", 
    role: "Assistant Professor", 
    email: "miraizhossain@cuet.ac.bd", 
    phone: "+8801521473649", 
    image: facultyImages.miraiz,
    details: "https://www.cuet.ac.bd/members/649",
    imageKey: "miraiz"
  },
  { 
    name: "S. M. Fahim Faisal", 
    role: "Assistant Professor", 
    email: "fahimfaisal@cuet.ac.bd", 
    phone: "+8801832834685", 
    image: facultyImages.fahim,
    details: "https://www.cuet.ac.bd/members/677",
    imageKey: "fahim"
  },
  { 
    name: "Tasnuva Jahan Nuva", 
    role: "Assistant Professor", 
    email: "tasnuvajahan@cuet.ac.bd", 
    phone: "", 
    image: facultyImages.tasnuva,
    details: "https://www.cuet.ac.bd/members/678",
    imageKey: "tasnuva"
  },
  { 
    name: "Kazi Naimur Rahman", 
    role: "Assistant Professor", 
    email: "naimur@cuet.ac.bd", 
    phone: "01643361857", 
    image: facultyImages.naimur,
    details: "https://www.cuet.ac.bd/members/689",
    imageKey: "naimur"
  },
  { 
    name: "Tasmia Binte Hai", 
    role: "Assistant Professor", 
    email: "tasmia_heem@cuet.ac.bd", 
    phone: "", 
    image: facultyImages.tasmia,
    details: "https://www.cuet.ac.bd/members/690",
    imageKey: "tasmia"
  },
  { 
    name: "Ms. Nusrat Sultana", 
    role: "Lecturer", 
    email: "nusratsultana@cuet.ac.bd", 
    phone: "01797601059", 
    image: facultyImages.nusrat,
    details: "https://www.cuet.ac.bd/members/758",
    imageKey: "nusrat"
  },
  { 
    name: "Emran Hasan", 
    role: "Lecturer", 
    email: "emran.hasan@cuet.ac.bd", 
    phone: "", 
    image: facultyImages.emran,
    details: "https://www.cuet.ac.bd/members/813",
    imageKey: "emran"
  },
];

const Faculty = () => {
  // Function to get the correct image or fallback to placeholder if missing
  const getImage = (person) => {
    return person.image || placeholderImage;
  };

  return (
    <FacultySection id="faculty">
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #f78620, #cd2a57)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontSize: 'clamp(2rem, 4vw, 3rem)'
      }}>
        Our Faculty
      </h2>
      <FacultyGrid>
        {facultyMembers.map((faculty, index) => (
          <FacultyCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <FacultyImageWrapper href={faculty.details} target="_blank" rel="noopener noreferrer">
              <FacultyImage src={getImage(faculty)} />
            </FacultyImageWrapper>
            <FacultyInfo>
              <FacultyNameLink href={faculty.details} target="_blank" rel="noopener noreferrer">
                <FacultyName>{faculty.name}</FacultyName>
              </FacultyNameLink>
              <FacultyRole>{faculty.role}</FacultyRole>
              <ContactInfo>
                <a href={`mailto:${faculty.email}`} title="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                {faculty.phone && (
                  <a href={`tel:${faculty.phone}`} title="Phone">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </a>
                )}
                <a href={faculty.details} target="_blank" rel="noopener noreferrer" title="Profile">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9,9h6v6H9z"></path>
                    <path d="M9 1v6M15 1v6M9 17v6M15 17v6M1 9h6M17 9h6M1 15h6M17 15h6"></path>
                  </svg>
                </a>
              </ContactInfo>
            </FacultyInfo>
          </FacultyCard>
        ))}
      </FacultyGrid>
    </FacultySection>
  );
};

export default Faculty; 