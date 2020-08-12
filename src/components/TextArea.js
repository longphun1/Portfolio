import React, { Component } from 'react';
import '../styles/styles.css';
class TextArea extends Component {
    render () {
        return (
            <div className='form-group'>
                <label class="form-label">Message:</label>
                <textarea name={this.props.name}
                    id={this.props.id}
                    // required={this.props.required}
                    className={this.props.className}
                    rows={this.props.row}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    placeholder="Message Here!"
                />
                <span className='error'>{this.props.error}</span>
            </div>
        )
    }
}

export default TextArea