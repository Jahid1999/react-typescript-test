import { IResponse } from "./createThunkReducer";

class ApiStorageImpl {
  private _objects: {
    [key: string]: { res: any;} | undefined;
  } = {};

  setResponse(key: string, res: any): void {
    if (!key) return;
    if (!res) {
      this._objects[key] = undefined;
    } else {
      this._objects[key] = {
        res
      };
    }
  }

  getResponse<R>(api: IResponse<R>): R | undefined {
    return this._objects[api.uid]?.res as unknown as R;
  }
}

export const ApiStorage = new ApiStorageImpl();
