import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import UseWindowSize from '../src/components/UseWindowSize';

const GlobalStyle = createGlobalStyle`
  // Reset
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Ubuntu', sans-serif;
    // Branco no começo
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.primary}
  }
  p, span, strong {
    background: transparent;
    transition: background 3s ease;
  }
  .highlight {
    background: ${(props) => props.theme.colors.highlight};
    padding: 1px 1px 2px;
    line-height: 1.4;
    transition: all 3s ease;
  }
  font-family: 'Ubuntu', sans-serif;
  .relative {
    width: fit-content;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 500px;
    @media screen and (max-width: 1024px) {
      height: 540px;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }
  .mt-15 {
    margin-top: 15px;
  }
  ul {
    padding-left: 20px;
    li {
      margin-bottom: 10px;
      padding-left: 0px;
    }
  }
  .source {
    font-style:italic;
    font-size: 13px;
    a {
      padding-left: 5px;
      color: ${({ theme }) => theme.colors.primary};
      &:hover {
        transition: 0.3s ease-in-out;
        color: ${({ theme }) => theme.colors.quaternary};
      }
    }
    @media screen and (max-width: 1215px) {
      font-size: 12px !important;
    }
  }
  .react-3d-carousel{
    height: 300px !important;
  }
  .slider-single-content {
    p{
      background-color: rgb(254, 254, 254, 1);
      margin: -4px 0;
      padding: 13px;
    }
  }
  .slider-container{
    width: 100%;
    margin: -0 auto 0 -50%;
    box-shadow: 0px 5px 13px rgb(0 0 0 / 26%);
  }
  .slider-single:not(.active) {
    p {
      display: none;
    }
  }
  i.fa-arrow-left, i.fa-arrow-right {
    color: yellow;
  }
  .slider-left div {
    border:0 !important;
  }
  .slider-right div {
    border:0 !important;
  }
  .slider-single-content div {
    height: 180px;
  }
  .slider-single-content div p{
    height: fit-content;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700" rel="stylesheet"/>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
      </Head>
      <ThemeProvider theme={theme} windowSize={UseWindowSize()}>
        <GlobalStyle />
        {/* GlobalStyle dentro do theme para que o db json seja lido em todos os componentes */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
