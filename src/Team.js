import React, { useRef, useEffect, useState } from 'react'
import './Team.css';
import { Box, Button, Image, Heading, Text, Flex, Card } from 'rebass';
import { Tiles } from '@rebass/layout';

import avatar from './resources/avatar_1.png';
import avatar2 from './resources/avatar_1_2.png';
import avatar3 from './resources/avatar_2.png';
import avatar4 from './resources/avatar_2_1.png';
import avatar5 from './resources/avatar_3.png';
import avatar6 from './resources/avatar_3_1.png';
import avatar7 from './resources/avatar_4.png';
import avatar8 from './resources/avatar_4_1.png';
import avatar9 from './resources/avatar_5.png';
import avatar10 from './resources/avatar_5_1.png';
import avatar11 from './resources/avatar_6_1.png';
import avatar12 from './resources/avatar_6_2.png';
import avatar13 from './resources/avatar_7_1.png';
import avatar14 from './resources/avatar_7_2.png';
import avatar15 from './resources/avatar_8_1.png';
import avatar16 from './resources/avatar_8_2.png';
import avatar17 from './resources/avatar_10_1.png';
import avatar18 from './resources/avatar_10_2.png';
import useOnScreen from './Util/UseOnScreen.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Team = () => {

  const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random() * 6}s linear both ">${letter}</span>`
  const colorLetter = letter => `<span style="color: white;">${letter}</span>`;
  const flickerAndColorText = text =>
    text
      .split('')
      .map(flickerLetter)
      .map(colorLetter)
      .join('');
  const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);

  const h1Ref = useRef(null)
  const isVisible = useOnScreen(h1Ref);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const target = h1Ref.current;
    if (isVisible && !display) {
      setDisplay(true);
      neonGlory(target);
    }
    target.onclick = ({ target }) => neonGlory(target);
  }, [isVisible])

  const personCard = (img1, img2, name, position, github, showGithub = true) => {
    return (
      <Flex flexDirection="column"
        borderWidth={1}
        borderStyle='solid'
        sx={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} >
        <div style={{ width: '250px', aspectRatio: '1 /1 ', position: 'relative', display: 'inline-block' }}>
          <div style={{ width: '250px', aspectRatio: '1 /1 ', position: 'relative', display: 'inline-block' }} >
            <glitch-image onMouseOver={e => (e.currentTarget.src = img2)}
              onMouseOut={e => (e.currentTarget.src = img1)}
              style={{ borderRadius: "50%" }} src={img1} ></glitch-image>
          </div>
        </div>
        <Heading color="white" fontFamily="Bungee" fontSize={[1, 3, 4]}  >{name} </Heading>
        <Heading color="white" fontFamily="Ubuntu" fontSize={[1, 2, 3]} >{position} </Heading>
        { showGithub? socialLink(faGithub, github) : <dev style={{height: '46.25px', width: '62px'}} />}
      </Flex >
    );
  }

  const socialLink = (icon, link) => {
    return (
      <Button
        onClick={() => { window.open(link).focus() }}
        sx={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }} >
        <FontAwesomeIcon icon={icon} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '3vmin', zIndex: 99 }} />
      </Button>
    );
  }


  return (
    <Flex width={1} flexDirection='column' style={{ margin: '0 auto', alignItems: 'center', minHeight: '100%', marginBottom: '50px'}}>
      <Text ref={h1Ref} style={{ top: 0, userSelect: 'none', cursor: 'pointer' }}
        fontFamily={'Bungee'} pt={30}
        fontSize={[2, 4, 6]} >Our team</Text>
      <Flex flexDirection='column'
        sx={{
          height: '100%',
          width: '80%',
          margin: '0 auto',
          justifyContent: 'center',
          // alignItems: 'center',
          // display: 'inline-block',
          gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
        }} >
        <Text sx={{ marginY: '4vmin', alignSelf: 'center', textAlign: 'center', lineHeight: '180%' }} fontSize={[1, 2, 3]} color={'white'} fontFamily={'Ubuntu'} fontWeight={'bold'}>
          We are a creative and passionate team with strong hands-on skill.
          <br />
          Our goal is bring more people to the <span className="half_background">crypto wonderland</span>.
        </Text>
        <Tiles columns={[1, null, 4]} sx={{ justifyItems: 'center', userSelect: 'none', marginBottom:'30px' }}>
          {personCard(avatar, avatar2, "Hao", "Founder & Developer", "https://github.com/lmcmz")}
          {personCard(avatar3, avatar4, "Mandy", "BA & Developer", "https://github.com/meilixiaozhang")}
          {personCard(avatar8, avatar7, "Han", "Senior Backend Developer", "https://github.com/zzggo")}
          {personCard(avatar9, avatar10, "John", "Senior Android Developer", "https://github.com/john990")}
        </Tiles>
        <Tiles columns={[1, null, 4]} sx={{ justifyItems: 'center', userSelect: 'none' }}>
          {personCard(avatar13, avatar14, "Zayn", "UI & UX", "", false)}
          {personCard(avatar11, avatar12, "KK", "UI & UX", "", false)}
          {/* {personCard(avatar17, avatar18, "Unicar", "Senior Frontend Developer", "https://github.com/unicar9")} */}
          {personCard(avatar15,avatar16, "Zena","Intern","",false)}
          {personCard(avatar17,avatar18, "Jenny","Marketing","",false)}
        </Tiles>
      </Flex>
    </Flex>
  );
}

export default Team;
