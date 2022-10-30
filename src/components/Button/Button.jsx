
const LoadMoreButton = ({onClick}) => {
    return (
        <button type="button" onClick={onClick}>Load more</button>
    )
}

export default LoadMoreButton
// При нажатии на кнопку Load more должна догружаться следующая порция изображений
// и рендериться вместе с предыдущими. Кнопка должна рендерится только тогда, когда
// есть какие-то загруженные изобаржения. Если массив изображений пуст, кнопка не
// рендерится.