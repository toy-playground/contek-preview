import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "../components/seo";
import icon from "../assets/images/icon-with-name.png";
import linkedin from "../assets/images/linkedin.png";
import bg from "../assets/images/bg.mp4";

const Button = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <button
      className="py-4 px-auto border border-white rounded whitespace-nowrap w-[260px]"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
const IndexPage: React.FC<PageProps> = () => {
  return (
    //Head
    <>
      <header className="w-full fixed top-0 z-20 flex justify-between items-center h-[64px] md:h-[80px] px-8 md:px-12 border-b-[#6D6D6D] border-b bg-black">
        <img alt="contek logo" src={icon} className="h-[28px]"></img>
        <img
          alt="in"
          src={linkedin}
          className="h-[28px] cursor-pointer"
          onClick={() => {
            window.open("https://contek.io", "_blank");
          }}
        ></img>
      </header>
      <main className="relative w-screen min-h-screen">
        <video
          className="absolute top-0 bottom-0 left-0 right-0 z-10 object-cover w-screen h-screen"
          controls={false}
          autoPlay
          loop
          muted
          src={bg}
        >
        </video>
        <div className="relative z-10 w-screen h-full px-[20px] sm:px-[100px] md:px-[160px] pt-[80px] pb-[10px]">
          <div
            className="pt-20 md:pt-40 text-3xl xl:text-4xl 2xl:text-5xl lg:flex-nowrap lg:whitespace-nowrap"
            style={{ fontFamily: "PressStart2P" }}
          >
            Discovering Patterns in{" "}
          </div>
          <div
            className="text-3xl xl:text-4xl 2xl:text-5xl lg:flex-nowrap lg:whitespace-nowrap gradient-title pt-4 w-fit"
            style={{ fontFamily: "PressStart2P" }}
          >
            Crypto Markets
            <span className="animate-cursor">_</span>
          </div>
          <div className=" text-2xl pt-16">
            Contrarian Technology is a proprietary trading firm. We run quant
            strategies 24/7 across major crypto markets without manual
            intervention.
          </div>
          <div
            className="flex pt-20 sm:pt-52 gap-5 pb-20 flex-wrap"
            style={{ fontFamily: "PressStart2P" }}
          >
            <Button
              title="CAREERS"
              onClick={() => {
                console.log("careers");
              }}
            />
            <Button
              title="CONTACT US"
              onClick={() => {
                console.log("contact us");
              }}
            />
          </div>
        </div>
      </main>
      <footer
        className="w-full fixed bottom-0 h-[10px] z-20"
        style={{
          background: "linear-gradient(90deg, #01FF67 -0.06%, #01ACA2 100%)",
        }}
      />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
