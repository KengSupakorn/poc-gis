export type PlotStatus = "available" | "sold" | "reserved";

export interface Plot {
  id: string;
  points: string; // SVG points string
  status: PlotStatus;
  number: string;
  name: string;
  label: { x: number; y: number };
}

export const plots: Plot[] = [
  {
    id: "1",
    points: "50,50 150,40 170,120 120,180 60,140",
    status: "available",
    number: "9.250006",
    name: "Wish Power",
    label: { x: 90, y: 90 },
  },
  {
    id: "2",
    points: "170,120 250,100 270,180 200,200 120,180",
    status: "sold",
    number: "9.250008",
    name: "Senics",
    label: { x: 190, y: 130 },
  },
  {
    id: "3",
    points: "60,140 120,180 100,250 40,220",
    status: "reserved",
    number: "9.250009",
    name: "FORTUNE",
    label: { x: 80, y: 170 },
  },
  // ...add more plots as needed
];