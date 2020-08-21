import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../action'

class Todo extends Component {
    render() {
        return (
            <div>
                <form>
                    <input name="note"/>
                    <button type="submit"></button>
                </form>
                <ul>
                    {this.props.list.map((item)=> (
                        <li key={item.id}>{item.text}
                        </li>
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
        newNote: () => dispatch({type: actionTypes.NEW_NOTE}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);