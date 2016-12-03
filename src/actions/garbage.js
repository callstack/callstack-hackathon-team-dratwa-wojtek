export const types = {
    SCAN: 'SCAN',
    CLEAR: 'CLEAR',
};

function action(type, payload) {
    return {
        type,
        payload
    };
}

export const scan = (payload) => (action(types.SCAN, payload));
export const clear = (payload) => (action(types.CLEAR));
