import PropTypes from 'prop-types';
import { ImageGalleryItem } from "./imageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";



export const ImageGallery = ({ images, alt, onClick }) => {

        return (
            <div>
                <ul className={s.ImageGallery}>

                    {images.map(({ id, webformatURL, largeImageURL }) => (
                        <ImageGalleryItem
                            // input={this.state.input}
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
  ),
  onClick: PropTypes.func,
  alt: PropTypes.string,
};