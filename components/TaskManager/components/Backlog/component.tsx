import { FC, useState } from 'react'
import classNames from 'classnames'
import TaskType from '@interfaces/Task'
import { Props } from './types'
import * as styles from './styles.css'
import DroppableZone from '../../../DroppableZone'
import ElementPosition from '../../../ElementPosition'

const Component: FC<Props> = ({
  tasks,
  onTasksChange,
}) => {
  const backlogTasks = tasks.filter((task) => task.columnId === '-1' && task.spaceId === '-1')
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.backdropButtonWrapper}>
      <div
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(true)}
        className={classNames(
          styles.backdropButton,
          isOpen && styles.backdropButtonVariant.open,
        )}
      >
        <DroppableZone
          onDrop={({ value }: { value: TaskType }) => {
            onTasksChange?.(tasks.map((task) => ((task.id !== value.id) ? task : ({
              ...value,
              columnId: '-1',
              spaceId: '-1',
            }))))
          }}
          render={(props) => (
            <div
              className={styles.backlogDropZone}
              {...props}
            />
          )}
        />
        {!isOpen && backlogTasks.map((task) => (
          <ElementPosition
            key={task.id}
            order={task.id}
            id={task.id}
            className={styles.backlogTask}
          />
        ))}
        <svg
          className={styles.backdropButtonIcon}
          fill='currentColor'
          aria-hidden='true'
          viewBox='0 0 24 24'
        >
          <path d='m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zm-8.89 11.92L6.5 12H10v-2h4v2h3.5l-5.15 5.15c-.19.19-.51.19-.7 0zM5.12 5l.81-1h12l.94 1H5.12z' />
        </svg>
        {isOpen && (
          <div className={styles.backlogTaskList}>
            {backlogTasks.map((task) => (
              <ElementPosition
                key={task.id}
                order={task.id}
                id={task.id}
                className={styles.backlogTaskItem}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Component
