/*
 * @Descripttion: 
 * @version: 
 * @Author: llj
 * @email: 
 * @Date: 2026-05-13 13:52:21
 * @LastEditors: llj
 * @LastEditTime: 2026-05-13 14:10:49
 */
//把这个文件作为单独模块，要不然会和index.ts中的类型冲突
export {}

// 扑克牌花色的类型
enum Color {
  heart = "♥",
  spade = "♠",
  club = "♣",
  diamond = "♦",
}

// 扑克牌数字的类型
enum Mark {
  A = "A",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10",
  eleven = "J",
  twelve = "Q",
  king = "K",
}

// 一张扑克牌的类型
type NormalCard = {
  color: Color;
  mark: Mark;
};

// 一副扑克牌的类型
type Deck = NormalCard[];

/**
 * 创建一副扑克牌
 */
const createDeck = (): Deck => {
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
const printDeck = (deck: Deck) => {
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

const deck = createDeck();
printDeck(deck);
console.log(123,Object.values(Color))