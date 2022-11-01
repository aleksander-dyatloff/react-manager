import classNames from "classnames";
import { CSSProperties, forwardRef, useEffect, useState } from "react";
import ElementPosition from "../ElementPosition";
import Modal from "../Modal";
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
  isAltVariant,
  ...restProps
}, ref) => {
  const [taskIsOpen, setTaskIsOpen] = useState(false);
  const taskIdPrefix = task.id.split('-')[0];
  const taskColor = taskColorMap[taskIdPrefix as keyof typeof taskColorMap]

  return (
    <>
    <Modal isOpen={taskIsOpen} onClose={() => setTaskIsOpen(false)}>
      {taskIsOpen && <ElementPosition className={styles.taskInModal} id={task.id} />}
    </Modal>    
    <article
      id={task.id}
      onClickCapture={() => setTaskIsOpen(true)}
      onMouseDown={onMouseDown}
      ref={ref} 
      style={{
        '--taskColor': taskColor
      } as CSSProperties}
      className={classNames(
        styles.task,
        isElevating && styles.taskVariants.isElevating,
        isDragging && styles.taskVariants.isDragging
      )}
      {...restProps}
    >
      <div className={styles.taskIndicator} />
      <div className={styles.taskTitle}>
        {!isAltVariant && (
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
      <div className={styles.taskAssigner}>
        <img className={styles.taskAssignerAvatar} src={task.assigner?.avatar} alt={[task.assigner?.firstName, task.assigner?.lastName].join(' ')} />
        <span className={styles.taskAssignerName}>{[task.assigner?.firstName, task.assigner?.lastName].join(' ')}</span>
      </div>
      {task.remainingTime && (
        <div className={styles.taskTimeLine}>
          {task.remainingTime && (
            <div style={{ width: `${task.remainingTime}%` }} className={styles.taskRemainingTime} />
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
    </>
  )
})

export default Component