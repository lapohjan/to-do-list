import React, {Component} from 'react';
import { connect } from 'react-redux';
import "../App.css";

import * as actionTypes from '../action'

class Todo extends Component {
    render() {
        return (
            <div>
                <div className="container_1">
                <form className="addNote" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.newNote(e.target.note.value);
                    e.target.note.value = "";
                }}>
                    <input name="note"/>
                    <button type="submit">Add note</button>
                </form>
                </div>
                <div className="container_2">
                <div className="todo-list">
                <ul>
                    {this.props.list.map((item)=> (
                        <li className="todo" key={item.id} onClick={() => this.props.removeNote(item.id)}>{item.text}</li>
                    ))}
                </ul>
                </div>
                </div>
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