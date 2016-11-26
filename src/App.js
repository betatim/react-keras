import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import 'keras-js';
import './App.css';


class ImageItem extends Component {
  render() {
    
    const file = this.props.file
    return (
      <li key={file.name}>
        <img
          src={file.preview}
          alt={file.name}
          width="60%"
        />
      </li>
  )}
}

class ImageList extends Component {
  render() {
    return (
      <ul>
        {this.props.images.map(
          (file) => <ImageItem file={file} />
          )
        }
      </ul>
    )
  }
}

class ImageClassifier extends Component {
  constructor() {
    super();
    this.state = {
      files: [],
    }
    // Otherwise handleDrop can't modify the state
    this.handleDrop = this.handleDrop.bind(this)
  }
  handleDrop(files) {
    this.setState({files: files});
  }

  handleOpenClick() {
    this.refs.dropzone.open()
  }

  render() {
    return (
      <div>
        <DropZone onDrop={this.handleDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </DropZone>
        {this.state.files.length > 0 ?
          <div>
            <ImageList images={this.state.files} />
          </div>
        : null}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Fake Image Classifier</h2>
        </div>
        <div>
          <ImageClassifier />
        </div>
      </div>
    );
  }
}

export default App;
