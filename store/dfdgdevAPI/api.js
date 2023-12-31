import axios from "axios"
const dfdgdevAPI = axios.create({
  baseURL: "https://dfdg-dev-98295.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return dfdgdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_cvcbb_list(payload) {
  return dfdgdevAPI.get(`/api/v1/cvcbb/`)
}
function api_v1_cvcbb_create(payload) {
  return dfdgdevAPI.post(`/api/v1/cvcbb/`, payload.data)
}
function api_v1_cvcbb_retrieve(payload) {
  return dfdgdevAPI.get(`/api/v1/cvcbb/${payload.id}/`)
}
function api_v1_cvcbb_update(payload) {
  return dfdgdevAPI.put(`/api/v1/cvcbb/${payload.id}/`, payload.data)
}
function api_v1_cvcbb_partial_update(payload) {
  return dfdgdevAPI.patch(`/api/v1/cvcbb/${payload.id}/`, payload.data)
}
function api_v1_cvcbb_destroy(payload) {
  return dfdgdevAPI.delete(`/api/v1/cvcbb/${payload.id}/`)
}
function api_v1_fdhd_list(payload) {
  return dfdgdevAPI.get(`/api/v1/fdhd/`)
}
function api_v1_fdhd_create(payload) {
  return dfdgdevAPI.post(`/api/v1/fdhd/`, payload.data)
}
function api_v1_fdhd_retrieve(payload) {
  return dfdgdevAPI.get(`/api/v1/fdhd/${payload.id}/`)
}
function api_v1_fdhd_update(payload) {
  return dfdgdevAPI.put(`/api/v1/fdhd/${payload.id}/`, payload.data)
}
function api_v1_fdhd_partial_update(payload) {
  return dfdgdevAPI.patch(`/api/v1/fdhd/${payload.id}/`, payload.data)
}
function api_v1_fdhd_destroy(payload) {
  return dfdgdevAPI.delete(`/api/v1/fdhd/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return dfdgdevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return dfdgdevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return dfdgdevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return dfdgdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return dfdgdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return dfdgdevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return dfdgdevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return dfdgdevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return dfdgdevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return dfdgdevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return dfdgdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return dfdgdevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return dfdgdevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_cvcbb_list,
  api_v1_cvcbb_create,
  api_v1_cvcbb_retrieve,
  api_v1_cvcbb_update,
  api_v1_cvcbb_partial_update,
  api_v1_cvcbb_destroy,
  api_v1_fdhd_list,
  api_v1_fdhd_create,
  api_v1_fdhd_retrieve,
  api_v1_fdhd_update,
  api_v1_fdhd_partial_update,
  api_v1_fdhd_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
