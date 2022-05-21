import PropTypes from 'prop-types';
import { ImageItem } from "./imageItem/ImageItem";
import s from "./ImageGallery.module.css";



export const ImageGallery = ({ images, alt, onClick }) => {

        return (
            <div>
                <ul className={s.ImageGallery}>

                    {images.map(({ id, webformatURL, largeImageURL }) => (
                        <ImageItem
                            key={id}
                            id={id}
                            webformatURL={webformatURL}
                            largeImageURL={largeImageURL}
                            alt={alt}
                            onClick={onClick}
                        /> ))}          
               </ul>
           </div>      
        )   
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};