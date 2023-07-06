import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_cvcbb_list = createAsyncThunk(
  "cvcbbs/api_v1_cvcbb_list",
  async payload => {
    const response = await apiService.api_v1_cvcbb_list(payload)
    return response.data
  }
)
export const api_v1_cvcbb_create = createAsyncThunk(
  "cvcbbs/api_v1_cvcbb_create",
  async payload => {
    const response = await apiService.api_v1_cvcbb_create(payload)
    return response.data
  }
)
export const api_v1_cvcbb_retrieve = createAsyncThunk(
  "cvcbbs/api_v1_cvcbb_retrieve",
  async payload => {
    const response = await apiService.api_v1_cvcbb_retrieve(payload)
    return response.data
  }
)
export const api_v1_cvcbb_update = createAsyncThunk(
  "cvcbbs/api_v1_cvcbb_update",
  async payload => {
    const response = await apiService.api_v1_cvcbb_update(payload)
    return response.data
  }
)
export const api_v1_cvcbb_partial_update = createAsyncThunk(
  "cvcbbs/api_v1_cvcbb_partial_update",
  async payload => {
    const response = await apiService.api_v1_cvcbb_partial_update(payload)
    return response.data
  }
)
export const api_v1_cvcbb_destroy = createAsyncThunk(
  "cvcbbs/api_v1_cvcbb_destroy",
  async payload => {
    const response = await apiService.api_v1_cvcbb_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const cvcbbsSlice = createSlice({
  name: "cvcbbs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_cvcbb_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcbb_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcbb_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcbb_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcbb_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcbb_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcbb_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcbb_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcbb_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcbb_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcbb_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcbb_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcbb_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcbb_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcbb_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcbb_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_cvcbb_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_cvcbb_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_cvcbb_list,
  api_v1_cvcbb_create,
  api_v1_cvcbb_retrieve,
  api_v1_cvcbb_update,
  api_v1_cvcbb_partial_update,
  api_v1_cvcbb_destroy,
  slice: cvcbbsSlice
}
