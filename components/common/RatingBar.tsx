"use client";

import React from "react";

type RatingBarProps = {
  value: number; // 0〜10の数値
  max?: number; // デフォルト10
  filledChar?: string; // デフォルト：■
  emptyChar?: string; // デフォルト：□
};

const RatingBar: React.FC<RatingBarProps> = ({
  value,
  max = 10,
  filledChar = "■",
  emptyChar = "□",
}) => {
  const filled = filledChar.repeat(value);
  const empty = emptyChar.repeat(max - value);

  return (
    <div>
      {filled}
      {empty}
    </div>
  );
};

export default RatingBar;
