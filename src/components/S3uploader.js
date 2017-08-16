import React, { Component } from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import UploadDisplay from './UploadDisplay';


export default class S3Uploader extends Component {

  handleFinishedUpload = info => {
    console.log('File uploaded with filename', info.filename)
    console.log('Access it on s3 at', info.fileUrl)
  }

  render() {
    const uploadOptions = {
      server: 'http://localhost:3001',
      // s3Url: 'http://squadit.s3.amazonaws.com',
      signingUrlQueryParams: {uploadType: 'avatar'},
    }

    return (

      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        upload={uploadOptions}
        >
        <UploadDisplay />
      </DropzoneS3Uploader>
    )
  }
}
