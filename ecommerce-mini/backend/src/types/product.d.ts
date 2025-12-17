export type Category = "piston" | "rod" | "wiper";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "PSM Piston Seal",
    category: "piston",
    price: 18.99,
    description:
      "The PSM piston seal is designed for reliable sealing in standard hydraulic applications. Its balanced profile helps maintain consistent pressure performance over long service cycles.",
    image: "../frontend/assets/psm-pistonseal.png"
  },
  {
    id: "2",
    name: "PS1400 Piston Seal",
    category: "piston",
    price: 21.99,
    description:
      "PS1400 piston seals are built for higher-pressure environments where durability matters. The reinforced design reduces wear while maintaining smooth piston movement.",
    image: "/assets/ps1400-pistonseal.png"
  },
  {
    id: "3",
    name: "PSC Piston Seal",
    category: "piston",
    price: 19.99,
    description:
      "The PSC piston seal offers a compact sealing solution for space-constrained cylinders. It delivers dependable sealing performance without sacrificing efficiency.",
    image: "/assets/psc-pistonseal.png"
  },
  {
    id: "4",
    name: "MPSA Piston Seal",
    category: "piston",
    price: 22.49,
    description:
      "MPSA piston seals are engineered for heavy-duty hydraulic systems. Their robust construction supports high loads and extended operating life.",
    image: "/assets/mpsa-pistonseal.png"
  },
  {
    id: "5",
    name: "RTU Rod Seal",
    category: "rod",
    price: 16.99,
    description:
      "RTU rod seals provide dependable leakage control in reciprocating rod applications. They are optimized for smooth motion and reduced friction.",
    image: "/assets/rtu-rodseal.png"
  },
  {
    id: "6",
    name: "RTUB Rod Seal",
    category: "rod",
    price: 17.99,
    description:
      "The RTUB rod seal improves sealing efficiency under varying pressure conditions. Its profile helps extend seal life while maintaining system cleanliness.",
    image: "/assets/rtub-rodseal.png"
  },
  {
    id: "7",
    name: "DRU Rod Seal",
    category: "rod",
    price: 18.49,
    description:
      "DRU rod seals are precision-engineered for demanding hydraulic applications. They provide excellent sealing performance with minimal stick-slip behavior.",
    image: "/assets/dru-rodseal.png"
  },
  {
    id: "8",
    name: "MUKRN Rod Seal",
    category: "rod",
    price: 20.99,
    description:
      "MUKRN rod seals are designed for industrial systems requiring long service intervals. Their durable construction resists wear and contamination effectively.",
    image: "/assets/mukrn-rodseal.png"
  },
  {
    id: "9",
    name: "AN Wiper",
    category: "wiper",
    price: 12.99,
    description:
      "AN wipers protect hydraulic systems by preventing dirt and debris from entering the cylinder. They help extend seal life and overall system reliability.",
    image: "/assets/an-wiper.png"
  },
  {
    id: "10",
    name: "ST Wiper",
    category: "wiper",
    price: 13.49,
    description:
      "ST wipers feature a scraper-style lip for effective contaminant removal. They are well suited for environments with heavy dust or moisture exposure.",
    image: "/assets/st-wiper.png"
  },
  {
    id: "11",
    name: "RW Wiper",
    category: "wiper",
    price: 14.49,
    description:
      "RW wipers are designed for heavy-duty applications with harsh operating conditions. Their reinforced profile provides reliable protection against debris ingress.",
    image: "/assets/rw-wiper.png"
  },
  {
    id: "12",
    name: "MSWS Wiper",
    category: "wiper",
    price: 15.99,
    description:
      "MSWS wipers use a multi-lip design to deliver superior contamination control. This design helps maintain clean hydraulic systems and consistent performance.",
    image: "/assets/msws-wiper.png"
  }
];
