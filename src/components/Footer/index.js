import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="">
        <img src="../../assets/img/logo.png" alt="Logo Alura" />
      </a>
      <p>
        o melhor servico de streaming 
        {' '}
        <a href="/">
          JrFlix
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;