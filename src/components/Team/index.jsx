import styled from 'styled-components';
import { motion } from 'framer-motion';

const TeamSection = styled.section`
  padding: 5rem 5%;
  background: ${({ theme }) => theme.colors.light};
`;

const TeamContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const TeamGroup = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const TeamGroupTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

const TeamMemberList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const TeamMember = styled.div`
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  h4 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
  }
`;

const teamStructure = {
  lead: {
    title: "Team Lead",
    members: ["Sazidur Rahman"]
  },
  logistics: {
    title: "Logistics and Operations Team",
    coLead: "Wakil Ahmed",
    members: ["Ahsan Habib", "Mojahidul Islam Fahim", "Sheikh Mohammad Rakib"]
  },
  design: {
    title: "Design Team",
    coLead: "Anindya Barua",
    members: ["Niloy Biswas", "Nawshin Anjum"]
  },
  promotion: {
    title: "Promotion and Marketing Team",
    coLead: "Minhajul Islam",
    members: ["Fardin Khaled", "Abu Jafor"]
  },
  participants: {
    title: "Participants Management Team",
    coLead: "Farhan Ahmed",
    members: ["Tasnimur Rahman Fayad", "Fardin Kaiser"]
  },
  media: {
    title: "Media Coverage Team",
    coLead: "Mizanur Rahman",
    members: ["Manjur-E-Lahi", "Tariqul Islam Rhidoy"]
  },
  finance: {
    title: "Finance Team",
    coLead: "Mohammad Sami",
    members: ["Mahmudur Rahman", "SM Nawshirwan Badsha"]
  },
  decoration: {
    title: "Decoration Team",
    coLead: "Khondakar Fariha Tasnim",
    members: ["Ayon Barua", "Auriana Chowdhury"]
  },
  farewell: {
    title: "Farewell Team",
    coLead: "Hridika Chanda Pritha",
    members: ["Nur Alom", "Atika Tanzin"]
  },
  sports: {
    title: "Sports Team",
    coLead: "MD Nafis Shahriar Niloy",
    members: ["Saad Bin Mostofa", "Nasimul Khaled Sami"]
  }
};

const Team = () => {
  return (
    <TeamSection id="team">
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '3rem',
        background: 'linear-gradient(135deg, #f78620, #cd2a57)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontSize: 'clamp(2rem, 4vw, 3rem)'
      }}>
        Our Team
      </h2>
      <TeamContainer>
        {/* Team Lead */}
        <TeamGroup>
          <TeamGroupTitle>{teamStructure.lead.title}</TeamGroupTitle>
          <TeamMemberList>
            {teamStructure.lead.members.map((member, index) => (
              <TeamMember key={index}>
                <h4>{member}</h4>
              </TeamMember>
            ))}
          </TeamMemberList>
        </TeamGroup>

        {/* Other Teams */}
        {Object.entries(teamStructure).filter(([key]) => key !== 'lead').map(([key, team]) => (
          <TeamGroup key={key}>
            <TeamGroupTitle>{team.title}</TeamGroupTitle>
            <TeamMemberList>
              <TeamMember>
                <h4>{team.coLead}</h4>
                <p>Co-Lead</p>
              </TeamMember>
              {team.members.map((member, index) => (
                <TeamMember key={index}>
                  <h4>{member}</h4>
                  <p>Member</p>
                </TeamMember>
              ))}
            </TeamMemberList>
          </TeamGroup>
        ))}
      </TeamContainer>
    </TeamSection>
  );
};

export default Team; 