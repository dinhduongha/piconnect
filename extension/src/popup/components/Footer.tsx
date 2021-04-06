import React from "react";
import styled from "styled-components";

import { COLOR_PALETTE, FONT_WEIGHT } from "popup/constants/styles";

/*
import { RetinaImg } from "popup/basics/Images";

import wepiLogo from "popup/assets/stellar-logo.png";
import wepiLogo2x from "popup/assets/stellar-logo.png";
import accountViewerLogo from "popup/assets/logo-av.png";
import accountViewerLogo2x from "popup/assets/logo-av@2x.png";
import laboratoryLogo from "popup/assets/logo-laboratory.png";
import laboratoryLogo2x from "popup/assets/logo-laboratory@2x.png";
import stellarTermLogo from "popup/assets/logo-stellarterm.png";
import stellarTermLogo2x from "popup/assets/logo-stellarterm@2x.png";
*/

const FooterEl = styled.footer`
  box-sizing: border-box;
  background: ${COLOR_PALETTE.white};
  height: 7.75rem;
  padding: 0.9375rem 2rem;
  text-align: center;
`;

const FooterHeaderEl = styled.h1`
  color: ${COLOR_PALETTE.secondaryText};
  font-size: 0.8125rem;
  font-weight: ${FONT_WEIGHT.light};
  margin: 0;
`;

const FooterListEl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 1rem 0;
`;

const FooterListItemEl = styled.li`
  font-size: 0.75rem;
  display: inline-block;
`;

export const Footer = () => (
  <FooterEl>
    <FooterHeaderEl>Use PiConnect with</FooterHeaderEl>
    <FooterListEl>
      <FooterListItemEl>
        <a href="https://wepi.vn" target="_blank" rel="noreferrer">
          WePi.vn
        </a>
      </FooterListItemEl>
      <FooterListItemEl>
        <a href="https://piconnect.org" target="_blank" rel="noreferrer">
          PiConnect.org
        </a>
      </FooterListItemEl>
    </FooterListEl>
  </FooterEl>
);
