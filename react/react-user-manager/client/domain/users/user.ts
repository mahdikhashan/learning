export type UserName = string;
export type FileType = 'PDF' | 'DOC' | 'DOCX,' | 'PNG' | 'JPEG';
export type DocumentType = FileType;

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  fullName: string;
};

export type UserFile = {
  name: string;
  file: string | Blob;
  type: unknown;
  size: string;
};
