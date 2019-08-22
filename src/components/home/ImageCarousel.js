import React from 'react';


class ImageCarsouel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSrcPath: [
                'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg',
                'https://images.pexels.com/photos/192364/pexels-photo-192364.jpeg'
            ],
            index: 0
        }
    }
    componentWillMount() {
        setInterval(() => {
            this.setState((prevState) => {
                return {
                    index: (prevState.index + 1) % this.state.imageSrcPath.length
                }
            })
        }, 5000)
    }
    render() {
        return (
            <div className='carousel-image-wrapper'>
                <img className='carousel-image' src={this.state.imageSrcPath[this.state.index]}/>
            </div>
        );
    };
};

export default ImageCarsouel;