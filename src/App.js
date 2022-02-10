import React from 'react';
import {Pictures} from './Pictures';
import {API_URL} from './config';

export default class App extends React.Component {

    state = {
        pictures: [],
    };

    componentDidMount(){
        fetch(API_URL)
            .then(response=>response.json())
            .then(data=>this.setState({pictures:data}))
    };

    render() {
        // TODO: implement component
        const {pictures} = this.state;
        return (
            <main className="container content">
                <h2>Imagery collected by DSCOVR's EPIC instrument</h2>
                {
                    pictures.length ? (
                        <Pictures pictures = {this.state.pictures} />
                    ) : (<h3>Loading...</h3>)
                }
                <h4>The most recent images of our planet from space, taken with the Earth Polychromatic Imaging Camera</h4><hr/>
                <h6>Pictures from the NASA-archive, where the full disc of the Earth and unique astronomical events are recorded from the Earth-Sun Lagrange point.</h6>
            </main>
        );
    };
}
