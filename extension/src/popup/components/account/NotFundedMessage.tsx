import React from "react";
import styled from "styled-components";

import {
  COLOR_PALETTE,
  FONT_WEIGHT,
  ROUNDED_CORNERS,
} from "popup/constants/styles";

const NotFundedWrapperEl = styled.section`
  background: ${COLOR_PALETTE.white};
  border-radius: ${ROUNDED_CORNERS};
  margin: 0 1rem 1.2rem 1rem;
  padding: 1rem 1.25rem;

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    margin: 0;
  }
`;

const NotFundedHeaderEl = styled.h3`
  align-items: center;
  color: ${COLOR_PALETTE.primary};
  display: flex;
  font-size: 1rem;

  &:before {
    border: 2px solid ${COLOR_PALETTE.primary};
    border-radius: 5rem;
    content: "i";
    display: inline-block;
    font-size: 0.8rem;
    font-weight: ${FONT_WEIGHT.bold};
    margin-right: 0.625rem;
    padding: 0.0625rem;
    text-align: center;
    width: 1rem;
  }
`;

export const NotFundedMessage = () => (
  <NotFundedWrapperEl>
    <NotFundedHeaderEl>This PI address is not funded</NotFundedHeaderEl>
    <p>To create account, join Pi Network !</p>
    <p>
      <a href="https://minepi.com/bibupbin" rel="noreferrer" target="_blank">
        Click here to join !
      </a>
    </p>
  </NotFundedWrapperEl>
);
