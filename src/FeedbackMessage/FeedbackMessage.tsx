import { HTMLAttributes, ReactNode } from 'react'

import styles from './FeedbackMessage.module.scss'

import Button from '@/Button'
import Typography from '@/Typography'

type FeedbackMessageProps = {
  icon?: ReactNode
  title?: string
  subtitle?: string
  buttonText?: string
  buttonIcon?: ReactNode
  buttonLink?: string
  buttonAction?: () => void
  buttonDisabled?: boolean
} & HTMLAttributes<HTMLElement>

const FeedbackMessage = ({
  icon,
  title,
  subtitle,
  buttonIcon,
  buttonText,
  buttonLink,
  buttonAction,
  buttonDisabled,
  ...props
}: FeedbackMessageProps) => {
  return (
    <section className={styles.wrapper} {...props}>
      {icon && <span>{icon}</span>}
      {title && (
        <Typography responsive variant="h4" tag="h2" weight="bolder">
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography responsive variant="regular" tag="p" className={styles.subtitle}>
          {subtitle}
        </Typography>
      )}
      {buttonText && (
        <Button
          tag={buttonLink ? 'a' : 'button'}
          type={buttonAction ? 'button' : undefined}
          onClick={buttonAction}
          icon={buttonIcon}
          href={buttonLink}
          disabled={buttonDisabled}
        >
          {buttonText}
        </Button>
      )}
    </section>
  )
}

export default FeedbackMessage
export type { FeedbackMessageProps }
