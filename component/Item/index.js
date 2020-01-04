import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Item from './Item';
import './Item-style';
import {
    changeTextToDoAction
} from '../../actions';

const mapDispatchToProps = dispatch => bindActionCreators ({
    changeTextToDoAction
},dispatch);

export default connect(null, mapDispatchToProps)(Item);