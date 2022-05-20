import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

class Modal extends Component {
  
  componentDidMount() {
    window.addEventListener("keydown", this.onEscClick)
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.onEscClick)
  };
  onEscClick = e => {
    if (e.code === "Escape") {
      this.props.isShown();
    }
  };
  onBtnClick = e => {
    if (e.currentTarget === e.target) {
      this.props.isShown()
    }
  };

  render() {
    const { src, alt } = this.props;

    return (
        <div className={s.Overlay} onClick={this.onBtnClick}>
         <div className={s.Modal}>
           <img src={src} alt={alt} />
         </div>
       </div>
      )}    
}

Modal.propTypes = {
    isShown: PropTypes.func,
    src: PropTypes.string,
    alt: PropTypes.string,
  };

export default Modal;