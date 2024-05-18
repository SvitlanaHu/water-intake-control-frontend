// import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, verifyEmail } from './operations';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: {
//       email: null,
//     },
//     token: null,
//     isRegistered: false,
//     isLoggedIn: false,
//     isEmailVerified: false,
//     loginError: null, // Додаємо стан для помилок логіну
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.isRegistered = true;
//         state.token = null;
//         state.isEmailVerified = false; //Очікується підтвердження електронної пошти
//         state.isLoggedIn = false;
//       })
//       .addCase(verifyEmail.fulfilled, (state, action) => {
//         state.isEmailVerified = true; // Підтвердження електронної пошти пройшло успішно
//         state.isLoggedIn = true; // Користувач тепер залогінений
//         state.token = action.payload.token; // Токен збережено після підтвердження
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         if (action.payload.isEmailVerified) {
//           state.user = action.payload.user;
//           state.token = action.payload.token;
//           state.isEmailVerified = true;
//           state.isLoggedIn = true; // Користувач залогінений
//           state.loginError = null; // Скидаємо помилки логіну
//         } else {
//           state.loginError = 'Будь ласка, підтвердіть вашу електронну пошту.';
//         }
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false; // Користувач вийшов з системи
//         state.loginError = null; // Скидаємо помилки логіну
//       });
//   },
// });

// export const authReducer = authSlice.reducer;
