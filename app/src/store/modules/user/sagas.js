import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from "../../../services/history";
import api from "../../../services/api";

import {
  updateProfileSuccess,
  updateProfileFailure,
  updateFirstStepsSuccess,
  updateFirstStepsFailure,
  updateOfficeSuccess,
  updateOfficeFailure
} from "./actions";

export function* updateProfile({ payload }) {
  try {
    const { name, telefone, email, endereco, cargo, ...rest } = payload.data;

    const profile = Object.assign(
      { name, telefone, email, endereco },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, "updateuser", profile);

    yield put(updateProfileSuccess(response.data));

    toast.success("Perfil atualizado com sucesso!");

    history.push("/perfil");
    
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(updateProfileFailure());
  }
}

export function* updateFirstSteps({ payload }) {
  try {
    const { data } = payload;

    const response = yield call(api.patch, "updatefirststeps", data);

    yield put(updateFirstStepsSuccess(response.data));
        
  } catch (err) {
    yield put(updateFirstStepsFailure());
  }
}

export function* updateOffice({ payload }) {
  try {
    const { data } = payload;

    const response = yield call(api.put, "escritorio", data);

    yield put(updateOfficeSuccess(response.data));

    toast.success("Perfil atualizado com sucesso!");
    
    history.push("/escritorio");

  } catch (err) {
    yield put(updateOfficeFailure());
  }
}

export default all([
  takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile),
  takeLatest("@user/UPDATE_FIRST_STEPS_REQUEST", updateFirstSteps),
  takeLatest("@user/UPDATE_OFFICE_REQUEST", updateOffice),
]);

