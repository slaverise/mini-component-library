import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: (14/16),
    borderThickness: 1,
    iconSize: 16,
    separation: 24,
    padding: 4
  },

  large: {
    fontSize: (18/16),
    borderThickness: 2,
    iconSize: 24,
    separation: 28,
    padding: 8
  }
};

const IconInput = ({
  label,
  icon,
  width = 500,
  size,
  placeholder,
}) => {
  const styles = SIZES[size]

  return <Wrapper style={{
      '--component-width': width+"px"
    }}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <NativeTextbox
      style={{
        "--font-size": styles.fontSize+"rem",
        "--border-thickness": styles.borderThickness+"px",
        "--padding": styles.padding+"px",
        "--separation": styles.separation+"px"
      }}
      width={width}
      type="text" 
      name="textbox"
      placeholder={placeholder} 
    />
      <StyledIcon id={icon} style={{
        "--size": styles.iconSize+"px"
      }} size={styles.iconSize} />
  </Wrapper>
};

const Wrapper = styled.label`
  position: relative;
  width: var(--component-width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
    background:pink;
  }
`
   
const NativeTextbox  = styled.input`
  width: ${p=>p.width}px;
  border: none;  
  font-size: var(--font-size);
  border-bottom: var(--border-thickness) solid;  
  padding: var(--padding) 0;
  padding-left: var(--separation);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px; 

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

const StyledIcon = styled(Icon)` 
  width: var(--size);
  height: var(--size);
  color:inherit;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  margin:auto;  
`

export default IconInput;

