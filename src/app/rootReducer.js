import { combineReducers } from "@reduxjs/toolkit";

const sampleServer = {
    name: "Sample Server",
    uniqueID: "12345",
    members: null,
    owner: null,
    channels: [
        {
            name: "Important Messages",
            messages: [
                "I'm the oldest message from someone",
                "I'm an older message from someone",
                "This is my message",
                "This is my new message",
            ],
        },
        {
            name: "Important Messages 2",
            messages: [
                "I'm the oldest message from someone 2",
                "I'm an older message from someone 2",
                "This is my message 2",
                "This is my new message 2",
            ],
        },
    ],
};

const appInitialState = {
    servers: [sampleServer],
    registeredUsers: 0,
    version: "1.0.0",
};

const userInitialData = {
    user: null,
    lastActive: {
        server: {
            name: "12345",
            channel: 2,
        },
        time: null,
    },
}

const rootReducer = combineReducers({
    userData: (state = userInitialData, action) => {
        return state
    },
    user: (state = null, action) => {
        switch (action.type) {
            case "LOGIN":
                return action.payload;
            case "LOGOUT":
                return null;
            default:
                return state;
        }
    },
    app: (state = appInitialState, action) => {
        switch (action.type) {
            case "CREATESERVER":
                return state;
            case "DELETESERVER":
                return state;
            case "SETCHANNELID":
                return action.payload;
            default:
                return state;
        }
    },
});

export default rootReducer;
