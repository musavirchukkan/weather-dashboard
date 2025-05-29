import styled from 'styled-components'

export const ForecastCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
  animation: slideIn 0.5s ease-out 0.2s both;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const ForecastSection = styled.div`
  h3 {
    font-size: 1.5rem;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }
`

export const ForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const DayCard = styled.div`
  background: #f8fafc;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`

export const DayHeader = styled.div`
  text-align: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
  
  h4 {
    font-size: 1.1rem;
    color: #1e293b;
    margin-bottom: 0.25rem;
  }
  
  span {
    font-size: 0.875rem;
    color: #64748b;
  }
`

export const TempRange = styled.div`
  font-size: 0.875rem;
  color: #667eea;
  font-weight: 600;
  margin-top: 0.5rem;
`

export const ForecastItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: #e2e8f0;
  }
  
  img {
    width: 40px;
    height: 40px;
  }
`

export const TimeSlot = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  min-width: 60px;
`

export const WeatherInfo = styled.div`
  flex: 1;
  text-align: right;
  
  .temp {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
  }
  
  .desc {
    font-size: 0.75rem;
    color: #64748b;
  }
`