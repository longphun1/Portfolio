import React, { Component } from 'react';
import '../styles/styles.css';
class Input2 extends Component {
    render () {
        return (
            <div className='form-group'>
                <label class="form-label">Email: <span className='error'>{this.props.error}</span></label>
                <input 
                    type={this.props.type}
                    name={this.props.name}
                    className={this.props.className}
                    // required={this.props.required}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    placeholder="Please Enter Email (required)"
                />
            </div>
        )
    }
}

export default Input2