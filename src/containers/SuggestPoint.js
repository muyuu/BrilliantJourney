// @flow
import {connect} from 'react-redux';
import {
    fetchPoint,
    clearSuggestedText,
    applyMap,
    pointPlace,
} from '../actions';
import SuggestPoint from '../components/SuggestPoint';

const mapStateToProps = (state)=>{
    return {
        suggesttedWords: state.suggestPointName,
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        fetchPoint: (id, text)=>{
            dispatch(fetchPoint(id, text));
        },
        setInputedText: (id, placeInfo)=>{
            dispatch(pointPlace(id, placeInfo));
            dispatch(applyMap(id, placeInfo));
        },
        clearSuggestedText: (id)=>{
            dispatch(clearSuggestedText(id));
        }
    };
};

const AppSetPlace = connect(
    mapStateToProps,
    mapDispatchToProps
)(SuggestPoint);

export default AppSetPlace;
