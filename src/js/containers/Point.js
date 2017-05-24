import {connect} from 'react-redux';
import {pointArrivedAt, pointDuration} from '../actions/points';
import Point from '../components/Point';

const mapStateToProps = (state)=>{
    return {};
};

const mapDispatchToProps = dispatch =>{
    return {
        onChangeArrivedAt: (id, arrivedAt)=>{
            dispatch(pointArrivedAt(id, arrivedAt));
        },
        onChagenDuration: (id, duration)=>{
            dispatch(pointDuration(id, duration));
        },
    };
};

const AppPoint = connect(
    mapStateToProps,
    mapDispatchToProps
)(Point);

export default AppPoint;
