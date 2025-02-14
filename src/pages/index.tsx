import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";


// components
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import Slides from "../components/Slides";
import SlideInfo from "../components/SlideInfo";
import Controls from "../components/Controls";

const inter = Righteous({
  subsets: ["latin"], 
  weight: ["400"], 
});

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] = 
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });
  
  return (
    <main 
      className={`${inter.className} relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          
          {/* Header Section */}
          <Header />

          {/* Slides Section */}
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">

            {/* Slider Left Section Content */}
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData} 
                currentSlideData={currentSlideData} 
              />
            </div>
            
            {/* Slider Right Carousel Content */}
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls 
                currentSlideData={currentSlideData}
                data={data} 
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData: Data[] = [
  {
    img: "/Aranjuez.jpg",
    title: "Aranjuez",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    location: "Alcolirikoz",
  },
  {
    img: "/LaBombaDeZiroshima.jpg",
    title: "La Bomba De Ziroshima",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    location: "Zof Ziro",
  },
  {
    img: "/ManzanasALaVuelta.jpg",
    title: "Manzanas A La Vuelta",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    location: "Doble Porcion",
  },
  {
    img: "/ServiciosAmbulatorioz.jpg",
    title: "Servicios Ambulatorioz",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    location: "Alcolirikoz",
  },
  {
    img: "/TodosTienenQueComer.jpg",
    title: "Todos Tienen Que Comer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    location: "Crudo Means Raw",
  },
  {
    img: "/ApocalypseLoops.jpg",
    title: "Apocalypse Loops",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    location: "Oblivion's Mighty Trash",
  },
  {
    img: "/Euphanasia.jpg",
    title: "Euphanasia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    location: "Buhodermia",
  },
  {
    img: "/DePorVida.png",
    title: "De Por Vida",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    location: "Doble Porcion",
  },
  {
    img: "/JuegosDeAzar.jpg",
    title: "Juegos De Azar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    location: "Doble Porcion",
  },
];

const initData: Data = sliderData[0];