import React from "react";
import * as S from "./style";

export const CardItem = ({title, Icon, color, value}) => {
  return (
    <S.Container>
      <S.Header>
        <S.TitleCard>{title}</S.TitleCard>
        <Icon color={color} />
      </S.Header>
      <S.Total>{value}</S.Total>
    </S.Container>
  );
};
