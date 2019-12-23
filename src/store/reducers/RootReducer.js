import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { checkbox } from './CheckBox';
import { searchQuery, searchLoading, searchResults, activeRow } from '../reducers/SearchInput';
import { newDDStatus, newDDOption } from '../reducers/NewDropDown';
import { reps, isCreate, showReps } from '../reducers/Reps';
import { rep } from '../reducers/Rep';
import { actRow, activePhyRaw } from '../reducers/ActiveRow';
import { locs } from '../reducers/Locs';
import { phys, phy, isCreateModePhy } from '../reducers/Phys';
import { tabact } from '../reducers/Tabs';
import { clients, client, activeClientRow, loc, activeLocRow, physs, files, logins, createLoc, createClient } from '../reducers/Clients';
import { eclients, eclient, epayments, etest, createEClientMode, activeERow, price, qty, disc } from '../reducers/EClients';
import { groups, group, createGroup } from '../reducers/Groups';




const RootReducer = combineReducers({
    showReps,
    disc,
    qty,
    price,
    createGroup,
    group,
    groups,
    activeERow,
    createEClientMode,
    etest,
    epayments,
    eclient,
    eclients,
    createClient,
    createLoc,
    logins,
    files,
    physs,
    activeLocRow,
    loc,
    activeClientRow,
    client,
    clients,
    activePhyRaw,
    isCreateModePhy,
    tabact,
    phy,
    phys,
    locs,
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