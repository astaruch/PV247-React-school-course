import {Dispatch} from 'redux';

import * as fileService from '../services/fileService';
import {IUser} from '../models/IUser';

export const FILE_UPLOAD_STARTED = 'FILE_UPLOAD_STARTED';
export const FILE_UPLOAD_ENDED = 'FILE_UPLOAD_ENDED';

const fileUploadStarted = (): Action => ({
  type: FILE_UPLOAD_STARTED
});

const fileUploadEnded = (user: IUser, fileUri: string, fileId: Uuid): Action => ({
  type: FILE_UPLOAD_ENDED,
  payload: {
    user,
    fileUri,
    fileId
  }
});

export const uploadFile = (user: IUser, formData: FormData): any => {
  return async (dispatch: Dispatch): Promise<string> => {
    dispatch(fileUploadStarted());
    const uploadedFile = await fileService.uploadFile(formData);
    console.log(uploadedFile);
    const avatarUrl = await fileService.getFileUri(uploadedFile.id);
    dispatch(fileUploadEnded(user, avatarUrl, uploadedFile.id));
    return avatarUrl;
  };
};

