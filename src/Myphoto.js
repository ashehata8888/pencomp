import React, { useEffect, useState } from 'react';

const Myphoto = () => {
//   const [listOfImages, setListOfImages] = useState([]);

//   const importAll = (r) => {
//     return r.keys().map(r);
//   };

//   useEffect(() => {
//     const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
//     setListOfImages(images);
//   }, []);

//   return (
//     <div>
//       {listOfImages.map((image, index) => (
//         <img key={index} src={image} alt="info" />
//       ))}
//     </div>
//   );

useEffect(() => {
    const reloadPage = () => {
      window.location.reload();
    };

    const reloadInterval = setInterval(reloadPage, 5 * 60 * 1000); // 5 minutes in milliseconds

    // Clean up the interval on unmount
    return () => {
      clearInterval(reloadInterval);
    };
  }, []);

  



const [photoUrls, setPhotoUrls] = useState([]);

useEffect(() => {
  const fetchPhotos = async () => {
    try {
      const folderId = '1hZ_pxIUtij7pHZu-HmOjuf99WhRFWdPZ';
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&key=AIzaSyD8aKO__pH9WRXGr2055rgde0zNWAbz-bM`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      const photos = data.files.map((file) => {
        return `https://drive.google.com/uc?id=${file.id}`;
      });
      
      setPhotoUrls(photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };
  
  fetchPhotos();
}, []);

return (
  <div>
    {photoUrls.map((url, index) => (
      <img style={{width:"200vh"}}  key={index} src={url} alt="Photo" />
    ))}
  </div>
);





};

export default Myphoto;