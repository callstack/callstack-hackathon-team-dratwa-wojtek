import { types } from '../actions/garbage';

const initialState = {};

const json = {
    schedule: {
        'Longer Texttext': {
            from: '2016-09-10',
            to: '2016-09-12',
        },
        key2: {
            from: '2016-09-13',
            to: '2016-09-15',
        },
        key3: {
            from: '2016-09-16',
            to: '2016-09-18',
        },
    }
};

export default function reducer(state = json.schedule, action) {
    const { type, payload } = action;
    switch(type) {
        case types.SCAN:
            return {
                ...JSON.parse(payload).schedule,
            };
        case types.CLEAR:
            return null;
        default:
        return state
    }
}
