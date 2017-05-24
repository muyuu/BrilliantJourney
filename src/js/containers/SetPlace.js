// @flow
import {connect} from 'react-redux';
import SetPlace from '../components/SetPlace';
import {fetchSuggestedPointName, clearSuggestedText} from '../actions/suggestPointName';
import {pointPlace} from '../actions/points';

const mapStateToProps = (state)=>{
    return {
        suggesttedWords: state.suggestPointName,
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onChangeText: (id, text)=>{
            dispatch(fetchSuggestedPointName(id, text));
        },
        onApplyText: (id, text)=>{
            dispatch(pointPlace(id, text));
        },
        clearSuggestedText: (id)=>{
            dispatch(clearSuggestedText(id));
        }
    };
};

const AppSetPlace = connect(
    mapStateToProps,
    mapDispatchToProps
)(SetPlace);

export default AppSetPlace;
