import React, { Component } from "react";
import s from "./Searchbar.module.css";
import Notiflix from "notiflix";

class Searchbar extends Component {

    state = {
        input: ""
    };
    handleChange = e => {
        this.setState({ input: e.currentTarget.value.toLowerCase() })
    };
    handleSubmit = e => {
      e.preventDefault();
      if (this.state.input.trim() === "") {
        Notiflix.Notify.warning("Please enter something");
        return;
      }

        this.props.onSubmit(this.state.input);
        this.setState({ input: "" });
    };

    render() {

    return (
<header className={s.Searchbar}>
  <form className={s.SearchForm } onSubmit={this.handleSubmit}>
    <button type="submit" className={s.SearchForm_button} >
      <span className={s.SearchForm_button_label}>Search</span>
    </button>

    <input
      className={s.SearchForm_input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
      value={this.state.input}
    />
  </form>
</header>   

)}
    
}

export default Searchbar;