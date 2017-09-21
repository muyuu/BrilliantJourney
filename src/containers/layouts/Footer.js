// @flow
import {connect} from 'react-redux';
import Footer from '../../layouts/Footer';

const mapStateToProps = (state)=>{
    return {
        siteInfo: state.siteInfo,
    };
};

const mapDispatchToProps = dispatch =>{
    return {};
};

const AppFooter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default AppFooter;
