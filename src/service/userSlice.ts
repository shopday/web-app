
export const userSlice = createSlice({
  name: "user",

  initialState: {
  },

  reducers: {
    getCompanies: (state, action) => {
    },
  },
});

export const { getCompanies } = userSlice.actions;

export default userSlice.reducer;
