import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            this.props.onClose();
            }
    }

    handleBackdropClick = evt => {
        if (evt.target.nodeName === 'DIV') {
            this.props.onClose()
        }
    }

    render() {
        return createPortal(
            <div onClick={this.handleBackdropClick}>
                <div>
                    <img src={this.props.image} alt="" />
                </div>
        </div>,
            modalRoot
        );
    }
}

export default Modal

// При клике по элементу галереи должно открываться модальное окно с темным
// оверлеем и отображаться большая версия изображения. Модальное окно должно
// закрываться по нажатию клавиши ESC или по клику на оверлее.
