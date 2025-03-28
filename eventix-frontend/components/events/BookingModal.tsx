'use client';

import styled from 'styled-components';
import { X, Minus, Plus, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Event } from '@/types/event';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`;

const ModalContent = styled.div`
  padding: 1.5rem;
`;

const EventInfo = styled.div`
  margin-bottom: 2rem;
  
  .date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #6f7287;
    margin-top: 0.5rem;
  }
`;

const TicketSelector = styled.div`
  background: #f8f7fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const QuantityButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f5f5f5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BookButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #f05537;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #d64426;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
`;

interface BookingModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ event, isOpen, onClose }: BookingModalProps) {
  const [quantity, setQuantity] = useState(1);
  const price = 49.99; // This would normally come from the event data

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h2>Book Tickets</h2>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          <EventInfo>
            <h3>{event.title}</h3>
            <div className="date">
              <Calendar size={16} />
              {new Date(event.date).toLocaleDateString()} at {event.time}
            </div>
          </EventInfo>

          <TicketSelector>
            <h3>General Admission</h3>
            <div>Price: ${price.toFixed(2)}</div>
            <QuantitySelector>
              <QuantityButton 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </QuantityButton>
              <span>{quantity}</span>
              <QuantityButton 
                onClick={() => setQuantity(q => Math.min(10, q + 1))}
                disabled={quantity >= 10}
              >
                <Plus size={16} />
              </QuantityButton>
            </QuantitySelector>
          </TicketSelector>

          <Total>
            <span>Total</span>
            <span>${(price * quantity).toFixed(2)}</span>
          </Total>

          <BookButton onClick={() => alert('Booking functionality would go here!')}>
            Complete Booking
          </BookButton>
        </ModalContent>
      </Modal>
    </Overlay>
  );
}