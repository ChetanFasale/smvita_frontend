import React, { useState } from "react";



import ReactBnbGallery from 'react-bnb-gallery';
import  styled  from  'styled-components';
import 'react-bnb-gallery/dist/style.css'
const files = [
  {
    name: "Kids",
    thumb:
      "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=427&q=80 427w",
    file:
      "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?rnd=" +
      Math.random(),
    filename: "photo-1.jpg",
  },
  {
    name: "Comrades",
    thumb:
      "https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80 401w",
    file:
      "https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?rnd=" +
      Math.random(),
    filename: "photo-2.jpg",
  },
  {
    name: "E-Vengers",
    thumb:
      "https://images.unsplash.com/photo-1604264849633-67b1ea2ce0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 750w",
    file:
      "https://images.unsplash.com/photo-1604264849633-67b1ea2ce0a4?rnd=" +
      Math.random(),
    filename: "photo-3.jpg",
  },
];

const Gallery = () => {
  
  const [isOpen, setIsOpen] = useState(false);



  const images = [
    'https://picsum.photos/id/1018/1000/600/',
    'https://picsum.photos/id/1015/1000/600/'
  ];


  


  return (
    <>


      <div className="row">
        <div className="col text-center">
          <h2>Image Gallery</h2>
          <div className="row mt-3">
            {files.map((file, idx) => (
              <div className="col" key={idx}>
                <div className="card ">
                  <div className="card-body" key={idx}>
                    <a onClick={() => setIsOpen(true)}>
                      <img className="card-img-top mb-3" src={file.thumb} />
                    </a>
                    <ReactBnbGallery
                      show={isOpen}
                      photos={images}
                      onClose={() => setIsOpen(false)}
                    />
                    <h5 className="card-title">{file.name}</h5>


                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <ReactBnbGallery
        
        photo={images}
       
      />
      </div>
     
    </>
  );
};

export default Gallery;
