import React from 'react';

export default class TextAnswer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let type="text";
        if (this.props.number){
            type="number";
        }
        let size='col-lg-4';
        if (this.props.small) {
            size='col-lg-1';
        } else if (this.props.large) {
            size='col-lg-7';
        } else if (this.props.xlarge) {
            size='col-lg-10';
        }
        return (
            <div className="form-group">
            <label htmlFor={this.props.id}>{this.props.question}</label>
                <input id={this.props.id} className={`form-control ${size}`} type={type}/>
            </div>
        )
    }
}

module.exports = {TextAnswer};
