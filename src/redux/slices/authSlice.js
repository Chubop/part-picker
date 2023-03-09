import { createSlice } from '@reduxjs/toolkit';
import supabase from '../../auth/supabase';

const initialState = {
  user: null,
  data: {},
  error: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: state => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutSuccess: state => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutSuccess } = authSlice.actions;

export const loginWithGoogle = () => async dispatch => {
  dispatch(loginStart());

  try {
    const { user, error } = await supabase.auth.signIn({
      provider: 'google',
    });

    if (error) {
      throw new Error(error.message);
    }

    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => async dispatch => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  dispatch(logoutSuccess());
};

export const selectUser = state => state.auth.user;
export const selectError = state => state.auth.error;
export const selectIsLoading = state => state.auth.isLoading;

export default authSlice.reducer;