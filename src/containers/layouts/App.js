// @flow
import {connect} from 'react-redux';
import App from '../../layouts/App';

const mapStateToProps = (state)=>{
    return {
        direction: state.direction,
    };
};

const mapDispatchToProps = dispatch =>{
    return {};
};

const AppApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppApp;
