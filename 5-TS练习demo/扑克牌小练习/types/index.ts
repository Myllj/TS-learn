/*
 * @Descripttion: 
 * @version: 
 * @Author: llj
 * @email: 
 * @Date: 2026-05-13 14:17:07
 * @LastEditors: llj
 * @LastEditTime: 2026-05-13 14:51:48
 */
//导入Color和Mark枚举类型
import { Color, Mark } from "../enums/index.ts";

export type NormalCard = {
  color: Color;
  mark: Mark; 
};

export type Deck = NormalCard[];
