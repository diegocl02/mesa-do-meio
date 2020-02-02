import scene01 from './img/scene01.png'
import scene02 from './img/scene02.png'
import scene03 from './img/scene03.png'
import scene04 from './img/scene04.png'
import scene05 from './img/scene05.png'
import scene06 from './img/scene06.png'
import scene07 from './img/scene07.png'

import React from 'react'

export class Introduction extends React.Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        blockSize: 30,
        width: 20,
        height: 11,
        currenSlide: 0
    }
    componentDidMount() {
        // const timer = setInterval(() => {
        //     if (this.state.current > 6)
        //         clearInterval(timer)
        //     else
        //         this.setState({
        //             current: this.state.current + 1
        //         })
        // }, 5000)
    }
    render() {
        const imgs = [
            scene01,
            scene02,
            scene03,
            scene04,
            scene05,
            scene06,
            scene07,
        ]
        return <div className={"board"}>
            {
                <img
                    style={{ width: `${this.props.width * this.props.blockSize}px`, height: `${this.props.height * this.props.blockSize}px` }}
                    src={imgs[this.props.currentSlide]}>
                </img>
            }
        </div>
    }
}