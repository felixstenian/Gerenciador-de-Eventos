/** Actions UPDATE PROFILE */

export function updateProfileRequest(data) {
  return {
    type: "@user/UPDATE_PROFILE_REQUEST",
    payload: { data },
  };
}

export function updateProfileSuccess(user) {
  return {
    type: "@user/UPDATE_PROFILE_SUCCESS",
    payload: { user },
  };
}

export function updateProfileFailure() {
  return {
    type: "@user/UPDATE_PROFILE_FAILURE",
  };
}

/** Actions UPDATE FIRST STEPS */

export function updateFirstStepsRequest(data) {
  return {
    type: "@user/UPDATE_FIRST_STEPS_REQUEST",
    payload: { data },
  };
}

export function updateFirstStepsSuccess(user) {
  return {
    type: "@user/UPDATE_FIRST_STEPS_SUCCESS",
    payload: { user },
  };
}

export function updateFirstStepsFailure() {
  return {
    type: "@user/UPDATE_FIRST_STEPS_FAILURE",
  };
}

/** Actions UPDATE OFFICE */

export function updateOfficeRequest(data) {
  return {
    type: "@user/UPDATE_OFFICE_REQUEST",
    payload: { data },
  };
}

export function updateOfficeSuccess(user) {
  return {
    type: "@user/UPDATE_OFFICE_SUCCESS",
    payload: { user },
  };
}

export function updateOfficeFailure() {
  return {
    type: "@user/UPDATE_OFFICE_FAILURE",
  };
}