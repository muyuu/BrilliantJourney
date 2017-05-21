// @flow
import {connect} from 'react-redux';
import SetPlace from '../components/SetPlace';
import {fetchSuggestedPointName, clearSuggestedText} from '../actions/suggestPointName';

const mapStateToProps = (state)=>{
    return {
        suggesttedWords: state.suggestPointName,
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onChangeText: (text)=>{
            dispatch(fetchSuggestedPointName(text));
        },
        clearSuggestedText: ()=>{
            dispatch(clearSuggestedText());
        }
    };
};

const AppSetPlace = connect(
    mapStateToProps,
    mapDispatchToProps
)(SetPlace);

export default AppSetPlace;
