// @flow
import {connect} from 'react-redux';
import Body from '../../layouts/Body';

const mapStateToProps = (state)=>{
    return {
        siteInfo: state.siteInfo,
    };
};

const mapDispatchToProps = dispatch =>{
    return {};
};

const AppBody = connect(
    mapStateToProps,
    mapDispatchToProps
)(Body);

export default AppBody;
