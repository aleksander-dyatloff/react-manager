import classNames from "classnames";
import { FC, Fragment } from "react";
import DroppableZone from "../../../DroppableZone";
import ElementPosition from "../../../ElementPosition";
import { Task as TaskType } from "../../../Task/types";
import * as styles from './styles.css';
import { Props } from "./types";

const Component: FC<Props> = ({
  space,
  columns,
  tasks,
  className,
  onTasksChange,
  prevSpaceMaxTasks,
  onToggleOpenSpace,
  spaceIsOpen,
  spaceMaxTasks,
}) => {
  return (
    <div className={classNames(styles.tableSpace, className)}>
      <div onClick={() => onToggleOpenSpace(space.id)} className={styles.closestTasks}>
        {!spaceIsOpen && tasks
          .filter(task => task.spaceId === space.id)
          .map((task, index) => (
            <ElementPosition
              style={{
                left: `calc(-120px + ${index * 24 + 'px'})`,
                zIndex: tasks.filter(task => task.spaceId === space.id).length - index
              }}
              order={`${prevSpaceMaxTasks}-${index}`}
              className={styles.spaceTask}
              key={task.id}
              id={task.id}
            />
        ))}
      </div>
      <ElementPosition
        id={`${space.id}-${space.title}`}
        className={classNames(styles.tableSpaceStickerWrapper, !spaceIsOpen && styles.tableSpaceStickerWrapperVariant.closed)}
        order={`${prevSpaceMaxTasks}-${spaceIsOpen ? 'open' : 'close'}-${spaceMaxTasks}`}
      />
      <div
        id={`${space.id}-${space.title}`}
        onClick={() => onToggleOpenSpace(space.id)}
        className={classNames(
          styles.tableSpaceSticker,
          !spaceIsOpen && styles.tableSpaceStickerVariant.closed
        )}
      >
        <div className={styles.spaceTitle}>{space.title}</div>
      </div>
      {spaceIsOpen && columns.map((column, index) => (
        <Fragment key={column.id}>
          <DroppableZone
            onDrop={({ value }: { value: TaskType }) => {
              onTasksChange?.(tasks.map(task => {
                return (task.id !== value.id) ? task : ({
                  ...value,
                  columnId: column.id,
                  spaceId: space.id,
                })
              }))
            }}
            render={({ inFocus, ...props }) => (
              <div className={classNames(
                styles.columnBody,
              )} {...props}>
                {spaceIsOpen && tasks
                  .filter(task => task.columnId === column.id && task.spaceId === space.id)
                  .map((task, index) => (
                    <ElementPosition
                      order={`${prevSpaceMaxTasks}-${column.id}-${index}`}
                      className={styles.tableTask}
                      key={task.id}
                      id={task.id}
                    />
                ))}
              </div>              
            )}
          />
          {columns.length !== index + 1 && (
            <div className={styles.tableColumnDivider} />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default Component