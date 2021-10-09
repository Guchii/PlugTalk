import { combineReducers } from "@reduxjs/toolkit";

const sampleServer = {
    name: "Sample Server",
    uniqueID: "12345",
    members: null,
    owner: null,
    channels: [
        {
            name: "Suggestions ⊂(◉‿◉)つ",
            messages: [],
        },
        {
            name: "ʕっ•ᴥ•ʔっ Bear Hug",
            messages: [],
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

const rootReducer = combineReducers({
    user: (state = null, action) => {
        switch (action.type) {
            case "LOGIN":
                return action.payload;
            case "LOGOUT":
                return null;
            case "SWITCHCHANNEL":
                return { ...state, channel: action.payload };
            case "SWITCHSERVER":
                return { ...state, server: action.payload };
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
                Servers[action.userPref.server].channels[
                    action.userPref.channel
                ].messages.push(action.payload);
                return { ...state, servers: Servers };
            default:
                return state;
        }
    },
});

export default rootReducer;
