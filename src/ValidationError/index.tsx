import styles from './ValidationError.module.scss'

import Typography from '@/Typography'

interface ApiError {
  message: string
  msg?: string
  code?: string
  response?: {
    data?: {
      errors?: Array<{ msg?: string; message?: string; error?: string }>
      message?: string
      error?: string
    }
  }
}

const ValidationError = ({ error }: { error?: ApiError | null }) => {
  if (!error) return null // Return nothing if there's no error
  const apiErrors = error.response?.data?.errors || []
  const apiError = error.response?.data?.error || error.response?.data?.message

  return (
    <>
      {apiErrors.length ? (
        apiErrors.map((err, index) => (
          <Typography key={index} variant="label" className={styles.validationError}>
            {err?.msg || err?.message || err?.error || 'An unknown error occurred.'}
          </Typography>
        ))
      ) : (
        <Typography variant="label" className={styles.validationError}>
          {apiError || error.msg || error.message || 'An unknown error occurred.'}
        </Typography>
      )}
    </>
  )
}

export default ValidationError
