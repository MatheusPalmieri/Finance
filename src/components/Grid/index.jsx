import React from "react";
import { GridItem } from "../GridItem";
import * as S from "./style";

export const Grid = ({ items = [], setItems }) => {
  const onDelete = (ID) => {
    const newArray = items.filter((transaction) => transaction.id !== ID);

    setItems(newArray);

    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th width={40}>Description</S.Th>
          <S.Th width={40}>Value</S.Th>
          <S.Th width={10} alignCenter>
            Type
          </S.Th>
          <S.Th width={10} alignCenter>
            Action
          </S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {items.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </S.Tbody>
    </S.Table>
  );
};
