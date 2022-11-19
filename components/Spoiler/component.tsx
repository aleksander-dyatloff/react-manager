import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Button from '@components/Button'
import { Props } from './component.types'
import * as styles from './component.css'

const Component: FC<PropsWithChildren<Props>> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const bodyRef = useRef<HTMLDivElement | null>(null)

  useEffect(
    () => {
      if (!bodyRef.current) return

      if (isOpen) bodyRef.current.style.height = `${bodyRef.current.scrollHeight}px`
      else bodyRef.current.style.height = '0px'
    },
    [isOpen],
  )

  return (
    <div className={styles.wrapper}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          styles.header,
          isOpen && styles.headerVariant.isActive,
        )}
      >
        <span>{title}</span>
        <svg
          className={classNames(
            styles.icon,
            isOpen && styles.iconVariant.isActive,
          )}
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z' />
        </svg>
      </Button>
      <div
        ref={bodyRef}
        className={styles.body}
      >
        {isOpen && children}
      </div>
    </div>
  )
}

export default Component
