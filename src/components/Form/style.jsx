import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 20px auto;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border-radius: 1px solid #ccc;
`;

export const Radio = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButton = styled.div`
  background-color: #ccc;
  margin: 0 10px;
  padding: 5px 0;
  width: 100px;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  margin-top: 0;
  margin-right: 5px;
  accent-color: #000;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: #008080;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
