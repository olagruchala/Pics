import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spanNum: null };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spanNum = Math.ceil(height / 10)
    this.setState({
      spanNum: spanNum
    });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spanNum}` }}>
        <img ref={this.imageRef} src={this.props.url} alt={this.props.description}/>
      </div>
    )

  }
}

export default ImageCard;
