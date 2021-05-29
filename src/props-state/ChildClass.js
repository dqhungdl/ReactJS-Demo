import React from "react";
import {Card, CardContent, CardHeader, Container, Snackbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MuiAlert from '@material-ui/lab/Alert';

class ChildClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message === undefined ? 'Hello' : this.props.message,
            open: false,
            show: true,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick() {
        let newMessage;
        if (this.state.message === 'Hello') {
            newMessage = 'Goodbye';
        } else
            newMessage = 'Hello';
        this.setState({
            message: newMessage,
            open: true,
            show: !this.state.show,
        });
        this.props.updateMessage(newMessage);
    }

    handleClose() {
        this.setState({
            open: false,
        });
    }

    render() {
        return (
            <Container>
                <Card>
                    <CardHeader title={
                        <Typography variant='h3'>This is the child class</Typography>
                    }>
                    </CardHeader>
                    <CardContent>
                        {
                            this.state.show &&
                            <Typography variant='h5' style={{color: this.state.color}}>
                                Message from child class: {this.state.message}
                            </Typography>
                        }
                    </CardContent>
                </Card>
                <Button color='primary' variant='contained' onClick={this.handleClick}>Toggle this</Button>

                <Snackbar open={this.state.open} autoHideDuration={2000} onClose={this.handleClose}>
                    <MuiAlert onClose={this.handleClose} severity="success">
                        This is a message!
                    </MuiAlert>
                </Snackbar>
            </Container>
        )
    }
}

export default ChildClass;