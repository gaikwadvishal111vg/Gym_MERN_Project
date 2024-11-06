import React from 'react'

const Gallery = () => {
  const gallery = ["/img1.jpeg","/img2.jpeg","/img3.jpeg","/img4.jpg","/img5.jpg","/img6.jpg","/img7.jpg","/img8.jpg","/img9.jpeg"];
  return (
  <section className='gallery'>
<h1>See the Progress, Feel the Power</h1>
<div className='images'>
  <div>
    {
      gallery.slice(0,3).map((element, index) => (
        <img key={index} src={element} alt="galleryImages" />
      ))
    }
  </div>
  <div>
    {
      gallery.slice(3,6).map((element, index) => (
        <img key={index} src={element} alt="galleryImages" />
      ))
    }
  </div>
  <div>
    {
      gallery.slice(6,9).map((element, index) => (
        <img key={index} src={element} alt="galleryImages" />
      ))
    }
  </div>
</div>
  </section>
  );
}

export default Gallery