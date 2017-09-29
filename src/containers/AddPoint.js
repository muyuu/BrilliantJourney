import {connect} from 'react-redux';
import {addPoint} from '../actions';
import AddPoint from '../components/AddPoint';

const mapStateToProps = (state)=>{
    return {
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        addPoint: ()=>{
            dispatch(addPoint());
        }
    };
};

const AppAddPoint = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPoint);

export default AppAddPoint;
