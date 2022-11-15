import Avatar from "@components/Avatar";
import Select from "@components/Select";
import Spoiler from "@components/Spoiler";
import TextField from "@components/TextField";
import classNames from "classnames";
import { FC, useContext } from "react";
import TasksTableContext from "../../contexts/tasksTable";
import * as styles from './styles.css';
import { Props } from "./types";

const Component: FC<Props> = () => {
  const { users, existUsers, setExistUsers, existTaskTypes, setExistTaskTypes, taskTypes } = useContext(TasksTableContext)

  return (
    <div className={styles.tasksFilterWrapper}>
      <div className={styles.tasksFilterHeader}>
        <Select className={styles.searchField} />
        <TextField value="" placeholder='Search Task' />      
      </div>
      <div className={styles.tasksFilter}>
        <Spoiler title="Users">
          {users.map(user => (
            <label key={user.id} className={classNames(styles.user, !existUsers.find(us => us === user.id) && styles.userDisabled)}>
              <input
                className={styles.userCheckbox}
                type="checkbox"
                checked={Boolean(existUsers.find(us => us === user.id))}
                onChange={() => {
                  setExistUsers(
                    Boolean(existUsers.find(us => us === user.id))
                    ? existUsers.filter(us => us !== user.id)
                    : [...existUsers, user.id]
                  )
                }}
              />
              <Avatar color={user.color} className={styles.avatar} image={user.avatar} alt={[user.firstName[0], user.lastName[0]].join('')} />
              <span className={styles.filterTitle}>
                {[user.firstName, user.lastName].join(' ')}
              </span>
              {Boolean(existUsers.find(us => us === user.id)) ? (
                <svg viewBox='0 0 24 24' className={styles.icon} fill='currentColor'><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>              
              ) : (
                <svg viewBox='0 0 24 24' className={styles.icon} fill='currentColor'><path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z"></path></svg>
              )}
            </label>
          ))}       
        </Spoiler>
        <Spoiler title="Departments">
          {taskTypes.map(type => (
            <label key={type.id} className={classNames(styles.user, !existTaskTypes.find(tp => tp === type.id) && styles.userDisabled)}>
              <input
                className={styles.userCheckbox}
                type="checkbox"
                checked={Boolean(existTaskTypes.find(tp => tp === type.id))}
                onChange={() => {
                  setExistTaskTypes(
                    Boolean(existTaskTypes.find(tp => tp === type.id))
                    ? existTaskTypes.filter(tp => tp !== type.id)
                    : [...existTaskTypes, type.id]
                  )
                }}
              />
              <div className={styles.filterColor} style={{ backgroundColor: type.color }} />
              <span className={styles.filterTitle}>
                <b>{type.prefix}</b>
                {' | '}
                {type.name}
              </span>
              {Boolean(existTaskTypes.find(tp => tp === type.id)) ? (
                <svg viewBox='0 0 24 24' className={styles.icon} fill='currentColor'><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>              
              ) : (
                <svg viewBox='0 0 24 24' className={styles.icon} fill='currentColor'><path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z"></path></svg>
              )}
            </label>
          ))}        
        </Spoiler>
        <Spoiler title="Types" />
        <Spoiler title="Tags" />
      </div>    
    </div>
  )
}

export default Component