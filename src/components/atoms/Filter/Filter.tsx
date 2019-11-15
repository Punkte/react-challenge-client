import React, { useState } from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';
import { FilterModel } from 'models/Filter.model';

interface Props {
  title: string;
  filter: FilterModel;
  handleOnChange(criteria: string): void;
  resetFilters(): void;
}

const StyledWrapper = styled.div``;

const StyledHeader = styled.div`
  display: flex;
  border-bottom: 2px solid #79DCBC;
  padding: 10px 0;
  position: relative;
`;

const StyledSVG = css`
  fill: #4E4E56;
`;

const StyledSVGShow = styled.svg`
  ${StyledSVG}
  width: 7px;
  height: 7px;
  align-self: center;
`;

const StyledSVGShowWrapper = styled.div`
  cursor: pointer;
  padding: 3px;
`;

const StyledSVGReset = styled.svg`
  ${StyledSVG}
  width: 15px;
  height: 15px;
  align-self: center;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const StyledTitle = styled.h3`
  color: #4E4E56;
  margin: 0 0 0 12px;
  font-weight: 400;
`;

const StyledCriterias = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledCriteria = styled.li`
  display: flex;
  padding: 7px 0;
  position: relative;
`;

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
  background-color: #F0F0F0;
  border-radius: 4px;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`;

const StyledSVGCheck = styled.svg`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 15px;
  left: 9px;
  pointer-events: none;
`;

const StyledLabel = styled.label`
  color: #4E4E56;
  font-size: 14px;
  line-height: 24px;
  padding-left: 10px;
`;

const Filter: React.FC<Props> = (props: Props) => {
  const [state, setState] = useState({
    isOpen: true
  })

  const getFormattedTitle = () => {
    return props.title.slice(0, 1).toUpperCase() + props.title.slice(1)
  }

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledSVGShowWrapper onClick={() => setState({ isOpen: !state.isOpen })}>
          {
            state.isOpen
              ? <StyledSVGShow width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 1L7.20833 1" stroke="#27AC8B"/></StyledSVGShow>
              : <StyledSVGShow width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 4L7.20833 4" stroke="#27AC8B"/><path d="M3.854 7.354L3.854 0.64567" stroke="#27AC8B"/></StyledSVGShow>
          }
        </StyledSVGShowWrapper>
        <StyledTitle>{getFormattedTitle()}</StyledTitle>
        <StyledSVGReset onClick={props.resetFilters} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM11.615 11.807C12.5708 10.8975 13.1491 9.66157 13.2349 8.34503C13.3207 7.02848 12.9077 5.7279 12.078 4.70209C11.2483 3.67629 10.0628 3.00047 8.75743 2.80913C7.45205 2.61779 6.12247 2.92496 5.0333 3.6695C3.94412 4.41405 3.1752 5.54138 2.87955 6.82717C2.58391 8.11295 2.78321 9.46291 3.43779 10.6084C4.09238 11.7539 5.15426 12.611 6.41212 13.009C7.66998 13.407 9.03159 13.3169 10.226 12.7565L9.49475 11.4403C8.75442 11.762 7.93001 11.8363 7.14409 11.652C6.35816 11.4678 5.65267 11.0349 5.13247 10.4176C4.61228 9.80032 4.30515 9.03167 4.25675 8.22589C4.20834 7.4201 4.42125 6.62021 4.86381 5.94511C5.30637 5.27 5.95497 4.75573 6.71319 4.47873C7.47141 4.20173 8.29878 4.17678 9.0723 4.40761C9.84583 4.63844 10.5242 5.11271 11.0067 5.75993C11.4891 6.40715 11.7498 7.19277 11.75 8H9.5L11.615 11.807Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="-2.37234" y1="8.79787" x2="15.0612" y2="9.31649" gradientUnits="userSpaceOnUse"><stop stopColor="#79DCBC"/><stop offset="1" stopColor="#2FB992"/></linearGradient></defs></StyledSVGReset>
      </StyledHeader>
      {
        state.isOpen && (
          <StyledCriterias>
            {
              Object.keys(props.filter).map((criteria, index) => (
                <StyledCriteria key={index}>
                  <StyledInput value={props.filter[criteria].toString()} type="checkbox" onChange={() => props.handleOnChange(criteria)}></StyledInput>
                  {props.filter[criteria] ? <StyledSVGCheck width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.49373 0.258435C8.83831 -0.0861451 9.39698 -0.0861451 9.74156 0.258435C10.0861 0.603015 10.0861 1.16169 9.74156 1.50627L4.44745 6.80039C4.10287 7.14497 3.54419 7.14497 3.19961 6.80039L0.258435 3.85921C-0.0861451 3.51463 -0.0861451 2.95596 0.258435 2.61138C0.603015 2.2668 1.16169 2.2668 1.50627 2.61138L3.82353 4.92863L8.49373 0.258435Z" fill="#1A051D"/></StyledSVGCheck> : ''}
                  <StyledLabel>{criteria}</StyledLabel>
                </StyledCriteria>
              ))
            }
          </StyledCriterias>
        )
      }
    </StyledWrapper>
  );
};

export default Filter
