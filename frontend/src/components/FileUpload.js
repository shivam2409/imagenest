import React, { Fragment } from 'react';

const FileUpload = () => {
  return (
    <Fragment>
      <form>
        <div className='formfile mb-4'>
          <label htmlFor='formFile' className='form-label'></label>
          <input className='form-control' type='file' id='formFile' />
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
