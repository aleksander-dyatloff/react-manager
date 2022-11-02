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
        <TextField placeholder='Search Task' />
        <button onClick={() => setDarkTheme(!isDarkTheme)}>
          {isDarkTheme ? 'Dark' : 'Light'}
        </button>
        <div>
          {users.map(user => (
            <label key={user.id} className={styles.user}>
              <input
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
              {[user.firstName, user.lastName].join(' ')}
            </label>
          ))}
        </div>
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
