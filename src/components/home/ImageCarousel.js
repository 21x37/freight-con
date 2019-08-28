import React from 'react';


class ImageCarsouel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSrcPath: [
                'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg',
                'https://images.pexels.com/photos/192364/pexels-photo-192364.jpeg',
                'https://images.unsplash.com/photo-1562811950-41d4a4944a4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                'https://images.unsplash.com/photo-1492168732976-2676c584c675?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
                'https://images.unsplash.com/photo-1541969487406-1f1adf3884ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80'
            ],
            index: 0
        }
    }
    componentWillMount() {
        setInterval(() => {
            this.setState((prevState) => {
                return {
                    index: (prevState.index + 1) % this.state.imageSrcPath.length,
                    fadeOut: false
                }
            })
        }, 5000)
        setInterval(() => {
            this.setState({ fadeOut: true })

        }, 4200)
    }
    render() {
        return (
            <div className='carousel-image-wrapper'>
                <img className={`carousel-image animated fadeIn ${this.state.fadeOut? 'fadeOut' : '' }`} src={this.state.imageSrcPath[this.state.index]}/>
            </div>
        );
    };
};

export default ImageCarsouel;