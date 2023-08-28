import { LuMilk, LuBeef, LuApple, LuCarrot, LuSandwich } from "react-icons/lu";

const options = [
  {
    value: "padaria",
    label: (
      <>
        <LuSandwich size={16} color="#BB9F3A" /> Padaria
      </>
    ),
    color: "#211e12",
    colorlabel: "#BB9F3A",
  },
  {
    value: "legume",
    label: (
      <>
        <LuCarrot size={16} color="#8CAD51" /> Legume
      </>
    ),
    color: "#1c2015",
    colorlabel: "#8CAD51",
  },
  {
    value: "carne",
    label: (
      <>
        <LuBeef size={16} color="#DB5BBF" /> Carne
      </>
    ),
    color: "#251622",
    colorlabel: "#DB5BBF",
  },
  {
    value: "fruta",
    label: (
      <>
        <LuApple size={16} color="#E07B67" /> Fruta
      </>
    ),
    color: "#261a17",
    colorlabel: "#E07B67",
  },
  {
    value: "bebida",
    label: (
      <>
        <LuMilk size={16} color="#7B94CB" /> Bebida
      </>
    ),
    color: "#1a1d23",
    colorlabel: "#7B94CB",
  },
];

export default options;
