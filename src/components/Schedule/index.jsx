import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ScheduleSection = styled.section`
  padding: 4rem 5%;
  background: ${({ theme }) => theme.colors.background};

  h2 {
    text-align: center;
    background: ${({ theme }) => theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 2rem;
  }
`;

const DayTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const DayTab = styled.button`
  padding: 1rem 2rem;
  background: ${({ active, theme }) => 
    active ? theme.gradients.primary : theme.colors.cardBackground};
  color: ${({ active, theme }) => 
    active ? theme.colors.light : theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    background: ${({ theme }) => theme.gradients.primary};
    color: ${({ theme }) => theme.colors.light};
  }
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${({ theme }) => theme.gradients.primary};
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  
  &:nth-child(odd) {
    padding-right: calc(50% + 2rem);
    text-align: right;
    
    @media (max-width: 768px) {
      padding-right: 0;
      padding-left: 60px;
      text-align: left;
    }
  }
  
  &:nth-child(even) {
    padding-left: calc(50% + 2rem);
    text-align: left;
    
    @media (max-width: 768px) {
      padding-left: 60px;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.background};
    z-index: 10;
    
    @media (min-width: 769px) {
      left: calc(50% - 8px);
    }
    
    @media (max-width: 768px) {
      left: 12px;
    }
  }
`;

const TimelineContent = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  z-index: 5;
  
  .time {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
  }
  
  .event-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 0.5rem;
  }
  
  .venue {
    margin-top: 0.8rem;
    padding: 0.4rem 0.8rem;
    background: ${({ theme }) => theme.colors.cardBackground};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primary};
    display: inline-block;
  }
`;

const scheduleData = {
  day1: [
    {
      time: "8:00 AM",
      title: "T-shirt Distribution",
      venue: "Main Entrance"
    },
    {
      time: "8:30 AM",
      title: "Inauguration by Cutting Cake",
      venue: "Main Hall"
    },
    {
      time: "9:00 AM - 9:30 AM",
      title: "Rally",
      venue: "Campus"
    },
    {
      time: "9:30 AM",
      title: "Reporting & Reception",
      venue: "Main Hall"
    },
    {
      time: "10:00 AM - 2:00 PM",
      title: "Industrial Techathon (Final Phase)",
      venue: "IT Business Incubator"
    },
    {
      time: "2:00 PM",
      title: "Lunch & Prayer Break",
      venue: "Cafeteria"
    },
    {
      time: "3:30 PM",
      title: "Seminar on Industry 4.0 for RMG",
      venue: "Auditorium"
    },
    {
      time: "5:00 PM - 6:00 PM",
      title: "Prize Giving Ceremony",
      venue: "Auditorium"
    },
    {
      time: "6:30 PM - 7:30 PM",
      title: "Farewell Ceremony",
      venue: "Auditorium"
    }
  ],
  day2: [
    {
      time: "9:30 AM",
      title: "Reporting Time for Job Placement Programme",
      venue: "Department of MIE"
    },
    {
      time: "11:00 AM - 2:00 PM",
      title: "Interview Session",
      venue: "Department of MIE"
    }
  ]
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');

  // Automatic tab switching every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDay(prev => prev === 'day1' ? 'day2' : 'day1');
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScheduleSection id="schedule">
      <h2>Event Schedule</h2>
      
      <DayTabs>
        <DayTab
          active={activeDay === 'day1'}
          onClick={() => setActiveDay('day1')}
        >
          July 17 - Day 1
        </DayTab>
        <DayTab
          active={activeDay === 'day2'}
          onClick={() => setActiveDay('day2')}
        >
          July 18 - Day 2
        </DayTab>
      </DayTabs>

      <Timeline>
        {scheduleData[activeDay].map((item, index) => (
          <TimelineItem
            key={`${activeDay}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <TimelineContent>
              <div className="time">{item.time}</div>
              <div className="event-title">{item.title}</div>
              <div className="venue">📍 {item.venue}</div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </ScheduleSection>
  );
};

export default Schedule; 