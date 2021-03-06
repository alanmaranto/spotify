import { userTypes } from "../types/types";

export const initialState = {
  user: null,
  //set empty null after finished developing
  // token: "BQCz6YZsfuTy_8pE5X4uh3ncSJcMCkeueNQW4EkpYvJXQj3E6-HVMdwfD2ixCN5IZlUXcPRmwSWzqP0B6dPkuTZgjrorf87miBDbfw2tZyEg6jIZSR6AzzFUkVtARUf3yD6o0H0OT-VZWj1ePckkcQeyJkAli6ZFKQ",
  playlists: [],
  playing: false,
  item: null,
  discoverWeekly: null,
};

const reducer = (state, action) => {
  // Action => type, [payload]
  switch (action.type) {
    case userTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case userTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case userTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case userTypes.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      };
      case userTypes.SET_ITEM:
      return {
        ...state,
        item: action.item
      };
      case userTypes.SET_PLAYING:
        return {
          ...state,
          playing: action.playing
        }
    default:
      return state;
  }
};

export default reducer;
