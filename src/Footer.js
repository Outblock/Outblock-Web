import React, { useRef, useEffect } from 'react';
import Ring from './Component/Ring.js'
import { Box, Button, Image, Heading, Text, Flex, Card } from 'rebass';
import CircleType from 'circletype';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpinnerText = styled.text`
text-anchor:"middle";
/* alignment-baseline:"middle"; */
transform-origin: center;
animation: rotate 15s infinite linear;
`

const RespinnerText = styled.text`
text-anchor:"middle";
/* alignment-baseline:"middle"; */
transform-origin: center;
animation: rotate 30s infinite linear reverse;
`

const Footer = () => {

  // const contactRef = useRef(null)
  // const contactRef2 = useRef(null)

  // useEffect(() => {
  //   const circleType = new CircleType(contactRef.current)
  //   const circleType2 = new CircleType(contactRef2.current)
  // }, [])

  return (
    <Flex flexDirection="column" sx={{ width: '100%', height: '100%', background: '#303030', justifyContent: 'space-evenly' }}>
      {/* <Text ref={contactText} sx={{ color: '#B6B6B6', fontFamily: "Ubuntu", fontweight: 'bold' }}> Contact us </Text> */}
      {/* <Flex style={{
        // justifyContent: 'center',
        // position: 'absolute',
        // alignItems: 'center',
        // color: 'white',
        // textShadow: '0px 0px 5px #fff',
      }}>
        <SpinnerText ref={contactRef}> Contact us Contact us Contact us </SpinnerText>
        <RespinnerText ref={contactRef2}> Contact us Contact</RespinnerText>
      </Flex> */}
      <Flex sx={{
        margin: '0 auto', width: "80%",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center'
      }}>
        <Flex w={1 / 2} sx={{ alignItems: 'center' }}>
          <Ring />
          <Text style={{
            color: 'white',
            fontFamily: "Bungee Shade",
            fontWeight: 'bold',
            fontSize: '3vmin',
            textDecoration: 'none',
            textAlign: 'center',
            paddingLeft: '10px',
          }}>Get in touch</Text>
        </Flex>
        <Flex sx={{ alignItems: 'center' }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '3vmin', zIndex: 99, paddingRight: '10px', }} />
          <a href="mailto:info@outblock.io"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: "Ubuntu",
              fontWeight: 'bold',
              fontSize: '2vmin',
              textDecoration: 'none',
              textAlign: 'center'
            }}>
            info@outblock.io
          </a>
        </Flex>
      </Flex>
      <Text sx={{
        color: '#B6B6B6',
        fontFamily: "Ubuntu",
        fontWeight: 'bold',
        fontSize: '1.9vmin',
        textAlign: 'center',
      }}> Copyright © Outblock 2022 </Text>
      <Text sx={{
        color: '#B6B6B6',
        fontFamily: "Ubuntu",
        fontWeight: 'bold',
        fontSize: '1.5vmin',
        textAlign: 'center',
      }}> Made with
        <span style={{ textDecoration: 'line-through' }}> Love 😻 </span>
        <span> CODE ⌨️</span> </Text>
    </Flex>
  );
}

export default Footer;