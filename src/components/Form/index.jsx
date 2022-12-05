import React, { useState } from "react";
import { Grid } from "../Grid";
import * as S from "./style";

export const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!description || !amount) {
      return alert("Informe a descrição e o valor!");
    } else if (amount < 0) {
      return alert("O valor tem que ser positivo!");
    }

    const transaction = {
      id: generateID(),
      description: description,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDescription("");
    setAmount("");
  };

  return (
    <>
      <S.Container>
        <S.InputContent>
          <S.Label>Description</S.Label>
          <S.Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </S.InputContent>
        <S.InputContent>
          <S.Label>Amount</S.Label>
          <S.Input
            type="number"
            min={0}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </S.InputContent>
        <S.Radio>
          <S.RadioButton>
            <S.RadioInput
              type="radio"
              id="rIncome"
              name="group01"
              defaultChecked
              onChange={() => setIsExpense(!isExpense)}
            />
            <S.Label htmlFor="rIncome">Entrada</S.Label>
          </S.RadioButton>
          <S.RadioButton>
            <S.RadioInput
              type="radio"
              id="rExpenses"
              name="group01"
              onChange={() => setIsExpense(!isExpense)}
            />
            <S.Label htmlFor="rExpenses">Saída</S.Label>
          </S.RadioButton>
        </S.Radio>
        <S.Button onClick={handleSave}>Adicionar</S.Button>
      </S.Container>

      {transactionsList.length > 0 && (
        <Grid items={transactionsList} setItems={setTransactionsList} />
      )}
    </>
  );
};
