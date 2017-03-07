import React from 'react';
import { Carousel } from 'antd';

const Banner = () => (
		<Carousel autoplay>
		    <div><img src="../img/1.jpg" className="m-banner"/></div>
		    <div><img src="../img/5.jpg" className="m-banner"/></div>
		    <div><img src="../img/3.jpg" className="m-banner"/></div>
		    <div><img src="../img/6.jpg" className="m-banner"/></div>
		</Carousel>
    );
export default Banner;