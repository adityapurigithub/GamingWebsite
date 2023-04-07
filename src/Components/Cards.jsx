import React from "react";

const cards = [
  {
    img: "https://torgamez.com/wp-content/uploads/2020/10/Mafia-Definitive-Edition.jpg",
    title: "Mafia",
    btn: "Download Now ",
  },
  {
    img: "https://torgamez.com/wp-content/uploads/2021/03/Assassins-Creed-Valhalla.jpg",
    title: "Assassins Creed",
    btn: "Download Now ",
  },
  {
    img: "https://torgamez.com/wp-content/uploads/2020/10/Mafia-Definitive-Edition.jpg",
    title: "Mafia",
    btn: "Download Now ",
  },
  {
    img: "https://torgamez.com/wp-content/uploads/2020/08/Fast-and-Furious-Crossroads.jpg",
    title: "Fast & Furious",
    btn: "Download Now",
  },

  {
    img: "https://torgamez.com/wp-content/uploads/2021/03/Assassins-Creed-Valhalla.jpg",
    title: "Mafia",
    btn: "Download Now ",
  },
  {
    img: "https://torgamez.com/wp-content/uploads/2020/10/eFootball-PES-2021.jpg",
    title: "Pes 2023",
    btn: "Download Now ",
  },
  {
    img: "https://torgamez.com/wp-content/uploads/2020/10/Mafia-Definitive-Edition.jpg",
    title: "Mafia",
    btn: "Download Now ",
  },
  {
    img: "https://torgamez.com/wp-content/uploads/2020/08/Fast-and-Furious-Crossroads.jpg",
    title: "Fast & Furious",
    btn: "Download Now",
  },
  {
    img: "https://torgamez.com/wp-content/uploads/2021/03/Assassins-Creed-Valhalla.jpg",
    title: "Mafia",
    btn: "Download Now ",
  },
  {
    img: "https://torgamez.com/wp-content/uploads/2020/10/eFootball-PES-2021.jpg",
    title: "Pes 2023",
    btn: "Download Now ",
  },
  {
    img: "https://torgamez.com/wp-content/uploads/2020/10/Mafia-Definitive-Edition.jpg",
    title: "Mafia",
    btn: "Download Now ",
  },

  {
    img: " https://torgamez.com/wp-content/uploads/2021/05/Days-Gone.jpg",
    title: "Days Gone",
    btn: "Download Now ",
  },
];

const Cards = () => {
  return (
    <div className="relative z-0 sm:-top-[80px] -top-[120px] flex justify-center flex-wrap gap-5 text-white">
      {cards.map((card, index) => (
        <div
          key={index}
          className="Card bg-[#083a50] text-center p-2 w-[260px] flex flex-col justify-center items-center gap-2 rounded-lg py-2 pb-6 transition hover:scale-105"
        >
          <img
            className="w-100 object-cover rounded-xl"
            src={card.img}
            alt="img"
          />
          <h3 className="sm:text-[20px] text-[16px] font-bold text-gray-400">
            {card.title}
          </h3>
          <p>{card.subTitle}</p>
          <button className="bg-transparent border border-orange-400 px-6 py-2 mt-2 rounded-3xl text-orange-400 font-semibold hover:bg-orange-400 hover:text-white transition-all duration-1000">
            {card.btn} &#8595;
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
