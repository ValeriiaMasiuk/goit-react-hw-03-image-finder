import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"

const ImageGallery = ({images, onImageClick}) => {
    return (
        <ul>
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    img={image}
                    onImageClick={onImageClick} />
            ))}               
        </ul>
    )
}

export default ImageGallery

ImageGallery.propTypes = {
    images: PropTypes.array,
    onImageClick: PropTypes.func,
}