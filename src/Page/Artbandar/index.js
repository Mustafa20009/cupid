import React from "react"
import Navbar from "../../Component/navbar";
import Logo from "../../assets/final logo white-01.png"

import MultipleItems from "../../Component/slider";

function Artbandar(){
    return(<div className="min-h-screen bg-black text-white"><Navbar image={Logo} imageStyle="mx-auto" />
    <div className="grid grid-cols-12">
        <div className="col-span-11 text-center font-semibold text-lg tracking-wider">Merging Physical Art with NFT Tecnology ,Own Stake With future of art</div>
        <div className="col-span-1"></div>

    </div>
    <div className="grid grid-cols-1 ">
      <div className="h-[35vh] bg-[#61D7FF] text-center flex flex-col items-center font-bold ">
          <p className="text-3xl mt-5 text-black">COMMING MARCH 2022</p>
          <p className="text-3xl text-[#0D60D8] mt-5">0/1961 minted</p>
          <button className="bg-[#0D60D8] pt-3 pb-3 w-[20%] rounded-full text-2xl mt-5">Connect Wallet</button>

      </div>


      <div className="flex flex-col py-10 w-full p-3  mb-10 items-center bg-cover bg-no-repeat bg-center">
      
        <div className="w-full grid gap-20 grid-cols-3 ">
          <div className="text-2xl md:col-span-2 col-span-3 font-bold text-white ">
          <h1 className="w-full text-white font-bold text-4xl">
          Artbandar NFT
        </h1>
        <p className="font-semibold text-lg mt-5">Our Picasso-inspired ArtBander NFT artwork doubles as quasi-ownership in ArtBander marketplace. The ArtBander marketplace earns a sales commission on every transaction through the platform. ArtBander NFT holders cumulatively receive 50% of commission revenues on crypto transactions. </p>
        <p className="font-semibold text-lg mt-5">Revenue is programmatically distributed through smart contracts to each wallet address holding the ArtBander NFT. Your ArtBander NFT serves as a claim on the future of physical and digital art transactions, earning revenue distributions and appreciating in value as the marketplace grows.  </p>

          </div>
          {/* <img src="" alt="ARTBARD NFT"  className=" md:col-span-1 col-span-3 text-pink"/> */}
          <p className="text-[#0D60D8] md:col-span-1 col-span-3 font-bold text-4xl">ARTBARD NFT</p>
        </div>
      </div>
      <div className="flex flex-col py-10 w-full p-3 mb-10  items-center bg-cover bg-no-repeat bg-center">
      
        <div className="w-full grid gap-20 grid-cols-3 ">
          <div className="text-2xl md:col-span-2 col-span-3 font-bold text-white ">
          <h1 className="w-full text-white font-bold text-4xl">
         About Artbandar
        </h1>
        <p className="font-semibold text-lg mt-5">ArtBander is a marketplace for physical and digital art where artists and galleries can mint NFTs for digital art or assign an NFT token to physical works of art, for free. By assigning an NFT token to physical artwork, ArtBander enables immutable transaction records of both physical and digital art, creating an additional layer of trust in each transaction. In essence, the NFT technology enables verifiable provenance, offering transparency of digital transaction records. In addition, artists who originate a new collection in tandem with the platform can assure their buyers of the print scarcity, thereby increasing the value of their work. This is a major win for artists, sellers, and buyers. Visit www.artbander.com   </p>

          </div>
          {/* <img src="" alt="ARTBARD NFT"  className=" md:col-span-1 col-span-3 text-pink"/> */}
          <p className="text-[#0D60D8] md:col-span-1 col-span-3 font-bold text-4xl">Flow Chart Animation</p>
        </div>
      </div>
      <div className="flex flex-col py-10 w-full p-3 mb-10  items-center bg-cover bg-no-repeat bg-center">
      
      <div className="w-full grid gap-20 grid-cols-3  mb-20">
        <div className="text-2xl md:col-span-2 col-span-3 font-bold text-white ">
        <h1 className="w-full text-white font-bold text-4xl">
        How We Started
      </h1>
      <p className="font-semibold text-lg mt-5">The idea for ArtBander arose after our founder purchased a Picasso lithograph called "Les Bander!Ilas- for his fathers birthday. New to the physical art world. an original Picasso for under S4,000 from a reputable art gallery in Manhattan sounded like a steal. This relatively lower price is largely attributed to the unknown supply of prints, i.e., no transparent scarcity. This shed light on a major problem for both buyers and sellers of physical art. trust.  </p>
      <p className="font-semibold text-lg mt-5">One of the most significant value propositions of an art gallery is their reputation and the subsequent level of trust created. The advent of NFT technology, applied through ArtBander. can significantly enhance this trust. We've developed a proprietary solution for applying NFT technology to traditional transactions of physical art for both crypto AND non-crypto payment methods.  </p>

        </div>
        {/* <img src="" alt="ARTBARD NFT"  className=" md:col-span-1 col-span-3 text-pink"/> */}
        <p className="text-[#0D60D8] md:col-span-1 col-span-3 font-bold text-4xl">ARTBARD NFT</p>
     
     
      </div>
      
      <div className="flex flex-col py-10 w-full   mb-10  items-center bg-cover bg-no-repeat bg-center">
      
      <div className="w-full grid gap-20 grid-cols-3 ">
        <div className="text-2xl md:col-span-2 col-span-3 font-bold text-white ">
        <h1 className="w-full text-white font-bold text-4xl">
        Specification 
      </h1>
      <p className="font-semibold text-lg mt-5">Each ArtBander NFT is a unique digital collectible that doubles as a revenue-sharing token in the ArtBander marketplace. The NFTs are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. </p>
      <p className="font-semibold text-lg mt-5">Each ArtBander NFT, regardless of tier, will mint at .1961 ETH. Whitelist members will be able to purchase at .038 ETH. A total of 1961 NFTs will be created.  </p>

        </div>
        {/* <img src="" alt="ARTBARD NFT"  className=" md:col-span-1 col-span-3 text-pink"/> */}
        <p className="text-[#0D60D8] md:col-span-1 col-span-3 font-bold text-4xl">ARTBARD NFT</p>
      </div>
    </div>
    <div className="flex flex-col py-10 w-full    items-center bg-cover bg-no-repeat bg-center">
      
      <div className="w-full grid gap-20 grid-cols-3 ">
        <div className="text-2xl md:col-span-2 col-span-3 font-bold text-white ">
        <h1 className="w-full text-white font-bold text-4xl">
        Rarity and Tiers 

      </h1>
      <p className="font-semibold text-lg mt-5">There are 5 tiers of revenue-sharing. signified by the NFT frame. Each tier is entitled to a different share of revenue. 
 </p>

        </div>
        {/* <img src="" alt="ARTBARD NFT"  className=" md:col-span-1 col-span-3 text-pink"/> */}
        <p className="text-[#0D60D8] md:col-span-1 col-span-3 font-bold text-4xl">ARTBARD NFT</p>
      </div>
      
    </div>
   </div>

      

    </div>
    <MultipleItems slide={4}>
           <div className="text-white text-center text-[#0D60D8] text-4xl font-extrabold	 py-10">Platinum</div>
           <div className="text-white text-center text-[#0D60D8] text-4xl font-extrabold	 py-10">GOLD</div>
           <div className="text-white text-center text-[#0D60D8] text-4xl font-extrabold	 py-10">Silver </div>
           <div className="text-white text-center text-[#0D60D8] text-4xl font-extrabold	 py-10">Brownze</div>
       

          </MultipleItems>
   
    
    </div>)
}
export default Artbandar