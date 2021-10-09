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
                {
                    value: "I'm the nice person",
                    userUniqueId: "12345",
                    date: null,
                },
                {
                    value: "OP Bhai Op test message",
                    userUniqueId: "12345",
                    date: null,
                },
                {
                    value: "Nice bhai nice test message from bot",
                    userUniqueId: "12345",
                    date: null,
                },
            ],
        },
        {
            name: "Important Messages 2",
            messages: [
                {
                    value: "I'm nicer person",
                    userUniqueId: "12345",
                    date: null,
                },
                {
                    value: "I'm the nicest person",
                    userUniqueId: "12345",
                    date: null,
                },
            ],
        },
    ],
};

const appInitialState = {
    servers: [sampleServer],
    registeredUsers: [
        {
            name: "Gojo The Bot",
            uniqueID: "12345",
            image: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c8/c830b407476df1bfb4f6af59a98239c34f1de3b0_full.jpg",
        },
    ],
    version: "1.0.0",
};

const userPreferences = {
    servers: [
        {
            uniqueID: "12345",
            channel: 2,
            time: null,
        },
    ],
};

const rootReducer = combineReducers({
    userData: (state = null, action) => {
        return state;
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
            case "CREATESERVER": {
                const Servers = state.servers;
                Servers.push(action.payload);
                return { ...state, servers: Servers };
            }
            case "DELETESERVER":
                return state;
            case "SENDMESSAGE":
                const Servers = state.servers;
                Servers[0].channels[0].messages.push(action.payload);
                return { ...state, servers: Servers };
            default:
                return state;
        }
    },
});

export default rootReducer;
