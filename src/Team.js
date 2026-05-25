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
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          padding: '20px',
          borderRadius: '15px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px var(--neon-purple), inset 0 0 10px var(--neon-purple)',
            transform: 'translateY(-5px)',
            background: 'rgba(188, 19, 254, 0.1)'
          }
        }} >
        <div style={{ width: '250px', aspectRatio: '1 /1 ', position: 'relative', display: 'inline-block' }}>
          <div style={{ width: '250px', aspectRatio: '1 /1 ', position: 'relative', display: 'inline-block' }} >
            <glitch-image onMouseOver={e => (e.currentTarget.src = img2)}
              onMouseOut={e => (e.currentTarget.src = img1)}
              style={{ borderRadius: "50%", border: "2px solid var(--neon-cyan)", boxShadow: "0 0 10px var(--neon-cyan)" }} src={img1} ></glitch-image>
          </div>
        </div>
        <Heading color="white" fontFamily="Bungee" mt={3} fontSize={[1, 3, 4]} sx={{ textShadow: "0 0 5px var(--neon-cyan)" }} >{name} </Heading>
        <Heading color="#3fff00" fontFamily="Ubuntu" mt={2} fontSize={[1, 2, 3]} sx={{ textShadow: "0 0 5px #3fff00" }} >{position} </Heading>
        {showGithub ? socialLink(faGithub, github) : <div style={{ height: '46.25px', width: '62px' }} />}
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
          marginTop: '10px'
        }} >
        <FontAwesomeIcon icon={icon} style={{ color: 'var(--neon-pink)', fontSize: '3vmin', zIndex: 99, filter: 'drop-shadow(0 0 5px var(--neon-pink))' }} />
      </Button>
    );
  }


  return (
    <Flex width={1} flexDirection='column' style={{ margin: '0 auto', alignItems: 'center', minHeight: '100%', marginBottom: '50px' }}>
      <Text ref={h1Ref} style={{ top: 0, userSelect: 'none', cursor: 'pointer' }}
        fontFamily={'Bungee'} pt={30}
        fontSize={[2, 4, 6]}
        className="glitch-text"
        data-text="Our Team"
        sx={{ textShadow: '0 0 10px var(--neon-purple)', color: 'white' }}
      >Our team</Text>
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
          Our goal is bring more people to the <span className="half_background" style={{ background: 'transparent', color: 'var(--neon-green)', textShadow: '0 0 5px var(--neon-green)', borderBottom: '2px solid var(--neon-green)' }}>crypto wonderland</span>.
        </Text>
        <Tiles columns={[1]} sx={{ justifyItems: 'center', userSelect: 'none', marginBottom:'30px' }}>
          {personCard(avatar, avatar2, "Hao", "Founder & Developer", "https://github.com/lmcmz")}
        </Tiles>
      </Flex>
    </Flex>
  );
}

export default Team;
