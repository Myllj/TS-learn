export {}
//导入Color和Mark枚举类型
import { Color, Mark } from "../enums/index.ts";
//导入Deck类型
import type { Deck } from "../types/index.ts";
/**
 * 创建一副扑克牌
 */
export const createDeck = (): Deck => {
  const deck: Deck = [];
  const marks = Object.values(Mark);
  const colors = Object.values(Color);
  for (const m of marks) {
    for (const c of colors) {
      deck.push({
        color: c,
        mark: m,
      });
    }
  }
  return deck;
};

/**
 * 打印扑克牌
 */
export const printDeck = (deck: Deck) => {
  let result = "\n";
  deck.forEach((card, i) => {
    let str = card.color + card.mark;
    result += str + "\t";
    if ((i + 1) % 6 === 0) {
      result += "\n";
    }
  });
  console.log(result);
};
