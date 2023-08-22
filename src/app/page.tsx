"use client";
import type { NextPage } from "next";
import { type MouseEventHandler, useState } from "react";
import Head from "next/head";
import "./global.css";
import { LazyImage } from "../components/LazyImage";
import { random } from "lodash";

const myRandom = () => random(1, 123);
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

type onlazyLoadProps = {
  node: boolean;
};

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const newImageItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${myRandom()}.jpg`,
    };

    setImages([...images, newImageItem]);
    window.plausible("add_fox");
  };

  const onLazyLoad = (node: HTMLImageElement): void => {
    node.onload = (): any => {
      console.log("la url es:" + node.src);
    };
  };

  return (
    <div className="w-screen h-max flex justify-center items-center alig flex-col">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <script
          defer
          data-domain="yourdomain.com"
          src="https://plausible.io/js/script.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-auto flex justify-center items-center flex-col">
        <div className="">
          <h1 className="mt-4 text-3xl font-bold m-auto">
            Generate Fox Image!
          </h1>
        </div>

        <div className="mt-4 transition duration-150 ease-out hover:ease-in">
          <button
            className="transition-all duration-200 hover:bg-cyan-700/20 pointer active:bg-cyan-700/30  border-2 border-transparent rounded-xl w-36 py-2 text-cyan-500 bg-sky-400/10"
            onClick={addNewFox}>
            Add New Fox
          </button>
        </div>
        <div className="grid px-20 w-screen items-start grid-cols-5 ">
          {images.map(({ id, url }) => (
            <div
              className="mt-4 p-4 flex items-center justify-center h-full w-full "
              key={id}>
              <LazyImage
                onlazyLoad={onLazyLoad}
                src={url}
                width="320"
                height="auto"
                className="mx-auto rounded-md bg-gray-300 shadow-2xl shadow-sky-300"
                onClick={() => {
                  console.log("holaa!");
                }}
              />
            </div>
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
