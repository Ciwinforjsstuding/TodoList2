// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



import ListItem from './ListItem';
// import './Input-style';
// import {
//     addTodoAction,
// } from '../../actions';

const mapStateToProps = state => ({
    todos: state.todos,
});

// const mapDispatchToProps = dispatch => bindActionCreators ({
//     addTodoAction
// },dispatch);


export default connect(mapStateToProps, null)(ListItem);