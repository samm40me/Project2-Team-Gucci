import React from "react";
import axios from 'axios';
import "./App.css";
import SearchInput from './SearchInput';
import ShelterList from './ShelterList';


class App extends React.Component {

    state = { text: []}

   onSearchSubmit = async (entry) => {
        const response = await axios.get(
            `https://data.calgary.ca/resource/7u2t-3wxf.json?shelter=${entry}`
        );
        this.setState({text:response.data})
    }

    render() {
        return (
            <div className="ui container style={{marginTop:'30px'}}">
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ShelterList text={this.state.text}/>
            </div>
        )
    }
}

export default App;