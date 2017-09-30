import {connect} from 'react-redux';
import {pointDuration} from '../actions';
import Point from '../components/Point';

const mapStateToProps = (state)=>{
    return {};
};

const mapDispatchToProps = dispatch =>{
    return {
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
