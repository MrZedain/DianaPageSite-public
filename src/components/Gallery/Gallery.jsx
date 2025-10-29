import React, { useEffect } from 'react';
import "./Gallery.css";
import worksConfig from "../../config/worksConfig2.json";
import ScrollToTop from '../ScrollToTop';
import { mountModal, unmountModal } from '../mountModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';




const Gallery = ({ work, pageName }) => {


  ScrollToTop();

  useEffect(() => {
    mountModal();
    return () => {
      unmountModal();
    }
  }, [work])


  // Function to create HTML markup for single image
  const createSingleElement = (image) => {
    return (
      <div className="single" key={image.title}>

        <div className="imgWrap">
          <img loading="lazy" src={image.path} alt={image.title} className="artwork" />
          <div className="imgtxt">
            <p>
              {image.title}{' '}
              {/* Display year if exists */}
              {image.year && `${image.year}`}<br />
              {/* Display type if exists */}
              {image.type && `(${image.type}) `}
              {/* Display dimensions if exists */}
              {image.dimensions.width && image.dimensions.height && `${image.dimensions.width} x ${image.dimensions.height}`}{' '}

            </p>
          </div>
        </div>

      </div>
    );
  };

  // Function to create HTML markup for pair of images
  const createPairElement = (image1, image2) => {
    return (
      <div className="pair" key={`${image1.title}-${image2.title}`}>

        <div className="imgWrap">
          <img loading="lazy" src={image1.path} alt={image1.title} className="artwork" />
          <div className="imgtxt">
            <p>
              {image1.title}{' '}
              {/* Display year if exists */}
              {image1.year && `${image1.year}`}<br />
              {/* Display type if exists */}
              {image1.type && `(${image1.type}) `}
              {/* Display dimensions if exists */}
              {image1.dimensions.width && image1.dimensions.height && `${image1.dimensions.width} x ${image1.dimensions.height}`}{' '}

            </p>
          </div>
        </div>


        <div className="imgWrap">
          <img loading="lazy" src={image2.path} alt={image2.title} className="artwork" />
          <div className="imgtxt">
            <p>
              {image2.title}{' '}
              {/* Display year if exists */}
              {image2.year && `${image2.year}`}<br />
              {/* Display type if exists */}
              {image2.type && `(${image2.type}) `}
              {/* Display dimensions if exists */}
              {image2.dimensions.width && image2.dimensions.height && `${image2.dimensions.width} x ${image2.dimensions.height}`}{' '}

            </p>
          </div>
        </div>


      </div>
    );
  };


  // Function to create HTML markup for triplet of images
  const createTripletElement = (image1, image2, image3) => {
    return (
      <div className="triplet" key={`${image1.title}-${image2.title}-${image3.title}`}>

        <div className="imgWrap">
          <img loading="lazy" src={image1.path} alt={image1.title} className="artwork" />
          <div className="imgtxt">
            <p>
              {image1.title}{' '}
              {/* Display year if exists */}
              {image1.year && `${image1.year}`}<br />
              {/* Display type if exists */}
              {image1.type && `(${image1.type}) `}
              {/* Display dimensions if exists */}
              {image1.dimensions.width && image1.dimensions.height && `${image1.dimensions.width} x ${image1.dimensions.height}`}{' '}

            </p>
          </div>
        </div>

        <div className="imgWrap">
          <img loading="lazy" src={image2.path} alt={image2.title} className="artwork" />
          <div className="imgtxt">
            <p>
              {image2.title}{' '}
              {/* Display year if exists */}
              {image2.year && `${image2.year}`}<br />
              {/* Display type if exists */}
              {image2.type && `(${image2.type}) `}
              {/* Display dimensions if exists */}
              {image2.dimensions.width && image2.dimensions.height && `${image2.dimensions.width} x ${image2.dimensions.height}`}{' '}

            </p>
          </div>
        </div>


        <div className="imgWrap">
          <img loading="lazy" src={image3.path} alt={image3.title} className="artwork" />
          <div className="imgtxt">
            <p>
              {image3.title}{' '}
              {/* Display year if exists */}
              {image3.year && `${image3.year}`}<br />
              {image3.type && `(${image3.type}) `}
              {/* Display dimensions if exists */}
              {image3.dimensions.width && image3.dimensions.height && `${image3.dimensions.width} x ${image3.dimensions.height}`}{' '}

            </p>
          </div>
        </div>

      </div>
    );
  };


  // Render gallery based on grouping property
  const arr = worksConfig[work];
  const renderGallery = () => {


    const gallery = [];
    const len = arr.length;

    for (let index = 0; index < len; index++) {
      const currentImage = arr[index];

      if (currentImage.grouping === '1') {

        gallery.push(createSingleElement(currentImage));
      } else if (currentImage.grouping === '2') {
        const nextImage = arr[index + 1];

        if (nextImage && nextImage.grouping === '2') {

          gallery.push(createPairElement(currentImage, nextImage));
          index++; // Move to the image after the pair
        } else {

          gallery.push(createSingleElement(currentImage));
        }
      } else if (currentImage.grouping === '3') {
        const nextImages = arr.slice(index + 1, index + 3).filter(img => img.grouping === '3');
        if (nextImages.length === 2) {

          gallery.push(createTripletElement(currentImage, nextImages[0], nextImages[1]));
          index += 2; // Move to the image after the triplet
        } else {

          gallery.push(createSingleElement(currentImage));
        }
      }
    }



    return gallery;


  }




  return (


    <div className="gallery">

      <p className="currentWork">{pageName}</p>

      {renderGallery()}



      {work === "Performance" && (
        <div className='performanceWrap'>
          <div className="photosList">
            <h3><u>Photographs of Performance</u></h3>
            <ul>
              <li>i. Sydelle Willow Smith, "Ek sê" performed in March 2012 as part of the "Infecting the City" <br /> Public Arts Festival hosted by the Africa Centre, Cape Town and directed by Diana Page</li>
              <li>ii. Elio Montanari, “Kadinin Sesleri Womens Voices” performed in 2007 as part of the Visibility  <br /> Project hosted by Galata Perform, Istanbul and directed by Diana Page</li>
              <li>iii. Gary van Wyk, “Pitch Blue”, performed in 2008 Red Hook Brooklyn, NYC, hosted by Axis Gallery and the Ampersand Foundation  <br />  and directed by Diana Page</li>
            </ul>
          </div>

          <div className="videosList">
            <h3><u>Videos of performances</u></h3>
            <ul>
              <li>Ek se filmed by Shelley Barry. Post-production by Bryan Little <br />
                Performers: Gabeba Baderoon, Ziya Azazi, Hlengiwe Mkhwanazi
              </li>
              <li>Pitch Blue filmed by Helen Tschudi, Klara Palotai,  Diana Page, Lisa Brittan <br />
                Performers: Sayda Trujillo, Sharla Meese, Saori Tsukada, Tammy Hall, Bara Sapir <br />
                Adapted by Hannah Oxlade for Bag Factory presentation, 2012
              </li>
              <li>Kadinin Sesleri filmed by Erdem Ayvazoglu. <br />
                Performers: Songul Can, Uma Fusun, Lisa Meyer, Joanna Wulfsberg
              </li>
            </ul>
          </div>

        </div>

      )}


      <div className="modal">
        <span className='closeModal'>&times;</span>
        <FontAwesomeIcon id="backbtn" icon={faChevronLeft} size='2xl' />
        <div className="modalContent"></div>
        <FontAwesomeIcon id="nextbtn" icon={faChevronRight} size='2xl' />

      </div>


    </div>





  );
};



export default Gallery;
