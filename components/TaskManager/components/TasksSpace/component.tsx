import DraggableItem from '@components/DraggableItem'
import FloatingElement from '@components/FloatingElement'
import Task from '@components/Task'
import TasksTableContext from '@contexts/tasksTable'
import TaskType from '@interfaces/Task'
import classNames from 'classnames'
import { FC, Fragment, useContext } from 'react'
import DroppableZone from '../../../DroppableZone'
import * as styles from './styles.css'
import { Props } from './types'

const Component: FC<Props> = ({
  space,
  columns,
  tasks,
  className,
  onTasksChange,
  onToggleOpenSpace,
  spaceIsOpen,
}) => {
  const {
    openedTask, openTask,
  } = useContext(TasksTableContext)

  return (
    <div className={classNames(
      styles.tableSpace,
      className,
    )}
    >
      <div
        onClick={() => onToggleOpenSpace(space.id)}
        className={styles.closestTasks}
      >
        {!spaceIsOpen && tasks
          .filter((task) => task.spaceId === space.id)
          .map((task, index) => (task.id === openedTask?.id ? null : (
            <div
              key={task.id}
              style={{
                marginLeft: index * -40,
                zIndex: index,
              }}
            >
              <DraggableItem
                value={task}
                key={task.id}
                render={(props) => (
                  <Task
                    className={styles.tableTask}
                    onClick={() => openTask(task)}
                    task={task}
                    isElevating={props.isDragging}
                    {...props}
                  />
                )}
              />
            </div>
          )))}
      </div>
      <div
        onClick={() => onToggleOpenSpace(space.id)}
        className={classNames(
          styles.tableSpaceStickerWrapper,
          !spaceIsOpen && styles.tableSpaceStickerWrapperVariant.closed,
          styles.tableSpaceSticker,
          !spaceIsOpen && styles.tableSpaceStickerVariant.closed,
        )}
      >
        <div className={styles.spaceTitle}>{space.title}</div>
      </div>
      {columns.map((column, index) => (
        <Fragment key={column.id}>
          <DroppableZone
            onDrop={({ value }: { value: TaskType }) => {
              onTasksChange?.(tasks.map((task) => ((task.id !== value.id) ? task : ({
                ...value,
                columnId: column.id,
                spaceId: space.id,
              }))))
            }}
            render={(props) => (
              <div
                className={classNames(
                  styles.columnBody,
                )}
                {...props}
              >
                {spaceIsOpen && tasks
                  .filter((task) => task.columnId === column.id && task.spaceId === space.id)
                  .map((task) => (task.id === openedTask?.id ? null : (
                    <DraggableItem
                      value={task}
                      key={task.id}
                      render={(props) => (
                        <Task
                          className={styles.tableTask}
                          onClick={() => openTask(task)}
                          task={task}
                          isElevating={props.isDragging}
                          {...props}
                        />
                      )}
                    />
                  )))}
              </div>
            )}
          />
          {spaceIsOpen && columns.length !== index + 1 && (
            <div className={styles.tableColumnDivider} />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default Component
