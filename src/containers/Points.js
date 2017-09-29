import {connect} from 'react-redux';
import {addPoint} from '../actions';
import Points from '../components/Points';

const mapStateToProps = (state)=>{
    return {
        points: state.points,
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        addPoint: ()=>{
            dispatch(addPoint());
        }
    };
};

const AppPoints = connect(
    mapStateToProps,
    mapDispatchToProps
)(Points);

export default AppPoints;
