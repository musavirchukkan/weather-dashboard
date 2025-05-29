import styled from 'styled-components'

export const WeatherCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
  animation: slideIn 0.5s ease-out;
  
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

export const WeatherHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`

export const CityInfo = styled.div`
  h2 {
    font-size: 2rem;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    color: #64748b;
    margin-top: 0.25rem;
  }
`

export const LastUpdate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
`

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.$isSaved ? '#ef4444' : '#10b981'};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: ${props => props.$isSaved ? '#dc2626' : '#059669'};
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`

export const MainWeatherInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const TemperatureSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  img {
    width: 120px;
    height: 120px;
    
    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
`

export const Temperature = styled.div`
  h3 {
    font-size: 3.5rem;
    color: #1e293b;
    font-weight: 700;
    line-height: 1;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    color: #1e293b;
    margin-top: 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  span {
    color: #64748b;
    font-size: 0.875rem;
    text-transform: capitalize;
  }
`

export const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const DetailCard = styled.div`
  background: #f8fafc;
  padding: 1.25rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s;
  
  &:hover {
    background: #f1f5f9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  svg {
    color: #667eea;
    flex-shrink: 0;
  }
`

export const DetailInfo = styled.div`
  flex: 1;
  
  h4 {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 1.25rem;
    color: #1e293b;
    font-weight: 600;
  }
  
  span {
    font-size: 0.75rem;
    color: #94a3b8;
  }
`

export const SunInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #64748b;
    
    svg {
      color: #f59e0b;
    }
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    font-size: 0.875rem;
  }
`