import { Component } from "react"; 
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSearch } from "react-icons/ai";


class Searchbar extends Component {
  state = {
    inputValue: ''
  }

  handleInputChange = evt => {
    this.setState({inputValue: evt.currentTarget.value.toLowerCase()})
  }

  handleSubmit = evt => {
    evt.preventDefault()

    if (this.state.inputValue.trim() === '') {
      return toast.error('Pls, enter data to search')
    }
    this.props.onSubmit(this.state.inputValue)
    this.setState({inputValue: ''})
  }
 
render() {
    return (          
          <header>
            <form onSubmit={this.handleSubmit}>
              <button type="submit">
                <AiOutlineSearch/>
              </button>

              <input
                type="text"
                autoComplete="off"
                autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.inputValue}
              />
              </form>
            </header>
  );
  }

};

export default Searchbar;



// Компонент принимает один проп onSubmit - функцию для передачи значения инпута
// при сабмите формы. Создает DOM-элемент следующей структуры.

// <header class="searchbar">
//   <form class="form">
//     <button type="submit" class="button">
//       <span class="button-label">Search</span>
//     </button>

//     <input
//       class="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />

//   </form>
// </header>