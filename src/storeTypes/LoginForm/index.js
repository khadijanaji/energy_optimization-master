// @flow

import type {RecordFactory, RecordOf} from "immutable";
import {Record} from "immutable";

export type InfoUserPropsType = {
    "email": string,
    "name": string,
    "token": string,
    "roles": Array<string>,
    "factories": Array<string>
};

export type LoginFormStoreType = {
    "status": "Idle" | "Loading" | "Success" | "Error",
    "onSubmit": Function,
    "errorMsg"?: string,
    "isPristine": boolean,
    "isInvalid": boolean,
    "infoUser": InfoUserPropsType
};

export type InfoUserStoreRecordFactoryType = RecordFactory<InfoUserPropsType>;

export const InfoUserStoreRecordFactory: InfoUserStoreRecordFactoryType = Record({
  "email": "",
  "name": "",
  "token": "",
  "roles": [],
  "factories": []
}, "InfoUserStoreRecordFactory");

export type LoginFormStoreRecordType = RecordOf<LoginFormStoreType>;

export type LoginFormStoreRecordFactoryType = RecordFactory<LoginFormStoreType>;

export const LoginFormStoreRecordFactory: LoginFormStoreRecordFactoryType = Record({
  "status": "Idle",
  "onSubmit": () => ({}),
  "errorMsg": "",
  "isPristine": true,
  "isInvalid": true,
  "infoUser": {
    "email": "",
    "name": "",
    "token": "",
    "roles": [],
    "factories": []
  }
}, "LoginFormStoreRecordFactory");
