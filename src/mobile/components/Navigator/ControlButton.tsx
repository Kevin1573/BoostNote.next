import React from 'react'
import styled from '../../../lib/styled'

const StyledButton = styled.button`
  position: relative;
  right: 9px;
  width: 30px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-radius: 2px;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
  vertical-align: middle;
  color: ${({ theme }) => theme.sideNavLabelColor};
  &:hover,
  &:active,
  &:focus {
    box-shadow: none;
  }
  + button {
    top: -1px;
  }
`

interface ControlButtonProps {
  icon: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
}

const ControlButton = ({ icon, onClick }: ControlButtonProps) => {
  return <StyledButton onClick={onClick}>{icon}</StyledButton>
}

export default ControlButton
