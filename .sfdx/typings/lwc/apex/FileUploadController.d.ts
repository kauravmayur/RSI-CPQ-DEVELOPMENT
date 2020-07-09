declare module "@salesforce/apex/FileUploadController.getData" {
  export default function getData(param: {matterId: any}): Promise<any>;
}
declare module "@salesforce/apex/FileUploadController.saveChunk" {
  export default function saveChunk(param: {parentId: any, fileName: any, base64Data: any, contentType: any, fileId: any}): Promise<any>;
}
