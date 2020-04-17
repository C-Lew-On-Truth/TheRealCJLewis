import React from 'react';


function rect(props) {
    const { ctx, x, y, width, height } = props;
    ctx.fillRect(x, y, width, height);
}

class Canvas extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }

    componentDidUpdate() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(700,700, 300, 300);
        //child components
        rect({ ctx, x: 10, y: 10, width: 50, height: 50});
        rect({ ctx, x: 100, y: 200, width: 50, height: 50});
        rect({ ctx, x: 300, y: 100, width: 50, height: 50});
     
    }
    render() {
        return(
           <canvas style={{backgroundColor: "white" }} ref="canvas" width={700} height={700} />
        )
    }
}


export default Canvas 