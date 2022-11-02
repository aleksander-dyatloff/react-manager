import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import User1Image from '../assets/users/1.png';
import User2Image from '../assets/users/2.png';
import User3Image from '../assets/users/3.png';
import { Task } from '../components/Task/types';
import TaskManager from '../components/TaskManager';
import { Column, TasksSpace } from '../components/TaskManager/components/TasksSpace/types';
import TextField from '../components/TextField';
import GlobalContext from '../contexts/global';
import { darkTheme, lightTheme } from '../styles/theme.css';
import * as styles from './styles.css';

const users = [
  {
    id: '1',
    firstName: 'Aleks',
    lastName: 'Dyatlov',
    avatar: User1Image,
  },
  {
    id: '2',
    firstName: 'Diana',
    lastName: 'Lima',
    avatar: User2Image,
  },
  {
    id: '3',
    firstName: 'Viacheslav',
    lastName: 'Sokolenkov',
    avatar: User3Image,
  },
]

const columnsData: Column[] = [
  {
    id: 0,
    title: 'To Do',
  },
  {
    id: 1,
    title: 'In Progress',
  },
  {
    id: 2,
    title: 'Blocked',
  },
  {
    id: 3,
    title: 'Ready for QA',
  },
  {
    id: 4,
    title: 'QA',
  },
  {
    id: 5,
    title: 'Done',
  },
]

const tasksSpacesData: TasksSpace[] = [
  {
    id: 0,
    title: 'Main Space',
  },
  {
    id: 1,
    title: 'Home Page',
  },
  {
    id: 2,
    title: 'Dashboard Page',
  },
  {
    id: 3,
    title: 'Profile Page',
  },
  {
    id: 4,
    title: 'Support Page',
  },
]

const tasksData: Task[] = [
  {
    id: 'FE-1',
    title: 'Initialize NextJS Project',
    columnId: 5,
    remainingTime: 100,
    assigner: users[0],
    priority: 3,
    spaceId: 1,
  },
  {
    id: 'FE-2',
    title: 'Create Header',
    columnId: 4,
    assigner: users[0],
    priority: 2,
    remainingTime: 85,
    spaceId: 1,
  },
  {
    id: 'FE-3',
    title: 'Create Footer',
    columnId: 3,
    assigner: users[0],
    priority: 2,
    remainingTime: 95,
    spaceId: 1,
  },
  {
    id: 'FE-4',
    title: 'Add Storybook plugin',
    columnId: 3,
    assigner: users[0],
    priority: 1,
    remainingTime: 40,
    spaceId: 2,
  },
  {
    id: 'FE-5',
    title: 'Create UI kit by design from Figma',
    columnId: 1,
    assigner: users[0],
    priority: 3,
    remainingTime: 60,
    spaceId: 2,
  },
  {
    id: 'FE-6',
    title: 'Integrate Google Analytics',
    columnId: 0,
    assigner: users[0],
    priority: 1,
    spaceId: 2,
  },
  {
    id: 'FE-7',
    title: 'Configure project APIs with library',
    columnId: 0,
    assigner: users[0],
    priority: 3,
    remainingTime: 100,
    tags: ['Needs fixes'],
    spaceId: 2,
  },
  {
    id: 'BE-2',
    title: 'Create Users API',
    columnId: 2,
    assigner: users[2],
    priority: 2,
    remainingTime: 20,
    tags: ['Broken DataBase'],
    spaceId: 3,
  },
  {
    id: 'BE-1',
    title: 'Integrate MongoDb',
    columnId: 5,
    assigner: users[2],
    priority: 3,
    remainingTime: 100,
    spaceId: 3,
  },
  {
    id: 'BE-3',
    title: 'Create Socials API',
    columnId: 0,
    assigner: users[2],
    priority: 2,
    spaceId: 3,
  },
  {
    id: 'BE-4',
    title: 'Create Home Page API',
    columnId: 1,
    assigner: users[2],
    priority: 2,
    remainingTime: 10,
    spaceId: 3,
  },
  {
    id: 'UX-1',
    title: 'Create UI-kit',
    columnId: 5,
    assigner: users[1],
    priority: 2,
    remainingTime: 100,
    spaceId: 3,
  },
  {
    id: 'UX-2',
    title: 'Home Page',
    columnId: 1,
    assigner: users[1],
    priority: 2,
    remainingTime: 50,
    spaceId: 3,
  },
  {
    id: 'UX-3',
    title: 'About Page',
    columnId: 0,
    assigner: users[1],
    priority: 1,
    spaceId: 3,
  },
  {
    id: 'FE-8',
    title: 'Integrate Mailchimp to project',
    columnId: 0,
    assigner: users[0],
    priority: 1,
    spaceId: 3,
  },
]

export default function Home() {
  const [isAltVariant, setIsAltVariant] = useState(false);
  const [existUsers, setExistUsers] = useState<string[]>(users.map(user => user.id))
  const [tasks, setTasks] = useState<Task[]>(tasksData)
  const [closedSpaces, setClosedSpaces] = useState<Array<string | number>>([]);
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Alt') {
        setIsAltVariant(true)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Alt') {
        setIsAltVariant(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);    
    }
  }, [])

  return (
    <GlobalContext.Provider value={{ isAltVariant, isDarkTheme }}>
    <div className={classNames(styles.app, isDarkTheme ? darkTheme : lightTheme)}>
      {/*<div className={styles.navBar}>*/}
      {/*</div>*/}
      <div className={styles.tasksFilter}>
        <TextField className={styles.searchField} placeholder='Search Task' />
        <div>
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
              <Image className={styles.avatar} {...user.avatar} width={20} height={20} alt={user.lastName} />
              <span>
                {[user.firstName, user.lastName].join(' ')}
              </span>
              {Boolean(existUsers.find(us => us === user.id)) ? (
                <svg viewBox='0 0 24 24' className={styles.icon} fill='currentColor'><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>              
              ) : (
                <svg viewBox='0 0 24 24' className={styles.icon} fill='currentColor'><path d="M12 6.5c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.97-.3 4.31-.82l2.72 2.72c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16.5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5zm2.97-5.33c-.15-1.4-1.25-2.49-2.64-2.64l2.64 2.64z"></path></svg>
              )}
            </label>
          ))}
        </div>
        <button onClick={() => setDarkTheme(!isDarkTheme)}>
          {isDarkTheme ? 'Dark' : 'Light'}
        </button>
      </div>
      <div>
      <TaskManager
        isAltVariant={isAltVariant}
        columns={columnsData}
        spaces={tasksSpacesData}
        tasks={tasks.filter(task => existUsers.includes(task.assigner?.id))}
        onTasksChange={setTasks}
        closedSpaces={closedSpaces}
        toggleCloseSpace={(spaceId) => {
          const spaceIsClosed = closedSpaces.find(id => id === spaceId)

          if (spaceIsClosed) setClosedSpaces(closedSpaces.filter(id => id !== spaceId))
          else setClosedSpaces([...closedSpaces, spaceId])
        }}
      />            
      </div>
    </div>    
    </GlobalContext.Provider>
  )
}
