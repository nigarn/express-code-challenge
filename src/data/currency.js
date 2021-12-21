import EUR from "svg/flags/EUR.svg";
import GBP from "svg/flags/GBP.svg";
import RUR from "svg/flags/RUR.svg";
import YTL from "svg/flags/YTL.svg";
import USD from "svg/flags/USD.svg";
import dot from "svg/icons/dot.svg";
import increaseArrow from "svg/icons/increaseArrow.svg";
import decreaseArrow from "svg/icons/decreaseArrow.svg";

export const currency = [
  {
    name: "AZN",
    src: null,
    buyPrice: null,
    sellPrice: null,
    incIcon: null,
    decIcon: null,
  },
  {
    name: "USD",
    src: USD,
    buyPrice: 1.69,
    sellPrice: 1.69,
    incIcon: dot,
    decIcon: dot,
  },
  {
    name: "RUR",
    src: RUR,
    buyPrice: 2.013,
    sellPrice: 2.013,
    incIcon: increaseArrow,
    decIcon: decreaseArrow,
  },
  {
    name: "GBP",
    src: GBP,
    buyPrice: 0.0263,
    sellPrice: 0.0263,
    incIcon: dot,
    decIcon: dot,
  },
  {
    name: "YTL",
    src: YTL,
    buyPrice: 2.27,
    sellPrice: 2.27,
    incIcon: increaseArrow,
    decIcon: decreaseArrow,
  },
  {
    name: "EUR",
    src: EUR,
    buyPrice: 2.27,
    sellPrice: 2.27,
    incIcon: increaseArrow,
    decIcon: decreaseArrow,
  },
];
