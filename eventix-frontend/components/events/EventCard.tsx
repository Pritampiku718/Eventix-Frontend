'use client';

import styled from 'styled-components';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { useState } from 'react';
import { Event } from '@/types/event';
import { BookingModal } from './BookingModal';
import { CountdownTimer } from './CountdownTimer';

const Card = styled.div<{ variant: number }>`
  background: ${props => props.variant === 1 ? '#fff' : 
               props.variant === 2 ? '#f8f7fa' :
               props.variant === 3 ? '#fff5f2' :
               props.variant === 4 ? '#f2f8ff' :
               props.variant === 5 ? '#fff8e6' : '#f5fff2'};
  border-radius: ${props => props.variant === 1 ? '8px' :
                          props.variant === 2 ? '12px' :
                          props.variant === 3 ? '16px' :
                          props.variant === 4 ? '8px 8px 20px 20px' :
                          props.variant === 5 ? '20px 20px 8px 8px' : '16px'};
  overflow: hidden;
  box-shadow: ${props => props.variant === 1 ? '0 2px 8px rgba(0, 0, 0, 0.1)' :
                        props.variant === 2 ? '0 4px 12px rgba(0, 0, 0, 0.08)' :
                        props.variant === 3 ? '0 6px 16px rgba(0, 0, 0, 0.06)' :
                        props.variant === 4 ? '0 8px 20px rgba(0, 0, 0, 0.04)' :
                        props.variant === 5 ? '0 10px 24px rgba(0, 0, 0, 0.02)' : '0 12px 28px rgba(0, 0, 0, 0.05)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.variant === 1 ? '0 12px 24px rgba(0, 0, 0, 0.15)' :
                          props.variant === 2 ? '0 14px 28px rgba(0, 0, 0, 0.12)' :
                          props.variant === 3 ? '0 16px 32px rgba(0, 0, 0, 0.1)' :
                          props.variant === 4 ? '0 18px 36px rgba(0, 0, 0, 0.08)' :
                          props.variant === 5 ? '0 20px 40px rgba(0, 0, 0, 0.06)' : '0 22px 44px rgba(0, 0, 0, 0.09)'};
  }
`;

const EventImage = styled.div<{ height?: string }>`
  height: ${props => props.height || '200px'};
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
  }
`;

const EventContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #1e0a3c;
    font-weight: 600;
  }
`;

const EventMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6f7287;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
`;

const BookButton = styled.button<{ variant: number }>`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${props => props.variant === 1 ? '#f05537' :
                        props.variant === 2 ? '#7f7fd5' :
                        props.variant === 3 ? '#ff9a9e' :
                        props.variant === 4 ? '#a8edea' :
                        props.variant === 5 ? '#f6d365' : '#84fab0'};
  color: ${props => props.variant === 1 || props.variant === 3 || props.variant === 5 ? '#fff' : '#1e0a3c'};
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

interface EventCardProps {
  event: Event;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function EventCard({ event, timeLeft }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card variant={event.variant}>
      <EventImage 
        style={{ backgroundImage: `url(${event.image})` }}
        height={event.imageHeight}
      />
      <EventContent>
        <h3>{event.title}</h3>
        <EventMeta>
          <Calendar size={16} />
          {new Date(event.date).toLocaleDateString()}
        </EventMeta>
        <EventMeta>
          <Clock size={16} />
          {event.time}
        </EventMeta>
        <EventMeta>
          <MapPin size={16} />
          {event.location}
        </EventMeta>
        <CountdownTimer variant={event.variant} timeLeft={timeLeft} />
        <BookButton variant={event.variant} onClick={() => setIsModalOpen(true)}>
          <Ticket size={20} />
          Book Tickets
        </BookButton>
      </EventContent>
      <BookingModal 
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Card>
  );
}