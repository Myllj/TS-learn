/*
 * @Descripttion: 
 * @version: 
 * @Author: llj
 * @email: 
 * @Date: 2026-05-13 14:34:21
 * @LastEditors: llj
 * @LastEditTime: 2026-05-13 14:37:33
 */
import { createDeck, printDeck } from "./utils/index.ts";
import { Color, Mark } from "./enums/index.ts";
// import { Deck } from "./types/index.ts";



const deck = createDeck();
printDeck(deck);
console.log(123,Object.values(Color))
console.log(Object.values(Mark));

