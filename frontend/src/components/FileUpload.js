import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There is server problem');
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='formfile mb-4'>
          <label htmlFor='formFile' className='form-label'></label>
          <input
            className='form-control'
            type='file'
            id='formFile'
            onChange={onChange}
          />
          <div className='d-grid gap-2'>
            <input
              type='submit'
              value='Upload'
              className='btn btn-primary btn-block mt-4'
            />
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default FileUpload;
