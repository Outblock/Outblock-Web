import './App.css';
import Effect from './Effect';
import WebFont from 'webfontloader';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Mission from './Mission';
import Team from './Team';
import { Box, Button, Image, Heading, Text, Flex } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import Footer from './Footer';
import { Tiles } from '@rebass/layout';

const LogoButton = styled.div`
  font-family: 'Bungee Inline';
  font-size: 3vh;
  color: white;
  user-select: none;
  cursor: pointer;
  padding: 30px;
  margin-left: 8%;
  background-color: rgba(26, 25, 28, 0.15);
  backdrop-filter: blur(2px);
  display: inline-block;
`

const Header = styled.div`
  position: fixed;
  top: 0;
  /* width: 100%; */
  z-index: 999;
  /* background-color: rgba(255, 255, 255, 0.01); */
`

const App = () => {

  // useEffect(() => {
  //   library.add(fab)
  // })

  const socialLink = (icon, link) => {
    return (
      <Button
        onClick={() => { window.open(link).focus() }}
        sx={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }} >
        <FontAwesomeIcon icon={icon} style={{ color: '#FFF500', fontSize: '5vmin', zIndex: 99 }} />
      </Button>
    );
  }

  return (
    <div className="App">
      <Header>
        <LogoButton>Out<br />block</LogoButton>
      </Header>
      <Flex flexDirection="column">
        <Flex flexDirection="column" sx={{ height: '100vh', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Effect />
          <Flex sx={{
            justifyContent: 'center',
            top: "80%",
            transform: 'matrix(1, -0.15, 0, 1, 0, -10)',
            textShadow: '0px 0px 10px #3fff00',
            shadowBlur: 30,
            position: 'absolute',
            userSelect: 'none',
          }}>

            <Tiles columns={[1, null, 3]} sx={{ justifyItems: 'center', userSelect: 'none' }}>
              {socialLink(faTwitter, 'https://twitter.com/0xOutblock')}
              {socialLink(faGithub, 'https://github.com/outblock')}
              {socialLink(faDiscord, 'https://discord.gg/DtZkFTay2U')}
            </Tiles>

          </Flex>
        </Flex>
      </Flex >
      <Flex sx={{ height: '100vh', width: '100vw' }}>
        <Mission />
      </Flex>
      <Flex sx={{
        minHeight: '80vh', width: '100vw', margin: '0 auto', display: 'block',
        marginBottom: '10px'
      }}>
        <Team />
      </Flex>
      <Flex sx={{ height: '20vh', width: '100vw', display: 'block' }} >
        <Footer />
      </Flex>
    </div >
  );
}

export default App;
