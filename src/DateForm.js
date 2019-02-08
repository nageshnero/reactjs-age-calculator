import React, { Component } from 'react';

class DateForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let birthday = document.getElementById('birthday').value;
        this.props.addDate(birthday);
    }

    render() {
        return (
            <div className="text-center align-self-center">
                <h1>Input Your Birthday!</h1>
                <form onSubmit={this.handleSubmit} className="form-inline">
                    <div className="form-group">
                        <input id="birthday" type="date" className="form-control"/>
                        <button type="submit" className="btn btn-default" >Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default DateForm;