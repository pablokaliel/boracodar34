import styled from "styled-components";
import Select from "react-select";

import cover from "../../assets/cover.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 770px) {
    background-size: initial;
  }
`;

export const Swapper = styled.div`
  margin-top: 88px;
  width: 720px;

  @media (max-width: 770px) {
    width: 100%;
    padding: 0px 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }
`;

export const DivItems = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 12px;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .divide {
    display: flex;
    align-items: flex-end;

    gap: 12px;

    @media (max-width: 770px) {
      width: 100%;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 8px;
  flex: 1 0 0;

  @media (max-width: 770px) {
    width: 100%;
  }

  label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.36px;
  }

  input {
    display: flex;
    align-items: center;
    align-self: stretch;

    padding: 12px;
    gap: 8px;

    border-radius: 6px;
    border: 1px solid var(--colorbase-gray-300);
    outline: none;

    background: var(--colorbase-gray-500);
    color: var(--colorbase-gray-200);

    @media (max-width: 770px) {
      width: 100%;
    }

    &:focus {
      border-radius: 6px;
      border: 1px solid var(--colorproduto-purple-light);
      background: var(--colorbase-gray-500);
    }
  }
`;

export const Quantify = styled.div`
  display: flex;
  gap: 8px;

  align-self: stretch;
  flex-direction: column;

  label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.36px;
  }

  .quantifydiv {
    display: flex;
  }

  input {
    display: flex;
    align-items: center;

    height: 100%;
    width: 79px;

    @media (max-width: 770px) {
      width: 70px;
    }

    padding: 12px;

    background: var(--colorbase-gray-500);

    border: 0;
    outline: none;
    border-radius: 6px 0px 0px 6px;

    border: 1px solid var(--colorbase-gray-300);
    color: var(--colorbase-gray-200);

    &:focus {
      border: 1px solid var(--colorproduto-purple-light);
      background: var(--colorbase-gray-500);
    }
  }
`;

export const UnitSelect = styled.select`
  border-radius: 0px 6px 6px 0px;
  border: 1px solid var(--colorbase-gray-300);

  color: var(--colorbase-gray-200);

  display: flex;
  align-items: center;

  width: 72px;

  padding: 12px;
  gap: 8px;

  background: var(--colorbase-gray-400);

  option {
    background: var(--colorbase-gray-400);
    color: var(--colorbase-gray-200);

    &:hover {
      background: var(--colorbase-gray-500);
    }

    &:checked {
      background: #252529;
    }
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 168px;

  @media (max-width: 770px) {
    flex: 1 0 0;
    /* width:138px; */
  }

  gap: 8px;
  flex-shrink: 0;

  label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.36px;
  }
`;

export const SelectItens = styled(Select)`
  display: inline-block;
  align-items: center;
  align-self: stretch;

  height: 100%;

  gap: 8px;

  border-radius: 6px;
  border: 1px solid var(--colorbase-gray-300);

  background: var(--colorbase-gray-400);
  color: var(--colorbase-gray-200);

  &:focus {
    border-radius: 6px;
    border: 1px solid var(--colorproduto-purple-light);
    background: var(--colorbase-gray-500);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  gap: 6px;

  border-radius: 999px;
  border: 0;

  background: var(--colorproduto-purple);

  width: 40px;
  height: 40px;

  /* @media (max-width: 770px) {
    width: 30px;
    height:30px;
  } */

  transition: all 0.3s;

  &:hover {
    background: var(--colorproduto-purple-dark);
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 720px;

  gap: 12px;
  margin-top: 40px;
  position: relative;

  .modal {
    background: var(--colorbase-gray-400);
    padding: 12px;
    position: absolute;
    top: 0;
    right: -40%;
    border-radius: 8px;

    @media (max-width: 770px) {
      right: 0;
    }
  }

  .modal-content {
    p {
      margin-bottom: 8px;
    }
  }

  .modal-buttons {
    display: flex;
    justify-content: space-around;

    button {
      border-radius: 6px;
      background: var(--produto-purple, #7450ac);
      color: #fff;
      border: 0;
      padding: 12px;

      transition: all 0.3s;

      &:hover {
        background: var(--colorproduto-purple-dark);
      }
    }
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const DivItem = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 8px;
  border: 1px solid var(--colorbase-gray-300);
  opacity: ${(props) => (props.done ? 0.5 : 1)};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  span {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => (props.done ? "#afabb5" : "#faf8fd")};
    text-decoration-line: ${(props) => (props.done ? "line-through" : "none")};
  }

  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: var(--colorbase-gray-200);
    text-decoration-line: ${(props) => (props.done ? "line-through" : "none")};
  }

  input {
    width: 16px;
    height: 16px;

    flex-shrink: 0;

    border-radius: 2px;
    border: 1px solid var(--colorproduto-purple-light);

    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;

    background-color: transparent;

    transition: all 0.3s;

    &:hover {
      background-color: var(--colorproduto-purple-light);
    }

    &:checked {
      background-color: var(--colorfeedback-success);
      border: 0;
    }
  }
`;

export const DivCategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  padding: 16px;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    border: 0;
    padding: 4px;
    transition: all 0.3s;
    background: transparent;
    &:hover {
      background: var(--colorbase-gray-400);
      scale: 1.1;
    }
  }

  .categoryItem {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 16px;
    gap: 6px;

    border-radius: 999px;

    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 6px;
    }
  }
`;
