const ImageGalleryItem = ({img, onImageClick}, {key}) => {
    return (
            <li key={key}>
            <img src={img.webformatURL} alt={img.tags} onClick={onImageClick} />
            </li>
    )
}

export default ImageGalleryItem
