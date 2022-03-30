import React from "react";
import About from "../../Component/About";
import CommingSoon from "../../Component/CommingSoon";
import RoadMap from "../../Component/Roadmap";
import Team from "../../Component/Team";
function HomePage() {
  return (
    <>
      <div>
        <CommingSoon />
        <About />
        <About
          header="Specification"
          detail="Each Cupid Club is a unique digital collectible that doubles as a quasi-ownership
        stake in the cupid metaverse. The Cupids are stored as ERC-721 tokens on the 
        Ethereum blockchain and hosted on IPFS. 
        
        Each Cupid Club NFT, regardless of tier, will mint at .05 ETH. Whitelist members
        will be able to purchase at .02 ETH. 2,500 of the 10,000 NFTs will be reserved 
        for whitelist members, and unsold whitelist spots will move to the public sale.
        "
          color="white"
          styleforFirstDiv={"order-2 md:pl-20 pl-1 "}
          textWidth={"w-full"}
          styleForSecondDiv={"order-1"}
        />
        <About
          header="Why Cupid Club"
          detail="When you purchase a Cupid Club NFT, you’re claiming a stake in the future of online dating.
        The online dating market is currently estimated at ~$3.5B USD. We imagine a world where
        access to people from around the globe is completely seamless. This requires both the means
        to connect (as Web2 has provided), and also the ability to create deeper connections 
        and experiences.  In our virtual world, developers come together to create micro-economies
        with beautiful graphics and scenery. Users can instantly immerse themselves in these 
        experiences from the comfort of their home, offering greater flexibility to people’s schedules
        and reducing the pressure from a real-life blind date.  "
        />
        <About
          headerStyle="md:text-right text-left "
          header="$LUV Token"
          detail="Description: Each Cupid Club NFT holder receives daily airdrops of $LUV tokens.
         User can spend our virtual currency “$LUV” to upgrade their avatar or within 
        the experiences created by the community developers. $LUV token can also be
         used to pay subscription fees to the platform, as can Ethereum. "
          color="white"
          styleforFirstDiv={"order-2 md:pl-20 pl-1 "}
          textWidth={"w-full"}
          styleForSecondDiv={"order-1"}
        />
        <RoadMap />
        <Team />
      </div>
    </>
  );
}
export default HomePage;
