import { createAsyncThunk } from "@reduxjs/toolkit"
import authService from "../../../services/authService"
import { OneUserType } from "../../../types/tourType"

export const updateUserThunk = createAsyncThunk<OneUserType, OneUserType>(
    'user/updateUser',
    async (user) => authService.updateUser(user)
)