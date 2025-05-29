import styled from 'styled-components'

export const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    color: white;
    font-size: 3rem;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    color: rgba(255,255,255,0.9);
    font-size: 1.2rem;
  }
`

export const ControlsContainer = styled.div`
  margin-bottom: 2rem;
`