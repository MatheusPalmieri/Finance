import React from "react";
import { CardItem } from "../CardItem";
import * as S from "./style";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

export const Card = ({ income, expense, total }) => {
  return (
    <S.Container>
      <CardItem title="Entradas" Icon={FaRegArrowAltCircleUp} color="#0f8" value={income} />
      <CardItem title="Saídas" Icon={FaRegArrowAltCircleDown} color="#f02" value={expense} />
      <CardItem title="Total" Icon={FaDollarSign} color="#fae717" value={total} />
    </S.Container>
  );
};
