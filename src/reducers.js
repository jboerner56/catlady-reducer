import { combinedReducers } from 'redux';

// state

const intialState = {
    cats: {
        1001: {
        name: 'Milla',
        activity: 'drooling'
        },
        1002: {
        name: 'Oakley',
        activity: 'playing'
        }
    }
}
// Actions - action creators

const ACTION_SET_NAME = "name";
const ACTION__SET_ACTIVITY = "activity";
const ACTION__ADD_CAT = "add";

export function setName(id, name) {
    return{
        type: ACTION_SET_NAME,
        payload: {
            id,
            name
        }
    }
}
export function setActivity(id, activity) {
    return {
        type: ACTION__SET_ACTIVITY,
        payload: {
            id,
            activity
        }
    }
}
export function addCat (name, activity) {
    return {
        type: ACTION__ADD_CAT,
        payload: {
            name,
            activity
        }
    }
}

window.setName = setName;
window.setActivity = setActivity;
window.addCat = addCat;

// reducer

function cats (state=intialState, action={type:''}) {
    switch (action.type) {
        case ACTION_SET_NAME:
        return {
            ...state,
            [action.payload.id]: {
                ...state[action.payload.id],
                name: action.payload.name
            }
        }
            break;
        case ACTION__ADD_CAT:
        const randomId = Math.floor(Math.random()*Math.floor(1000));
            return {
                ...state,
                [randomId]: {
                    ...state[randomId],
                    name: action.payload.name,
                    activity: action.payload.activity
                }
            }
        break;
        case ACTION__SET_ACTIVITY:
        return {
            ...state,
            [action.payload.id]: {
                ...state[action.payload.id],
                activity: action.payload.activity
            }
        }
        break;
        default:
            return state
    }
}