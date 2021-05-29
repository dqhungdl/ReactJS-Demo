import React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class ComponentLifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
        this.state = {
            show: true,
        };
    }

    //*********************************Mounting*******************************************
    // Right before rendering
    // Use to set the state base on initial props
    static getDerivedStateFromProps(props, state) {
        console.log('Get derived state from props');
        return state;
    }

    // After rendering
    // Use to run statements that requires component is already placed in DOM
    componentDidMount() {
        console.log('Component did mount');
    }

    // Return a boolean value that specifies whether React should continue to render or not
    // Default return value is true
    shouldComponentUpdate() {
        console.log('Should component update');
        return true;
    }

    // Get previous state before updating
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get snapshot before update');
        return prevState;
    }

    // Update the component
    componentDidUpdate() {
        console.log('Component did update');
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    handleClick() {
        this.setState({
            show: !this.state.show,
        });
    }

    render() {
        console.log('Render');
        return (
            <>
                {
                    this.state.show &&
                    <Typography variant='h3'>Component life cycle</Typography>
                }
                <Button variant='outlined' onClick={() => this.handleClick()}>Update</Button>
            </>
        );
    }
}

export default ComponentLifeCycle;