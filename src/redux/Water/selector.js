export const selectIsLoading = state => state.water.isLoading;

export const selectError = state => state.water.error;

export const selectWater = state => state.water.items;

export const selectDailyWater = state => state.water.dailyItems;

export const selectCurrentDate = state => state.water.currentDate;
