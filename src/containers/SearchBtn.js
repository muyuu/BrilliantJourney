import {connect} from 'react-redux';
import {fetchSearch} from '../actions';
import SearchBtn from '../components/SearchBtn';

const mapStateToProps = (state)=>{
    return {
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        addPoint: ()=>{
            dispatch(fetchSearch());
        }
    };
};

const AppSearchBtn = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBtn);

export default AppSearchBtn;
