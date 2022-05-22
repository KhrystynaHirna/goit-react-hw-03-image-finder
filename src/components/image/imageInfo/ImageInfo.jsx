import React, { Component } from "react";
import { ImagesService } from "../../api/Api";
import { ImageGallery } from "../ImageGallery";
import Modal from "../../modal/Modal";
import { Button } from "../../button/Button";
import  Loader  from "../../loader/Loader";



export default class ImageInfo extends Component {

    static defaultProps = {
        initialPage: 1,
    };

    state = {
        input: "",
        images: [],
        largeImageURL: "",
        isShown: false,
        enabled: false,
        page: this.props.initialPage,
    }

      componentDidUpdate(prevProps, prevState) {
        if (prevProps.input !== this.props.input) {
            this.setState({ images: [], enabled: true });
            ImagesService(this.props.input, this.state.page)
                .then(images => {
                    this.setState({ images })
                }).finally(() => this.setState({ enabled: false }));  
        }     
          if (this.state.input === prevState.input && this.state.page !== prevState.page) {
              this.setState({ enabled: true });
              ImagesService(this.state.input, this.state.page)
                  .then(images => {
                      this.setState({ images: [...prevState.images, ...images] })
                  }).finally(() => this.setState({ enabled: false }));
          }
      }
    
   
    handleBtnClick = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }))
    };

    toggleModal = () => {
        this.setState(({ isShown }) => ({
            isShown: !isShown,
        }))
    };
    
    openImage = (largeImageURL) => {
        this.setState({ largeImageURL });
        this.toggleModal();
    }
    
    render() {
        const { page, images, input, largeImageURL, isShown, enabled } = this.state;

    return (
        <div>
            {page === 1 && <Loader enabled={enabled} />}
            {images && <ImageGallery images={images} alt={input} onClick={this.openImage} />}
            {page > 1 && <Loader enabled={enabled} />}
            {images && images.length > 0 && <Button onClick={this.handleBtnClick} />}
            {isShown && <Modal isShown={this.toggleModal} src={largeImageURL} alt={input} />}

        </div>
    )
    }
    
}