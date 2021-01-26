const cards = [
  {
    id: "card-1",
    title: "Yemek yapmayı öğren",
  },
  {
    id: "card-2",
    title: "Araba sürmeyi öğren",
  },
  {
    id: "card-3",
    title: "Spora git",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Yapılacaklar",
      cards,
    },
  },
  listIds: ["list-1"],
};

export default data;
