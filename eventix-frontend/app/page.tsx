'use client';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { EventCard } from '@/components/events/EventCard';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e0a3c 0%, #4b2c75 100%);
  color: white;
  padding: 8rem 2rem 4rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    opacity: 0.9;
  }
`;

const EventsGrid = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
`;

const events = [
  {
    id: 1,
    title: "Tech Conference 2024",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    date: "2025-04-15",
    location: "San Francisco, CA",
    time: "09:00 AM",
    variant: 1
  },
  {
    id: 2,
    title: "Summer Music Festival",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    date: "2025-08-20",
    location: "Austin, TX",
    time: "06:00 PM",
    variant: 2,
    imageHeight: "250px"
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    date: "2025-09-10",
    location: "New York, NY",
    time: "11:00 AM",
    variant: 3
  },
  {
    id: 4,
    title: "Art Gallery Opening Night",
    image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    date: "2025-07-05",
    location: "Los Angeles, CA",
    time: "07:00 PM",
    variant: 4,
    imageHeight: "280px"
  },
  {
    id: 5,
    title: "Startup Summit 2024",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    date: "2025-11-30",
    location: "Seattle, WA",
    time: "10:00 AM",
    variant: 5
  },
  {
    id: 6,
    title: "Wellness & Yoga Retreat",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    date: "2025-10-15",
    location: "Denver, CO",
    time: "08:00 AM",
    variant: 6,
    imageHeight: "220px"
  }
];

function calculateTimeLeft(date: string) {
  const difference = new Date(date).getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: ReturnType<typeof calculateTimeLeft> }>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft: { [key: number]: ReturnType<typeof calculateTimeLeft> } = {};
      events.forEach(event => {
        newTimeLeft[event.id] = calculateTimeLeft(event.date);
      });
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContent>
          <h1>Discover Amazing Events</h1>
          <p>Find and join events that match your passions</p>
        </HeroContent>
      </HeroSection>

      <EventsGrid>
        {events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            timeLeft={timeLeft[event.id] || calculateTimeLeft(event.date)}
          />
        ))}
      </EventsGrid>
    </>
  );
}