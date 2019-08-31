import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { checkbox } from './CheckBox';
import { searchQuery, searchLoading, searchResults, activeRow } from '../reducers/SearchInput';
import { newDDStatus, newDDOption } from '../reducers/NewDropDown';
import { reps, isCreate } from '../reducers/Reps';
import { rep } from '../reducers/Rep';
import { actRow } from '../reducers/ActiveRow';




const RootReducer = combineReducers({
    isCreate,
    actRow,
    rep,
    reps,
    checkbox,
    newDDStatus,
    newDDOption,
    activeRow,
    searchQuery,
    searchLoading,
    searchResults,
    loginSpinner,
    notificationCss,
    notificationText,
    dropdownStatus,
    dropdownOption,
    
});


export default RootReducer;