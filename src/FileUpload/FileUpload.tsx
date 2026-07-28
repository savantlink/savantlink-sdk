import { ChangeEvent, DragEvent, FC, useCallback, useRef, useState } from 'react'

import { clsx } from 'clsx'
import { CloudUpload } from 'lucide-react'

import styles from './FileUpload.module.scss'
import Typography from '../Typography'

interface FileUploadProps {
  onFile: (file: File | null) => void
  disabled?: boolean
  maxSize?: number // in bytes (default 5MB)
}

const MIME_TYPES = ['text/csv']
const EXTENSIONS = ['.csv']

const CSVFileUpload: FC<FileUploadProps> = ({
  onFile,
  disabled = false,
  maxSize = 5 * 1024 * 1024,
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateFile = useCallback(
    (file: File): boolean => {
      const isCSV =
        MIME_TYPES.includes(file.type) ||
        EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext))

      if (!isCSV) {
        setError('Only CSV files are allowed')
        return false
      }

      if (file.size > maxSize) {
        setError(`File exceeds ${maxSize / 1024 / 1024}MB limit`)
        return false
      }

      setError(null)
      return true
    },
    [maxSize]
  )

  const handleFile = useCallback(
    (file: File) => {
      if (validateFile(file)) {
        setSelectedFile(file)
        onFile(file)
      } else {
        setSelectedFile(null)
        onFile(null)
      }
    },
    [onFile, validateFile]
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0])
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!disabled) setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (disabled) return

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const triggerFileInput = () => {
    if (fileInputRef.current && !disabled) {
      fileInputRef.current.click()
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
    onFile(null)
    setError(null)
  }

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.dropzone, { [styles.dragging]: isDragging, [styles.disabled]: disabled })}
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
            <CloudUpload />
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
                e.stopPropagation()
                removeFile()
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
  )
}

CSVFileUpload.displayName = 'CSVFileUpload'

export default CSVFileUpload
export type { FileUploadProps }
