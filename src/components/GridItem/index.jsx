import React from "react";
import * as S from "./style";

import {
  FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaTrash
} from "react-icons/fa";

export const GridItem = ({ item, onDelete }) => {
  return (
    <S.Tr>
      <S.Td>{item.description}</S.Td>
      <S.Td>{item.amount}</S.Td>
      <S.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="#f00" />
        ) : (
          <FaRegArrowAltCircleUp color="#0f8" />
        )}
      </S.Td>
      <S.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </S.Td>
    </S.Tr>
  );
};
