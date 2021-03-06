import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface FromProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FromProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 1px solid #fff;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    border-right: 0;

    &::placeholder {
      color: #9999;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border-radius: 0 5px 5px 0;
    background: #04d361;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${darken('0.02', '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3a3a3a;
      }

      p {
        font-size: 18px;
        color: #9999;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #9999;
      font-size: 20px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
