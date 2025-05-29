import styled from 'styled-components'

export const SearchContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  position: relative;
`

export const SearchForm = styled.form`
  margin-bottom: 1rem;
`

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const StyledInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  @media (max-width: 768px) {
    padding-left: 3rem;
  }
`

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  
  @media (max-width: 768px) {
    top: 1.5rem;
  }
`

export const SearchButton = styled.button`
  padding: 0.75rem 2rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  
  &:hover {
    background: #5a67d8;
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  
  &:hover:not(:disabled) {
    background: #667eea;
    color: white;
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    flex-shrink: 0;
  }
`

export const AuthButton = styled(ActionButton)`
  background: #f59e0b;
  border-color: #f59e0b;
  color: white;
  
  &:hover {
    background: #d97706;
    border-color: #d97706;
  }
`

export const SavedCitiesDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  padding: 1rem;
  z-index: 100;
  max-height: 300px;
  overflow-y: auto;
  
  h4 {
    margin: 0 0 0.75rem 0;
    color: #64748b;
    font-size: 0.875rem;
    font-weight: 600;
  }
`

export const CityItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  margin: 0 -0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #f8fafc;
  }
  
  span {
    color: #1e293b;
    font-weight: 500;
  }
  
  button {
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    
    &:hover {
      background: #dc2626;
      transform: scale(1.1);
    }
  }
`