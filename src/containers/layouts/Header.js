// @flow
import {connect} from 'react-redux';
import Header from '../../layouts/Header';

const mapStateToProps = (state)=>{
    return {
        siteInfo: state.siteInfo,
    };
};

const mapDispatchToProps = dispatch =>{
    return {};
};

const AppHeader = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default AppHeader;
