import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: 100vh;
  position: relative;
`

export const UserInfo = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1000;
  
  span {
    color: #1e293b;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
  }
`

export const SignOutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background: #dc2626;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`