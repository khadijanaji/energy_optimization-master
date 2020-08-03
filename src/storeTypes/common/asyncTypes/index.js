// @flow

import type {RecordOf} from "immutable";

const statusEnum = Object.freeze({
  "Idle": "Idle",
  "Loading": "Loading",
  "Success": "Success",
  "Error": "Error"
});

type asyncResponse<responseDataType> = {
    status: "Idle" | "Loading" | "Success" | "Error",
    error: string,
    response: responseDataType
}

type AsyncResponseStoreType<responseDataType> = RecordOf<asyncResponse<responseDataType>>;

export type {
  AsyncResponseStoreType
};

export {
  statusEnum
};
