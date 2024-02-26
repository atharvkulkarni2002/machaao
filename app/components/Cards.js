'use client'
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';


function Cards() {

  const source = [
    {src:"/assets/trending.png", text:"Trending"},
    {src:"/assets/cake.png", text:"Cakes"},
    {src:"/assets/decoration.png", text:"Decorations"},
    {src:"/assets/giftbox.png", text:"Gifts"},
    {src:"/assets/postman.png", text:"Hire MUA"},
    {src:"/assets/cameraman.png", text:"Video Grapher"},
    {src:"/assets/photographer.png", text:"Photo Grapher"},
    {src:"/assets/menu.png", text:"View All"},
  ];

  const CardContainer = styled(Box)`
    display: grid;
    grid-template-columns: repeat(4,20%);
    justify-content: space-around;
    margin-top: 10%;
    text-align: center;
    width: 85%;
    padding-left: 8%;
  `

  const CardHolder = styled(Box)`
    border-radius: 10%;
    background-color: #e5e7eb;
    margin-bottom: 10%;
    padding: 6%;
  `

  const TextWrapper = styled(Typography)`
    margin-top: 5%;
    margin-bottom: 5%;
    font-weight: 600;
    font-size: large;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `

  return (

    <>
    <CardContainer>
      {
        source.map((data)=>{
           return(
           <CardHolder>
             <img src={data.src} style={{width:"70%",height:"60%",margin:"auto"}}/>
             <TextWrapper>{data.text}</TextWrapper>
           </CardHolder>)
        })
      }
    </CardContainer>
    
    </>
  )
}

export default Cards