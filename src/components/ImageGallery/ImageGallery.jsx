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