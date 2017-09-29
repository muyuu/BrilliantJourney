import {connect} from 'react-redux';
import { fetchDirection } from '../actions';
import GoHome from '../components/GoHome';

const mapStateToProps = (state)=>{
    return {
        points: state.points,
        start: state.start,
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onClick: (start, points) =>{
            dispatch(fetchDirection(start, points));
        }
    };
};

const AppGoHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoHome);

export default AppGoHome;
