import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_fdhd_list = createAsyncThunk(
  "fdhds/api_v1_fdhd_list",
  async payload => {
    const response = await apiService.api_v1_fdhd_list(payload)
    return response.data
  }
)
export const api_v1_fdhd_create = createAsyncThunk(
  "fdhds/api_v1_fdhd_create",
  async payload => {
    const response = await apiService.api_v1_fdhd_create(payload)
    return response.data
  }
)
export const api_v1_fdhd_retrieve = createAsyncThunk(
  "fdhds/api_v1_fdhd_retrieve",
  async payload => {
    const response = await apiService.api_v1_fdhd_retrieve(payload)
    return response.data
  }
)
export const api_v1_fdhd_update = createAsyncThunk(
  "fdhds/api_v1_fdhd_update",
  async payload => {
    const response = await apiService.api_v1_fdhd_update(payload)
    return response.data
  }
)
export const api_v1_fdhd_partial_update = createAsyncThunk(
  "fdhds/api_v1_fdhd_partial_update",
  async payload => {
    const response = await apiService.api_v1_fdhd_partial_update(payload)
    return response.data
  }
)
export const api_v1_fdhd_destroy = createAsyncThunk(
  "fdhds/api_v1_fdhd_destroy",
  async payload => {
    const response = await apiService.api_v1_fdhd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fdhdsSlice = createSlice({
  name: "fdhds",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_fdhd_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fdhd_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_fdhd_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fdhd_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fdhd_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_fdhd_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fdhd_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fdhd_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_fdhd_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fdhd_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fdhd_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fdhd_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fdhd_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fdhd_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fdhd_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_fdhd_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_fdhd_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_fdhd_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_fdhd_list,
  api_v1_fdhd_create,
  api_v1_fdhd_retrieve,
  api_v1_fdhd_update,
  api_v1_fdhd_partial_update,
  api_v1_fdhd_destroy,
  slice: fdhdsSlice
}
