import React from 'react';
import {useRef, useEffect, useState} from 'react'

const Canvas = ( {height, width} ) => {

  const { innerWidth: innerwidth, innerHeight: innerheight } = window;
  const contextRef= useRef()
  const [placement, setPlacement] = useState({position: {x:100,y:100}, width:30,height:30, velocity: {x:0, y:0}})

  const gravity = 4.5

  const draw = (context) => {
    context.fillStyle = 'red'
    context.fillRect(placement.position.x, placement.position.y, placement.width, placement.height);
  }; 

  const update = (context, canvas) => {
    draw(context)
    setPlacement(placement.position.y += placement.velocity.y)
    if(placement.position.y+placement.height+placement.velocity.y <= canvas.height){
      setPlacement(placement.velocity.y += gravity)
    }else{
      setPlacement(placement.velocity.y = 0)
    }
  }

  const animate = (context, width, height, canvas ) => {
    requestAnimationFrame(() => { animate(context, width, height, canvas ) })
    context.clearRect(0, 0, width, height)
    update(context, canvas)
  } 

  useEffect(() => {
    const canvas = contextRef.current;
    const context = canvas.getContext("2d");
    canvas.width= innerwidth
    canvas.height= innerheight
    animate(context, canvas.width, canvas.height, canvas)
  }, []);
  
  
  return (
    <canvas ref={contextRef} />
  );
};


export default Canvas;