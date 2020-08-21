/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import * as S from './styled';

const UploadFile = ({
  maxSize,
  maxSizeText,
  disabled,
  mainText,
  secondaryText,
  error: validationError,
  multiple = false,
  type,
  files,
  setFiles,
  error: _error,
}) => {
  const [error, setError] = useState('');
  const onDropRejected = errors => {
    if (
      errors &&
      errors[0] &&
      errors[0].errors &&
      errors[0].errors[0] &&
      errors[0].errors[0].code
    ) {
      if (errors[0].errors[0].code === 'file-too-large') {
        setError(`File is larger than ${maxSizeText}`);
      } else {
        setError(errors[0].errors[0].message);
      }
    }
  };

  const onMultiDrop = acceptedFiles => {
    const updatedFiles = [
      ...files,
      acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          new: true,
        })
      ),
    ].reduce((acc, val) => acc.concat(val), []);
    setFiles(updatedFiles);
  };

  const onSingleDrop = acceptedFiles => {
    const fileToUpload = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        new: true,
      })
    );

    setFiles([fileToUpload[0]]);
  };

  const removeFile = () => {
    setFiles(null);
  };
  const thumbs = !!files.length && files.map( file => ((
    <S.Thumb key={file.name}>
      <S.ThumbInner image={file.preview}>
        <S.ImageWrap>
          <S.StyledImage src={file.preview || file.url} />
        </S.ImageWrap>
        <S.ActionButtons>
          <S.DeleteBtn onClick={() => removeFile()}>DELETE</S.DeleteBtn>
        </S.ActionButtons>
      </S.ThumbInner>
    </S.Thumb>
  )))

  return (
    <Dropzone
      onDrop={multiple ? onMultiDrop : onSingleDrop}
      multiple={multiple}
      accept={type === 'file' ? 'image/*, .pdf, .doc, .docx' : 'image/*'}
      maxSize={maxSize}
      onDropRejected={onDropRejected}
      disabled={disabled}
    >
      {({ getRootProps, getInputProps }) => (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 30 }}>
          <h4
            style={{ margin: '0 0 20px 0', color: '#aaa', textAlign: 'left', paddingLeft: '100px' }}
          >
            Upload Image :
          </h4>
          <S.UploadContainer>
            {files && <S.ThumbsContainer>{thumbs}</S.ThumbsContainer>}
            <div>
              <S.BoxWrapper
                {...getRootProps({ className: 'dropzone ' })}
                disabled={disabled}
                error={!!error || !!validationError}
              >
                <input {...getInputProps()} />
                {/* <T.PXSBold color="primary" mt={15} style={{ textAlign: 'center' }}> */}
                <p>{mainText || 'Drag file here or click'}</p>
                {secondaryText && (
                  // <T.PXS color="gray3" style={{ textAlign: 'center' }}>
                  <p>({secondaryText})</p>
                )}
              </S.BoxWrapper>
            </div>
          </S.UploadContainer>
        </div>
      )}
    </Dropzone>
  );
};

export default UploadFile;
