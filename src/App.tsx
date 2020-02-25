import * as React from 'react';
import Form from './components/Form/Form';
import { connect } from 'react-redux';

interface AppProps {
    testStore: string[];
    onAddTrack(trackInput: string): void;
}

class App extends React.Component<AppProps> {
    trackInput: HTMLInputElement;
    addTrack(): void {
        console.log('add track', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }
    render() {
        console.log(this.props.testStore);
        return (
            <div>
                <input type='text' ref={(input) => { this.trackInput = input }} />
                <button onClick={this.addTrack.bind(this)}>Add track</button>
                <ul>
                    {this.props.testStore.map((track, index) =>
                        <li key={index}>{track}</li>
                    )}
                </ul>
            </div>
            // <Form />
        )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTrack: (trackName: string) => {
            dispatch({ type: 'ADD_TRACK', payload: trackName })
        }
    })
)(App);