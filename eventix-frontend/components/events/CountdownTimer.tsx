'use client';

import styled from 'styled-components';

const TimerContainer = styled.div<{ variant: number }>`
  background: ${props => props.variant === 1 ? 'linear-gradient(135deg, #ff4e50, #f9d423)' :
                        props.variant === 2 ? 'linear-gradient(135deg, #7f7fd5, #86a8e7, #91eae4)' :
                        props.variant === 3 ? 'linear-gradient(135deg, #ff9a9e, #fad0c4)' :
                        props.variant === 4 ? 'linear-gradient(135deg, #a8edea, #fed6e3)' :
                        props.variant === 5 ? 'linear-gradient(135deg, #f6d365, #fda085)' : 'linear-gradient(135deg, #84fab0, #8fd3f4)'};
  padding: 1.25rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  font-weight: 600;
  color: ${props => props.variant === 1 || props.variant === 3 || props.variant === 5 ? '#fff' : '#1e0a3c'};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;

  .time-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .value {
      font-size: 1.5rem;
      font-weight: 700;
    }
    
    .label {
      font-size: 0.75rem;
      opacity: 0.9;
      text-transform: uppercase;
    }
  }
`;

interface CountdownTimerProps {
  variant: number;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function CountdownTimer({ variant, timeLeft }: CountdownTimerProps) {
  return (
    <TimerContainer variant={variant}>
      <div className="time-unit">
        <span className="value">{timeLeft.days}</span>
        <span className="label">Days</span>
      </div>
      <div className="time-unit">
        <span className="value">{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <div className="time-unit">
        <span className="value">{timeLeft.minutes}</span>
        <span className="label">Mins</span>
      </div>
      <div className="time-unit">
        <span className="value">{timeLeft.seconds}</span>
        <span className="label">Secs</span>
      </div>
    </TimerContainer>
  );
}