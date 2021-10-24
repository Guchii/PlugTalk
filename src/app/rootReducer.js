import { combineReducers } from "@reduxjs/toolkit";

const sampleServer = {
    name: "Testing Server",
    uniqueID: "12345",
    members: null,
    owner: null,
    channels: [
        {
            name: "Suggestions ⊂(◉‿◉)つ",
            uniqueID: "21371987",
            messages: [],
        },
        {
            name: "ʕっ•ᴥ•ʔっ Bear Hug",
            uniqueID: "3243840284",
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
            case "CHANGINGSERVERS": {
                let newState = state;
                newState = {
                    ...newState,
                    changingServers: !newState.changingServers,
                };
                return newState;
            }
            case "SWITCHCHANNELS":
                return { ...state, channel: action.payload };
            case "SWITCHSERVERS": {
                return {
                    ...state,
                    server: action.payload.server,
                    channel: action.payload.channel,
                    changingServers: false,
                };
            }
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
            case "CREATECHANNEL": {
                let Servers = state.servers;
                Servers[action.payload.server].channels.push(
                    action.payload.channel
                );
                return { ...state, servers: Servers };
            }
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
