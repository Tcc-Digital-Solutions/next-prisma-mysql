import React from 'react';
import {MultipleFileUpload, MultipleFileUploadMain, MultipleFileUploadStatus, MultipleFileUploadStatusItem, Modal, Checkbox} from '@patternfly/react-core';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';

export const MultipleFileUploadBasic = () => {
  const [isHorizontal, setIsHorizontal] = React.useState(false);
  const [currentFiles, setCurrentFiles] = React.useState([]);
  const [readFileData, setReadFileData] = React.useState([]);
  const [showStatus, setShowStatus] = React.useState(false);
  const [statusIcon, setStatusIcon] = React.useState('inProgress');
  const [modalText, setModalText] = React.useState('');
  if (!showStatus && currentFiles.length > 0) {
    setShowStatus(true);
  }
  React.useEffect(() => {
    if (readFileData.length < currentFiles.length) {
      setStatusIcon('inProgress');
    } else if (readFileData.every(file => file.loadResult === 'success')) {
      setStatusIcon('success');
    } else {
      setStatusIcon('danger');
    }
  }, [readFileData, currentFiles]);
  const removeFiles = namesOfFilesToRemove => {
    const newCurrentFiles = currentFiles.filter(currentFile => !namesOfFilesToRemove.some(fileName => fileName === currentFile.name));
    setCurrentFiles(newCurrentFiles);
    const newReadFiles = readFileData.filter(readFile => !namesOfFilesToRemove.some(fileName => fileName === readFile.fileName));
    setReadFileData(newReadFiles);
  };
  const handleFileDrop = droppedFiles => {
    const currentFileNames = currentFiles.map(file => file.name);
    const reUploads = droppedFiles.filter(droppedFile => currentFileNames.includes(droppedFile.name));
    Promise.resolve().then(() => removeFiles(reUploads.map(file => file.name))).then(() => setCurrentFiles(prevFiles => [...prevFiles, ...droppedFiles]));
  };
  const handleReadSuccess = (data, file) => {
    setReadFileData(prevReadFiles => [...prevReadFiles, {
      data,
      fileName: file.name,
      loadResult: 'success'
    }]);
  };
  const handleReadFail = (error, file) => {
    setReadFileData(prevReadFiles => [...prevReadFiles, {
      loadError: error,
      fileName: file.name,
      loadResult: 'danger'
    }]);
  };
  const handleDropRejected = (files, _event) => {
    if (files.length === 1) {
      setModalText(`${files[0].name} is not an accepted file type`);
    } else {
      const rejectedMessages = files.reduce((acc, file) => acc += `${file.name}, `, '');
      setModalText(`${rejectedMessages}are not accepted file types`);
    }
  };
  const successfullyReadFileCount = readFileData.filter(fileData => fileData.loadResult === 'success').length;
  return <>
      <MultipleFileUpload onFileDrop={handleFileDrop} dropzoneProps={{
    accept: 'image/jpeg, application/msword, application/pdf, image/png',
    onDropRejected: handleDropRejected
  }} isHorizontal={isHorizontal}>
        <MultipleFileUploadMain titleIcon={<UploadIcon />} titleText="Drag and drop files here" titleTextSeparator="or" infoText="Accepted file types: JPEG, Doc, PDF, PNG" />
        {showStatus && <MultipleFileUploadStatus statusToggleText={`${successfullyReadFileCount} of ${currentFiles.length} files uploaded`} statusToggleIcon={statusIcon}>
            {currentFiles.map(file => <MultipleFileUploadStatusItem file={file} key={file.name} onClearClick={() => removeFiles([file.name])} onReadSuccess={handleReadSuccess} onReadFail={handleReadFail} />)}
          </MultipleFileUploadStatus>}
        <Modal isOpen={!!modalText} title="Unsupported file" titleIconVariant="warning" showClose aria-label="unsupported file upload attempted" onClose={() => setModalText('')}>
          {modalText}
        </Modal>
      </MultipleFileUpload>
      <Checkbox id="horizontal-checkbox" label="Show as horizontal" isChecked={isHorizontal} onChange={() => setIsHorizontal(!isHorizontal)} />
    </>;
};