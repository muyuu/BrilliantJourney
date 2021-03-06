// @flow
import { connect } from 'react-redux';
import Map from '../../layouts/Map';

const mapStateToProps = (state)=>{
    return {
        siteInfo: state.siteInfo,
        map: state.map,
        directionResult: state.direction.directionResult,
    };
};

const mapDispatchToProps = dispatch =>{
    return {};
};

const AppMap = connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);

export default AppMap;
