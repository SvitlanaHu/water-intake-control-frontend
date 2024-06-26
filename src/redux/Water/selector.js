export const selectIsLoading = state => state.water.isLoading;

export const selectError = state => state.water.error;

export const selectWater = state => state.water.items || [];

export const selectDailyWater = state => state.water.dailyItems;

export const selectCurrentDate = state => state.water.currentDate;

export const selectMonthLoading = state => state.water.monthIsLoading;

export const selectDailyLoading = state => state.water.dailyIsLoading;

export const selectTodayWater = state => state.water.todayItems;
