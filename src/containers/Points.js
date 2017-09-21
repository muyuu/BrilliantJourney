import {connect} from 'react-redux';
import Points from '../components/Points';

const mapStateToProps = (state)=>{
    return {
        points: state.points,
    };
};

const mapDispatchToProps = dispatch =>{
    return {
    };
};

const AppPoints = connect(
    mapStateToProps,
    mapDispatchToProps
)(Points);

export default AppPoints;
