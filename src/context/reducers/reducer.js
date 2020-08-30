import { userTypes } from '../types/types'

export const initialState = {
  user: null,
  //set empty null after finished developing
  token: "BQCz6YZsfuTy_8pE5X4uh3ncSJcMCkeueNQW4EkpYvJXQj3E6-HVMdwfD2ixCN5IZlUXcPRmwSWzqP0B6dPkuTZgjrorf87miBDbfw2tZyEg6jIZSR6AzzFUkVtARUf3yD6o0H0OT-VZWj1ePckkcQeyJkAli6ZFKQ",
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  // Action => type, [payload]
  console.log(action);
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
      }
    default:
      return state;
  }
};

export default reducer;
