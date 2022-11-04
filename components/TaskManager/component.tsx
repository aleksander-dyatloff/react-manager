import { FC, Fragment } from "react";
import DraggableItem from "../DraggableItem";
import DragZone from '../DragZone';
import ElementPositionContainer from "../ElementPositionContainer";
import Task from "../Task";
import Backlog from './components/Backlog';
import Header from './components/Header';
import TasksSpace from './components/TasksSpace';
import * as styles from './styles.css';
import { Props } from "./types";

const Component: FC<Props> = ({ columns = [], tasks = [], spaces = [], onTasksChange, closedSpaces, toggleCloseSpace }) => {
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

  return (
    <DragZone render={(props) => (
      <section className={styles.table} {...props}>
        <Header tasks={tasks} columns={columns} />
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
    )}
    />
  )
}

export default Component