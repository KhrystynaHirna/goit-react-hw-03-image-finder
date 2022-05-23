import { Component } from "react";
import Searchbar from "../searchbar/Searchbar";
import ImageInfo from "../image/imageInfo/ImageInfo";
import s from "./App.module.css";


class App extends Component {
    state = {
        input: "",
    }

     handleFormSubmit = (input) => {
        this.setState({ input, page: 1 });
     };
    

    render() {
        const { input } = this.state;

        return (
            <div className={s.App}>
                <Searchbar onSubmit={this.handleFormSubmit}/>
                <ImageInfo input={input} />  
            </div>
        )}
}

export default App;