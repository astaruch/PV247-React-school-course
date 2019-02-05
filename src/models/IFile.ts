export interface IFile {
  readonly id: Uuid;
  readonly name: string;
  readonly extension: string;
  readonly createdBy: string;
  readonly fileSize: 0;
}

export interface IFileDownloadLink {
  readonly fileUri: string;
}

export interface IFileMap {
  readonly file: IFile;
  readonly fileUri: IFileDownloadLink;
}

