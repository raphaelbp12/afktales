// components/prizes.ts
import { Item } from "./item";

export interface Option {
  id: number;
  price: number;
  mainPrize: Item;
  consolationPrize: Item;
}

export const options: Option[] = [
  {
    id: 1,
    price: 150000,
    mainPrize: { name: "Caixa de Consumíveis da Rifa A", chance: 0.03, src: "/images/icon_23932.png" },
    consolationPrize: { name: "Caixa de Consumíveis da Rifa B", chance: 0.97, src: "/images/icon_23932.png" },
  },
  {
    id: 2,
    price: 150000,
    mainPrize: { name: "Caixa de Consumíveis da Rifa C", chance: 0.03, src: "/images/icon_23932.png" },
    consolationPrize: { name: "Caixa de Consumíveis da Rifa D", chance: 0.97, src: "/images/icon_23932.png" },
  },
  {
    id: 3,
    price: 150000,
    mainPrize: { name: "Caixa de Consumíveis da Rifa E", chance: 0.03, src: "/images/icon_23932.png" },
    consolationPrize: { name: "Caixa de Consumíveis da Rifa F", chance: 0.97, src: "/images/icon_23932.png" },
  },
  {
    id: 4,
    price: 150000,
    mainPrize: { name: "10 Medicina Milagrosa", chance: 0.01, src: "/images/icon_12259.png" },
    consolationPrize: { name: "25 Pergaminho do Éden", chance: 0.99, src: "/images/icon_22999.png" },
  },
  {
    id: 5,
    price: 250000,
    mainPrize: { name: "3 Espelho Convexo", chance: 0.01, src: "/images/icon_12214.png" },
    consolationPrize: { name: "10 Amuleto de Ziegfried", chance: 0.99, src: "/images/icon_7621.png" },
  },
  {
    id: 6,
    price: 250000,
    mainPrize: { name: "Caixa de Auxiliares Dourados A", chance: 0.005, src: "/images/icon_14653.png" },
    consolationPrize: { name: "Caixa de Conversores Etéreos", chance: 0.995, src: "/images/icon_14659.png" },
  },
  {
    id: 7,
    price: 250000,
    mainPrize: { name: "Caixa de Consumíveis Dourados", chance: 0.005, src: "/images/icon_14653.png" },
    consolationPrize: { name: "10 Doce de Elvira", chance: 0.995, src: "/images/icon_23044.png" },
  },
  {
    id: 8,
    price: 300000,
    mainPrize: { name: "10 Poção de Guyak", chance: 0.01, src: "/images/icon_12710.png" },
    consolationPrize: { name: "20 Poção do Vento", chance: 0.99, src: "/images/icon_12016.png" },
  },
  {
    id: 9,
    price: 500000,
    mainPrize: { name: "20 Salada de Frutas Tropicais", chance: 0.02, src: "/images/icon_12247.png" },
    consolationPrize: { name: "2 Trouxinha de Comidas Especiais", chance: 0.98, src: "/images/icon_12111.png" },
  },
  {
    id: 10,
    price: 250000,
    mainPrize: { name: "Caixa de Munições Douradas", chance: 0.005, src: "/images/icon_14653.png" },
    consolationPrize: { name: "Caixa de Conversores Elementais", chance: 0.995, src: "/images/icon_17733.png" },
  },
  {
    id: 11,
    price: 250000,
    mainPrize: { name: "Caixa de Auxiliares Dourados B", chance: 0.005, src: "/images/icon_14653.png" },
    consolationPrize: { name: "Caixa de Suprimentos de Classe", chance: 0.995, src: "/images/icon_17734.png" },
  },
  {
    id: 12,
    price: 250000,
    mainPrize: { name: "Caixa de Ingredientes Dourados", chance: 0.005, src: "/images/icon_14653.png" },
    consolationPrize: { name: "Caixa de Xaropes", chance: 0.995, src: "/images/icon_14659.png" },
  },
  {
    id: 13,
    price: 250000,
    mainPrize: { name: "20 Poção Mental", chance: 0.03, src: "/images/icon_14600.png" },
    consolationPrize: { name: "10 Incenso Queimado", chance: 0.97, src: "/images/icon_102501.png" },
  },
  {
    id: 14,
    price: 250000,
    mainPrize: { name: "Pedra de Selamento Dourada", chance: 0.0003, src: "/images/pedraDeSelamentoDourada.png" },
    consolationPrize: { name: "Caixa de Consumíveis da Rifa G", chance: 0.9997, src: "/images/icon_23932.png" },
  },
];
