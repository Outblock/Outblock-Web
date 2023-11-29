import React, { Component } from 'react';
import { Box, Button, Image, Heading, Text, Flex } from 'rebass';
import Cube from './Component/Cube';
import Ring from './Component/Ring';
import Marquee from './Component/Marquee';
import './Mission.css';
import { Tiles } from '@rebass/layout';

const Mission = () => {

  return (
    <Flex sx={{ width: '100vw', height: '100vh', background: '#303030' }} flexDirection="column" >
      {/* <Marquee isRight={false} text={"HODL --- Technically, you kinda lost your money --- Congratulations on This"} /> */}
      <Tiles sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }} columns={[1, null, 2]}>
        {/* <Flex sx={{ height: '100%', width: '80%', margin: '0 auto', display: 'block' }}> */}
        <Flex sx={{ justifyContent: 'center', alignItems: 'center', height: "100%" }} >
          <Cube />
        </Flex>
        <Flex flexDirection="column" p={10} sx={{ alignItems: 'left', justifyContent: 'center' }} >
          <Text color="white" p={3} fontFamily='Bungee' fontSize={[3, 4, 5]} > <span className="half_background">Our Missions</span> </Text>
          <Text color="white" pl={3} fontFamily="Ubuntu" fontWeight="bold" fontSize={[1, 2, 3]} sx={{ lineHeight: '180%', width: '70%' }} >
            Crypto is mysterious and not easy to understand for the public.
            <br />
            There are some many exciting and revolutional ideas sparkling inside of those blockchains.
            <br />
            We aim to bring all those marvelous items out of the block.
            <br />
            Making the blockchain technology more accessible to everyone.
          </Text>
        </Flex>
        {/* </Flex> */}
      </Tiles>
      {/* <Marquee isRight={true} text={"I’m In It For Technology --- Ok can you guys stop trading ---  Buy Bitcoin"} /> */}
    </Flex >
  );
}

export default Mission;