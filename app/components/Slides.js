'use client'
import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from '@emotion/styled';


function Slides() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5
    }
  };
  const source = [
    { src: "/assets/trees.jpg" },
    { src: "/assets/flowers.jpg" },
    { src: "/assets/user.png" },
  ]

  const ImageSlider = styled(Carousel)`
    width: 100%;
    height: 50%;
    margin-left: 5px;
  `

  return (
    <>
    <Box style={{width:"100%",paddingLeft:"9%"}} className="bg-gray-200">
      <Box style={{width:"80%"}}>
      <ImageSlider responsive={responsive}
      swipeable={true}
      draggable={true}
      infinite={true}
      slidesToSlide={1}
      slidesToShow={1}
      arrows={false}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      className='pt-4 '
        >
        {
          source.map((data)=>{
            return(
              <img src={data.src} className='rounded-lg mt-4' style={{width:"80%",height:"60%",borderRadius:"10%"}}/>
            )
          })
        }
      </ImageSlider>
      </Box>
      </Box>
    </>
  )
}

export default Slides;