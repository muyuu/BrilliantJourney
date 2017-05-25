// @flow
import {connect} from 'react-redux';
import SuggestPoint from '../components/SuggestPoint';
import {fetchPoint, clearSuggestedText} from '../actions/suggestPoint';
import {pointPlace} from '../actions/points';

const mapStateToProps = (state)=>{
    return {
        suggesttedWords: state.suggestPointName,
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onChangeText: (id, text)=>{
            dispatch(fetchPoint(id, text));
        },
        onApply: (id, placeInfo)=>{
            dispatch(pointPlace(id, placeInfo));
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
