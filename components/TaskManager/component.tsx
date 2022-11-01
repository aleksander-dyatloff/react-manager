import classNames from 'classnames';
import { FC, Fragment, useEffect, useState } from "react";
import DraggableItem from "../DraggableItem";
import ElementPositionContainer from "../ElementPositionContainer";
import Task from "../Task";
import Backlog from './components/Backlog';
import TasksSpace from './components/TasksSpace';
import * as styles from './styles.css';
import { Props } from "./types";

const Component: FC<Props> = ({ columns = [], tasks = [], spaces = [], onTasksChange, closedSpaces, toggleCloseSpace, isAltVariant }) => {
  const [tableHeadIsElevating, setTableHeadIsElevating] = useState(false);

  const spacesData = spaces.map((space, spaceIndex) => {
    const spaceTasks = tasks.filter(task => task.spaceId === space.id);
    const prevSpaceId = spaces[spaceIndex - 1]?.id
    const prevSpaceTasks = tasks.filter(task => task.spaceId === prevSpaceId);
    const prevSpaceTasksLength = columns
      .map(
        (column) => prevSpaceTasks.filter(task => task.columnId === column.id)?.length
      )

    const spaceTasksLength = columns
      .map(
        (column) => spaceTasks.filter(task => task.columnId === column.id)?.length
      )

    return ({
      space,
      tasks: spaceTasks,
      prevSpaceMaxTasks: closedSpaces.find(id => id === prevSpaceId) ? 0 : Math.max(...prevSpaceTasksLength) ?? 0,
      spaceMaxTasks: closedSpaces.find(id => id === prevSpaceId) ? 0 : Math.max(...spaceTasksLength) ?? 0,
    })
  })

  useEffect(() => {
    const handleTableScroll = () => {
      setTableHeadIsElevating(document.documentElement.scrollTop > 0)
    }

    document.addEventListener('scroll', handleTableScroll);

    return () => document.removeEventListener('scroll', handleTableScroll);
  }, [])

  return (
    <section className={styles.table}>
      <header className={classNames(styles.tableHead, {
        [styles.tableHeadVariant.elevating]: tableHeadIsElevating
      })}>
        {columns.map((column, index) => (
          <Fragment key={column.id}>
            <div className={styles.columnHead}>
              {column.title}
            </div>
            {columns.length !== index + 1 && (
              <div style={{ height: '16px' }} className={styles.tableColumnDivider} />
            )}
          </Fragment>
        ))}
      </header>
      <ElementPositionContainer     
        className={styles.tableBody}
      >
        <Backlog
          tasks={tasks}
          onTasksChange={onTasksChange}
        />
        {tasks
          .map(task => (
          <DraggableItem
            value={task}
            key={task.id}
            render={({ isDragging, ...props}) => (
              <Task
                isAltVariant={isAltVariant}
                isElevating={Boolean(
                  closedSpaces.find(spaceId => spaceId === task.spaceId) ?? isDragging
                )}
                isDragging={isDragging}
                task={task}
                {...props}
              />
            )}
          />
        ))}          
        {spacesData.map(({ space, prevSpaceMaxTasks, spaceMaxTasks }, spaceIndex) => (
          <Fragment key={space.id}>
            <TasksSpace
              spaceIsOpen={!closedSpaces.find(id => id === space.id)}
              onToggleOpenSpace={toggleCloseSpace}
              spaceMaxTasks={spaceMaxTasks}
              prevSpaceMaxTasks={prevSpaceMaxTasks}
              tasks={tasks}
              columns={columns}
              space={space}
              onTasksChange={onTasksChange}
            />
            {spaces.length !== spaceIndex + 1 && (
              <div className={styles.tableSpaceDividersWrapper}>
                {columns.map(column => (
                  <div key={column.id} className={styles.tableSpaceDivider} />
                ))}
              </div>
            )}
          </Fragment>
        ))}
      </ElementPositionContainer>
    </section>
  )
}

export default Component