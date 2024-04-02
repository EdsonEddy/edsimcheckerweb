import { OPEN_SIDEBAR_MENU, OPEN_LANGUAGE_MENU } from "./menuActionTypes";

const initialState = {
  isOpenSidebarMenu: false,
  isOpenLanguageMenu: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR_MENU:
      return {
        ...state,
        isOpenSidebarMenu: !state.isOpenSidebarMenu,
      };
    case OPEN_LANGUAGE_MENU:
      return {
        ...state,
        isOpenLanguageMenu: !state.isOpenLanguageMenu,
      };
    default:
      return state;
  }
};

export default menuReducer;
