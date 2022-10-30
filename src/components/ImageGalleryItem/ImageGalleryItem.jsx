import PropTypes from 'prop-types';

const ImageGalleryItem = ({ img, onImageClick }, { key }) => {
    return (
            <li key={key}>
            <img src={img.webformatURL} alt={img.tags} onClick={onImageClick} />
            </li>
    )
}

export default ImageGalleryItem

ImageGalleryItem.propTyes = {
    key: PropTypes.number,
    onImageClick: PropTypes.func,
    img: PropTypes.object,
}