import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



import InputTodo from './InputTodo';
import './Input-style';
import {
    addTodoAction,
} from '../../actions';

// const mapStateToProps = state => ({

// });

const mapDispatchToProps = dispatch => bindActionCreators ({
    addTodoAction
},dispatch);


export default connect(null, mapDispatchToProps)(InputTodo);