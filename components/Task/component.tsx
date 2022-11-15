import Avatar from "@components/Avatar";
import classNames from "classnames";
import { CSSProperties, forwardRef, useContext } from "react";
import GlobalContext from "../../contexts/global";
import TasksTableContext from "../../contexts/tasksTable";
import DragZoneContext from "../DragZone/context";
import { priorityClassNameMap, taskColorMap } from "./data";
import * as styles from './styles.css';
import { Props } from "./types";

// eslint-disable-next-line react/display-name
const Component = forwardRef<HTMLElement, Props>(({
  className,
  isElevating,
  isDragging,
  task,
  onMouseDown,
  onClick,
  ...restProps
}, ref) => {
  const { isAltVariant } = useContext(GlobalContext)
  const { usersMap } = useContext(TasksTableContext);
  const { dragZoneIsActive } = useContext(DragZoneContext);
  const taskIdPrefix = task.id.split('-')[0];
  const taskColor = taskColorMap[taskIdPrefix as keyof typeof taskColorMap]
  const taskAssigner = usersMap[task.assignerId]

  return ( 
    <article
      onClickCapture={onClick}
      onMouseDown={onMouseDown}
      ref={ref} 
      style={{
        '--taskColor': taskColor
      } as CSSProperties}
      className={classNames(
        className,
        styles.task,
        isElevating && styles.taskVariants.isElevating,
        isDragging && styles.taskVariants.isDragging,
        !isDragging && dragZoneIsActive && styles.taskVariants.isDisabled,
      )}
      {...restProps}
    >
      <div className={styles.taskIndicator} />
      <div className={styles.taskTitle} style={{ overflow: isAltVariant ? 'visible' : 'hidden', WebkitLineClamp: isAltVariant ? 5 : 2 }}>
        {isAltVariant && (
          <>
            <span className={styles.taskNumber}>{task.id}</span>
            {'   '}                  
          </>
        )}
        <span>{task.title}</span>
      </div>
      {Boolean(task.tags?.length) && (
        <div className={styles.taskTags}>
          {task.tags?.map(tag => (
            <span className={styles.taskTag} key={tag}>{tag}</span>
          ))}
        </div>
      )}
      {task.assignerId && (
        <div className={styles.taskAssigner}>
          <Avatar 
            className={styles.taskAssignerAvatar}
            color={taskAssigner.color}
            image={taskAssigner.avatar}
            alt={[taskAssigner.firstName[0], taskAssigner.lastName[0]].join('')}
          />
          <span className={styles.taskAssignerName}>
            {[taskAssigner.firstName, taskAssigner.lastName].join(' ')}
          </span>
        </div>      
      )}
      {task.remainingTime && (
        <div className={classNames(styles.taskTimeLine, isAltVariant && styles.taskTimeLineVariant.isExpanded)}>
          <div style={{ width: `${task.remainingTime ?? 0}%` }} className={styles.taskRemainingTime} />
          {isAltVariant && (
            <>
            <div className={styles.taskRemainingTimeText}>
              3h 15m
            </div>            
            <div className={styles.taskRemainingTimeText}>
              from
            </div>            
            <div className={styles.taskRemainingTimeText}>
              10h 30m
            </div>           
            </>
          )}
        </div>        
      )}
      {task.priority && (
        <div className={styles.taskPriority}>
          {[...new Array(task.priority)].map((_, index) => (
            <div className={classNames(
              styles.taskPriorityDot,
              priorityClassNameMap[index + 1 as keyof typeof priorityClassNameMap]
            )} key={index} />
          ))}
        </div>
      )}
    </article>    
  )
})

export default Component