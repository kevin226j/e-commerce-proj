import React from 'react'
import ReactDOM from 'react-dom'
import Input from '../presentational/Input.jsx'

export default class FormContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    renter() {
        const {title} = this.state;
        return (
            <form id="article-form">
                <Input
                    text="Title"
                    label="Title"
                    type="text"
                    id="title"
                    value={title}
                    handleChange = {this.handleChange}
                />
            </form>
        );
    }
}