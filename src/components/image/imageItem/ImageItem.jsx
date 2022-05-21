import PropTypes from "prop-types";
import s from "./ImageItem.module.css";

export const ImageItem = ({ id, webformatURL, largeImageURL, alt, onClick}) => {

    return (
     <li className={s.ImageGalleryItem} onClick={() => onClick(largeImageURL)} key={id}>
          < a href={largeImageURL} >
            <img src={webformatURL} alt={alt} id={id} className={s.ImageGalleryItem_image} />    
          </a>                         
     </li>
   )  
    
}

ImageItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};