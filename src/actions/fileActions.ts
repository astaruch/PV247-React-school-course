import {Dispatch} from 'redux';

export const FILE_UPLOAD_STARTED = 'FILE_UPLOAD_STARTED';
export const FILE_UPLOAD_ENDED = 'FILE_UPLOAD_ENDED';

const fileUploadStarted = (): Action => ({
  type: FILE_UPLOAD_STARTED
});

const fileUploadEnded = (): Action => ({
  type: FILE_UPLOAD_ENDED
});

export const uploadFile = (formData: FormData): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(fileUploadStarted());
    console.log(formData);
    dispatch((fileUploadEnded()));
  };
};

