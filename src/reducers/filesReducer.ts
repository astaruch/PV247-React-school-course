import * as Immutable from 'immutable';

import {IFileMapping} from '../models/IFile';
import {FILE_UPLOAD_ENDED} from '../actions/fileActions';

export const files = (prevState = Immutable.List<IFileMapping>(), action: Action): Immutable.List<IFileMapping> => {
  switch (action.type) {
    case FILE_UPLOAD_ENDED:
      const {fileId, fileUri} = action.payload;
      return prevState.push({fileId, fileUri});
    default:
      return prevState;
  }
};
