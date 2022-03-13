import React from "react";
import Navbar from "../../Component/navbar";
import MultipleItems from "../../Component/slider";
import Team from "../../Component/Team";
import Footer from "../../Component/footer";
import Background1 from "../../assets/home/1-min.jpg";
import Background2 from "../../assets/home/2-min.png";
import Image1 from "../../assets/image/4x/home-logo-min.png";
import Image2 from "../../assets/image/4x/speek-the-truth-min.png";
import Image3 from "../../assets/image/4x/building-min.png";
import Image4 from "../../assets/image/4x/ai-min.png";
import Image5 from "../../assets/image/4x/media-min.png";
import Image6 from "../../assets/image/4x/concept-min.png";
import Image7 from "../../assets/image/4x/road-min.png";
import Image8 from "../../assets/image/4x/rocket-min.png";
import Slider1 from "../../assets/image/slider/1-min.png";
import Slider2 from "../../assets/image/slider/2-min.png";
import Slider3 from "../../assets/image/slider/3-min.png";
import Slider4 from "../../assets/image/slider/4-min.png";
import Slider5 from "../../assets/image/slider/6-min.png";
import Slider6 from "../../assets/image/slider/6-min.png";

function Home() {
  return (
    <>
      <div
        className="flex flex-col w-full h-[100vh]  items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${Background1})` }}
      >
        <Navbar />
        <div className="w-full flex items-center justify-center flex-col my-auto pt-40">
          <img src={Image1} className="w-[800px]" alt="" />
          <img src={Image2} className="w-[300px] mt-5" alt="" />
          <button className="bg-transparent font-bold italic border text-white text-3xl px-20 py-3 hover:bg-white hover:text-black transition-all cursor-pointer">
            MINT
          </button>
        </div>
        <img
          src={Image3}
          className="mt-auto h-[45%] object-stretch w-full"
          alt=""
        />
      </div>
      <div
        className="flex flex-col w-full p-3 items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <h1 className="w-full text-white font-bold text-4xl">
          10,000 free-thinking monkeys
        </h1>
        <div className="w-full grid grid-cols-5">
          <div className="col-span-4 pr-10 text-2xl font-bold text-white py-10">
            Mean Monkeys is a collaborative, community-driven, and immersive NFT
            broadcast experience. Mean Monkeys is the first decentralized
            collaborative media platform, showcasing a new media form in a Web3
            future. NFT holders are randomly selected to anonymously participate
            in a virtual talk show, each receiving advertisement revenue
            programmatically distributed via smart contracts.{" "}
          </div>
        </div>
        <div className="w-full pt-20">
          <MultipleItems slide={4}>
            <img className="pl-3" src={Slider1} alt="" />
            <img className="pl-3" src={Slider2} alt="" />
            <img className="pl-3" src={Slider3} alt="" />
            <img className="pl-3" src={Slider4} alt="" />
            <img className="pl-3" src={Slider5} alt="" />
            <img className="pl-3" src={Slider6} alt="" />
          </MultipleItems>
        </div>
      </div>
      <div className="flex flex-col py-10 w-full p-3 bg-[#8E839B] items-center bg-cover bg-no-repeat bg-center">
        <h1 className="w-full text-white font-bold text-4xl">The Experience</h1>
        <div className="w-full grid gap-20 md:grid-cols-2 grid-cols-1 ">
          <div className="text-2xl font-bold text-white py-10">
            Ownership of a Mean Monkey provides access to an exciting media
            platform and stake in the advertisement revenue generated, in
            conjunction with ERC-20 tokens. Owners of Mean Monkeys will be
            randomly selected every week for participation in an anonymized
            broadcast experience, initially a talk show, and soon after, a
            gameshow.
            <br />
            <br />
            Let your personality, opinions, and humor shine as a participat on
            the platform and develop your monkey’s voice. Each owner reserves
            full commercial rights to their monkey and will receive a share of
            the advertisement revenue generated through the show.
          </div>
          <img src={Image4} alt="" />
        </div>
      </div>
      <div className="flex flex-col py-10 w-full p-3 bg-[#FFC0CB] items-center bg-cover bg-no-repeat bg-center">
        <h1 className="w-full text-white font-bold text-4xl">
          What is Decentralized Collaborative Media?
        </h1>
        <div className="w-full grid gap-20 grid-cols-3 ">
          <div className="text-2xl md:col-span-2 col-span-3 font-bold text-white py-10">
            Mean Monkeys are the very first embodiment of a decentralized
            collaborative media platform. Ownership of a monkey NFT grants the
            opportunity to participate in the social feed, talk show, and the
            gameshow (collectively, the experiences). NFT owners come together
            from all around the world to create the content. The discourse is
            uncensored, unadulterated, and anonymized. By drawing from an
            eclectic community, the content will always be novel, interesting,
            and unsuspecting as new personalities emerge. Participants in each
            show receive a share of advertisement revenue distributed
            programmatically via smart contracts.
          </div>
          <img src={Image5} alt=""  className=" md:col-span-1 col-span-3"/>
          <div className="col-span-3">
            <p className="italic text-2xl text-white">To recap,</p>
            <p className="italic text-2xl text-white tracking-wide pt-4">
              Decentralized Collaborative Media = Collaborative content creation
              + programmatic advertisement revenue distribution
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-10 w-full p-3 bg-[#7393B3] items-center bg-cover bg-no-repeat bg-center">
        <h1 className="w-full text-white font-bold text-4xl">
          Concept and Rarity{" "}
        </h1>
        <div className="w-full grid gap-20 md:grid-cols-2 grid-cols-1">
          <div className=" py-10 text-white">
            <p className="text-2xl font-bold">
              Each mean monkey is one of one, but some are more distinguished
              than others. We designed each monkey to capture the four character
              archetypes (the ego, persona, anima, and self) and 12 archetypal
              images defined by Swiss psychiatrist and founder of analytical
              psychology, CG Jung. Each archetypal image isgiven a live, work,
              and play outfit. Learn more (link to art concept)
            </p>
            <div className="grid grid-cols-2 gap-y-3 pt-10">
              <p className="text-3xl italic">Background: 8</p>
              <p className="text-3xl italic">Eyes: 14</p>
              <p className="text-3xl italic">Eyebrows: 12</p>
              <p className="text-3xl italic">Fur: 18</p>
              <p className="text-3xl italic">Mouth: 12</p>
              <p className="text-3xl italic">Skin: 6</p>
              <p className="text-3xl italic">Accessories: 35</p>
              <p className="text-3xl italic">Outfits: 36</p>
              <p className="text-3xl italic"></p>
              <p className="text-3xl italic">Hats: 40</p>
            </div>
          </div>
          <img src={Image6} alt="" />
        </div>
      </div>
      <div className="flex flex-col py-10 w-full p-3 bg-[#888E6C] items-center bg-cover bg-no-repeat bg-center">
        <h1 className="w-full text-white font-bold text-4xl">Roadmap</h1>
        <div className="w-full flex flex-col">
          <div className=" py-14 text-white">
            <p className="text-2xl font-bold">
              We’re hardly an art installation, rather an immersive
              entertainment experience at the intersection or art, technology,
              and community.
              <br />
              <br />
              The roadmap is broadly defined but intended to be shaped in
              collaboration with Mean Monkey owners. We believe that Mean
              Monkeys can evolve into the face of Web3 media and permeate the
              notion of creative, collaborative, and equitable expression.
            </p>
          </div>
          <img src={Image7} alt="" />
        </div>
      </div>
      <div className="flex flex-col py-10 w-full p-3 bg-[#ED9920] items-center bg-cover bg-no-repeat bg-center">
        <h1 className="w-full text-white font-bold text-4xl">
          Barrier to Entry{" "}
        </h1>
        <div className="w-full grid grid-cols-5 gap-20">
          <div className="md:col-span-3 col-span-5 py-14 text-white">
            <p className="text-2xl font-bold">
              Each Mean Monkey is a 512 x 512 unique digital collectible,
              algorithmically generated and stored on the Ethereum blockchain.
              Mean Monkeys will cost a flat .1927 ETH for Generation 1 with a
              total supply of 10,000 unique pieces of digital art. 1927 is an
              ode to the first successful long-distance demonstration of
              television by Bell Telephone Company transmitting a speech by
              Herbet Hoover in New York City.
              <br />
              <br />
              The pre-sale price for whitelist members will be .047
            </p>
            <p className="text-2xl italic">
              “Today we have, in a sense, the transmission of sight for the
              first time in the world’s history,” Hoover said. “Human genius has
              now destroyed the impediment of distance in a new respect, and in
              a manner hitherto unknown.”
            </p>
          </div>
          <img src={Image8} className="md:col-span-2 col-span-5" alt="" />
        </div>
      </div>
      <Team />
      <Footer />
    </>
  );
}

export default Home;
