/*
 * @Descripttion: 
 * @version: 
 * @Author: llj
 * @email: 
 * @Date: 2026-05-13 13:44:53
 * @LastEditors: llj
 * @LastEditTime: 2026-05-13 13:46:02
 */
// 扑克牌花色的类型
type Color = "♥" | "♠" | "♦" | "♣";

// 一张扑克牌的类型
type NormalCard = {
  color: Color;
  mark: number;
};

// 一副扑克牌的类型
type Deck = NormalCard[];

/**
 * 创建一副扑克牌
 */
const createDeck = (): Deck => {
  const deck: Deck = [];
  for (let i = 1; i <= 13; i++) {
    deck.push({
      mark: i,
      color: "♠",
    });
    deck.push({
      mark: i,
      color: "♣",
    });
    deck.push({
      mark: i,
      color: "♥",
    });
    deck.push({
      mark: i,
      color: "♦",
    });
  }
  return deck;
};

/**
 * 打印扑克牌
 */
const printDeck = (deck: Deck) => {
  let result = "\n";
  deck.forEach((card, i) => {
    let str = card.color;
    if (card.mark <= 10) {
      str += card.mark;
    } else if (card.mark === 11) {
      str += "J";
    } else if (card.mark === 12) {
      str += "Q";
    } else {
      str += "K";
    }
    result += str + "\t";
    if ((i + 1) % 6 === 0) {
      result += "\n";
    }
  });
  console.log(result);
};

const deck = createDeck();
printDeck(deck);
