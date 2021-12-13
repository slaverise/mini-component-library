/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": "8px"
  },
  medium: {
    "--height": "12px"
  },
  large: {
    "--padding": "4px",
    "--height": "24px"
  }
};

const ProgressBar = ({ value, size }) => {

  const counterValue = 100 - value;
  const styles = SIZES[size];

  return <Wrapper style={styles} >
      <Mask>
        <Bar value={value}  
          role="progressbar" 
          aria-valuenow={value} 
          aria-valuemin="0" 
          aria-valuemax="100">
        <VisuallyHidden>
            {value}
          </VisuallyHidden>
        </Bar>
      </Mask>
    </Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
`

const Mask = styled.div`
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  height: 100%;
`
const Bar = styled.div`
  width: ${p=>p.value}%;
  background-color: ${COLORS.primary};
  height: 100%;  
`

export default ProgressBar;
