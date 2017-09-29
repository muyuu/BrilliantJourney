import {connect} from 'react-redux';
import {pointDepartureTime} from '../actions';
import Start from '../components/Start';

const mapStateToProps = (state)=>{
    return {
        start: state.start,
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onChangeDepartureTime: (id, departureTime)=>{
            dispatch(pointDepartureTime(id, departureTime));
        },
    };
};

const AppStart = connect(
    mapStateToProps,
    mapDispatchToProps
)(Start);

export default AppStart;
