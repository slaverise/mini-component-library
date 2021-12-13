import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect onChange={onChange}>
        {children}
      </NativeSelect>
      <Replacement>
         {displayedValue}
        <IconWrapper id="chevron-down"></IconWrapper>
      </Replacement>
    </Wrapper>
  );
};  


const Wrapper = styled.div`
  width: max-content;
  border: none;
  position: relative;
  isolation: isolate;
`

const NativeSelect = styled.select`
  opacity: 0;
  z-index: 1;
  position:absolute;
  width: 100%;
  height: 100%;
`



const Replacement = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray500};
  padding: 12px 16px;

  font-size: ${16/16}rem;

  padding-right: 52px;

  width: max-content;

  border-radius: 8px;

  ${NativeSelect}:focus+& {
    outline: auto 1px ${COLORS.primary};
  }

  ${NativeSelect}:hover+& {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled(Icon)`
  position: absolute;
  margin: auto;
  top:0;
  bottom:0;
  height: 24px;
  right: 16px;
  display: inline-block;
  vertical-align: middle;
  margin-left: -36px;

`
export default Select;
