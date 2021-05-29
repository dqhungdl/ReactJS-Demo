import React from 'react';
import ChildClass from "./ChildClass";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";

class ParentsClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello',
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage(message) {
        this.setState({
            message: message,
        });
    }

    render() {
        return (
            <>
                <Container>
                    <Typography variant='h1'>Parents class</Typography>
                    <Typography variant='h6'>{this.state.message}</Typography>
                    <ChildClass message='Hello from parents class'
                                updateMessage={this.updateMessage}/>
                </Container>
            </>
        );
    }
}

export default ParentsClass;