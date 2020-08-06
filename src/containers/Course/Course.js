import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: null
    }

    componentDidMount () {
        this.loadData();
    }

    componentDidUpdate () {
        this.loadData();
    }

    loadData () {
        if (!this.props.location.query) {
            this.props.history.goBack();
        } else {
            if (this.state.title !== this.props.location.query.title) {
                this.setState({title: this.props.location.query.title});
            }
        }   
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;