import React from 'react';
import styled from 'styled-components';
import logoF from 'img/logo_white.png'

const FooterWrap = styled.footer`
    padding:66px;
    color:#fff;
    line-height:1;
    text-align:right;
    background-color:#2D2E43;
    @media screen and (max-width: 768px){
        text-align:center;
    }
`;
const FooterP = styled.footer`
    display:inline-block;
    width:106px;
    height:46px;
    font-size:0;
    background:url(${logoF}) 0 0 no-repeat;
    background-size:cover;
`;



const Footer = () => {
    return (
        <FooterWrap id="footer">
            <FooterP>footer</FooterP>
        </FooterWrap>
    );
};

export default Footer;