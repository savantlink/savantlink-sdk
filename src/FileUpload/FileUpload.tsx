import React, { DragEvent, useCallback, useRef, useState } from "react";

import styles from "./FileUpload.module.scss";
import Typography from "../Typography";

import IconFactory from "@/IconFactory";


interface FileUploadProps {
  onFile: (file: File | null) => void;
  disabled?: boolean;
  maxSize?: number; // in bytes (default 5MB)
}

const CSVFileUpload: React.FC<FileUploadProps> = ({
  onFile,
  disabled = false,
  maxSize = 5 * 1024 * 1024, // 5MB
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Accepted Excel MIME types and extensions
  // const EXCEL_MIME_TYPES = [
  //   "application/vnd.ms-excel", // .xls
  //   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
  //   "text/csv", // .csv
  // ];

  // const EXCEL_EXTENSIONS = [".xls", ".xlsx", ".csv"];
  const MIME_TYPES = ["text/csv"];
  const EXTENSIONS = [".csv"];

  const validateExcelFile = useCallback(
    (file: File): boolean => {
      // Check file type
      const isExcel =
        MIME_TYPES.includes(file.type) ||
        EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext));

      if (!isExcel) {
        setError("Only CSV files are allowed");
        return false;
      }

      // Check file size
      if (file.size > maxSize) {
        setError(`File exceeds ${maxSize / 1024 / 1024}MB limit`);
        return false;
      }

      setError(null);
      return true;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [maxSize]
  );

  const handleFile = useCallback(
    (file: File) => {
      if (validateExcelFile(file)) {
        setSelectedFile(file);
        onFile(file);
      } else {
        setSelectedFile(null);
        onFile(null);
      }
    },
    [onFile, validateExcelFile]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset input
      }
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (disabled) return;

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current && !disabled) {
      fileInputRef.current.click();
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    onFile(null);
    setError(null);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.dropzone} ${isDragging ? styles.dragging : ""} ${
          disabled ? styles.disabled : ""
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input
          type="file"
          ref={fileInputRef}
          accept=".csv,text/csv"
          multiple={false}
          onChange={handleChange}
          disabled={disabled}
          className={styles.hiddenInput}
        />

        {!selectedFile ? (
          <div className={styles.dropzoneContent}>
            <IconFactory name="cloud-upload" />
            <Typography weight="bolder" className={styles.selectFileText}>
              <span>Click to select file </span>
              or drag and drop .csv file here (Max. 1mb)
            </Typography>
          </div>
        ) : (
          <div className={styles.filePreview}>
            <div className={styles.fileInfo}>
              <span className={styles.fileName}>{selectedFile.name}</span>
              <span className={styles.fileSize}>
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              className={styles.removeButton}
              aria-label="Remove file"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default CSVFileUpload;
export type { FileUploadProps };
