import axios from 'axios';
import {IFile} from '../models/IFile';
import {ResponseDownloadLink, ResponseFile} from '../@types/api';
import {FILE_PATH, getAuthorizationHeader} from './authenticationService';

export async function uploadFile(formData: FormData): Promise<IFile> {
  return axios.post<ResponseFile>(
    `${FILE_PATH}`,
    formData,
    getAuthorizationHeader()
  ).then((response) => {
    return response.data[0];
  });
}

export async function getFileUri(fileId: string): Promise<string> {
  return axios.get<ResponseDownloadLink>(
    `${FILE_PATH}/${fileId}/download-link`,
    getAuthorizationHeader()
  ).then((response) => {
    return response.data.fileUri;
  });
}
