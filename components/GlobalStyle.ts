import styled, { css } from 'styled-components';

export const GlobalCSS = css`
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue;
    line-height: 1.6;
    font-size: 16px;
  }
  #__next {
    position: relative;
    width: 100%;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .grow {
    flex-grow: 1;
  }
  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  span.MuiButton-label {
    font-family: 'Noto Sans KR', sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue;
  }
`;

export const NextSection = styled.section`
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #292929;
  h2,
  h4,
  a {
    margin: 0;
    text-align: center;
  }
  h2 {
    font-size: 1.56rem;
    font-weight: 500;
    color: white;
  }
  h4 {
    margin: 16px 0 48px 0;
    font-size: 1rem;
    font-weight: 400;
    color: white;
  }
  a {
    width: fit-content;
    display: flex;
    align-items: center;
    color: #007aff;
    svg,
    span {
      font-size: 0.875rem;
    }
    span {
      margin: 0 10px;
      font-weight: 700;
    }
  }
  &.desktop {
    padding: 80px 0;
    h2 {
      font-size: 2.5rem;
    }
    h4 {
      margin: 32px 0 80px 0;
      font-size: 1.5625rem;
    }
    a {
      svg,
      span {
        font-size: 1.5625rem;
      }
      span {
        margin: 0 10px;
        font-weight: 700;
      }
    }
  }
`;

export default { GlobalCSS, NextSection };
