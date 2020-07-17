import React from 'react';
import downloadFile from '../src/assets/downloads/faf-2020-fall-csa.pdf'

const FlyerDownloadFile = ({ className}) => (
   <a href={downloadFile} className={`${className}`} target="_blank">2020 Fall CSA Flyer</a>
);

export default FlyerDownloadFile;

