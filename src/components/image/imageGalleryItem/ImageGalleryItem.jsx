import s from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, alt, onClick}) => {

    return (

        <li className={s.ImageGalleryItem} onClick={() => onClick(largeImageURL)} key={id}>
        < a href={largeImageURL} >
         <img src={webformatURL} alt={alt} id={id} className={s.ImageGalleryItem_image} />    
        </a>                         
    </li>
   )  
    
}

