import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../action'

class Todo extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.newNote(e.target.note.value);
                    e.target.note.value = "";
                }}>
                    <input name="note"/>
                    <button type="submit">Add note</button>
                </form>
                <ul>
                    {this.props.list.map((item)=> (
                        <li key={item.id} onClick={() => this.props.removeNote(item.id)}>{item.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.notes,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        newNote: (content) => dispatch({type: actionTypes.NEW_NOTE, data: content }),
        removeNote: (id) => dispatch({ type: actionTypes.REMOVE_NOTE, item: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);