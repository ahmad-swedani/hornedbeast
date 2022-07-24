import React from 'react';

function Main(){

    const hbArray = [{
      "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      "title": "UniWhal",
      "description": "A unicorn and a narwhal nuzzling their horns",
      "keyword": "narwhal",
      "horns": 1
    },
  
    {
      "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
      "title": "Rhino Family",
      "description": "Parent rhino with two babies",
      "keyword": "rhino",
      "horns": 2
    },
    
    {
      "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
      "title": "Unicorn Head",
      "description": "Someone wearing a very silly unicorn head mask",
      "keyword": "unicorn", 
      "horns": 1
  }];
  
  
    return <HornedBeast title={hbArray[0].title} imageurl={hbArray[0].image_url} description={hbArray[0].description} titleOne={hbArray[1].title} imageurlOne={hbArray[1].image_url} descriptionOne={hbArray[1].description} titleTwo={hbArray[2].title} imageurlTwo={hbArray[2].image_url} descriptionTwo={hbArray[2].description}/>;
  }
  
  function HornedBeast(props){
    
    return(
      <>
        <div>
          <h2>{props.title}</h2>
          <img src={props.imageurl} alt ='HornedBeast'></img>
          <p>{props.description}</p>
        </div>
        <div>
          <h2>{props.titleOne}</h2>
          <img src={props.imageurlOne} alt ='HornedBeast'></img>
          <p>{props.descriptionOne}</p>
        </div>
        <div>
          <h2>{props.titleTwo}</h2>
          <img src={props.imageurlTwo} alt ='HornedBeast'></img>
          <p>{props.descriptionTwo}</p>
        </div>
      </>
    );
  
   
  }
  
  export default Main;