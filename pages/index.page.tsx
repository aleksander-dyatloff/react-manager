import FloatingElementsContainer from '@components/FloatingElementsContainer';
import TasksFilters from '@components/TasksFilters';
import TaskType from '@interfaces/Task';
import TasksColumn from '@interfaces/TasksColumn';
import TasksSpace from '@interfaces/TasksSpace';
import TaskUserType from '@interfaces/TaskUser';
import TaskVariant from '@interfaces/TaskVariant';
import objectArrayToMap from '@utils/objectArrayToMap';
import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import User1Image from '../assets/users/1.png';
import User3Image from '../assets/users/3.png';
import User4Image from '../assets/users/4.png';
import User5Image from '../assets/users/5.png';
import User6Image from '../assets/users/6.png';
import User7Image from '../assets/users/7.png';
import User8Image from '../assets/users/8.png';
import TaskManager from '../components/TaskManager';
import GlobalContext from '../contexts/global';
import TasksTableContext from '../contexts/tasksTable';
import { darkTheme, lightTheme } from '../styles/theme.css';
import * as styles from './styles.css';

const taskTypes: TaskVariant[] = [
  {
    id: '1',
    prefix: 'FE',
    name: 'Front-End',
    color: '#71a7ff',
  },
  {
    id: '2',
    prefix: 'BE',
    name: 'Back-End',
    color: '#3bb76e',
  },
  {
    id: '3',
    prefix: 'UX',
    name: 'User Experience',
    color: '#ffd771',
  },
  {
    id: '4',
    prefix: 'IOS',
    name: 'IOS Development',
    color: '#a771ff',
  },
  {
    id: '5',
    prefix: 'AN',
    name: 'Android Development',
    color: '#ff71a7',
  },
]

const users: TaskUserType[] = [
  {
    id: '1',
    firstName: 'Aleks',
    lastName: 'Dyatlov',
    avatar: User1Image,
  },
  {
    id: '2',
    firstName: 'Prakash',
    lastName: 'Pandey',
    color: '#540e0e',
  },
  {
    id: '3',
    firstName: 'Kate',
    lastName: 'Pochtarenko',
    avatar: User3Image,
  },
  {
    id: '4',
    firstName: 'Aleks',
    lastName: 'Tyagun',
    avatar: User8Image,
  },
  {
    id: '5',
    firstName: 'Anastasia',
    lastName: 'Samutkina',
    avatar: User7Image,
  },
  {
    id: '6',
    firstName: 'Astghik',
    lastName: 'Hovhannisyan',
    avatar: User6Image,
  },
  {
    id: '7',
    firstName: 'Aleksandr',
    lastName: 'Onopchenko',
    avatar: User5Image,
  },
  {
    id: '8',
    firstName: 'Alex',
    lastName: 'Bodnar',
    avatar: User4Image,
  },
  {
    id: '9',
    firstName: 'Ram',
    lastName: 'Pandey',
    color: '#aaaa00',
  },
  {
    id: '10',
    firstName: 'Pooja',
    lastName: 'Narula',
    color: '#2b2b93',
  },
  {
    id: '11',
    firstName: 'Veronica',
    lastName: 'Skoot',
    color: 'purple',
  },
  {
    id: '12',
    firstName: 'Arif',
    lastName: 'Stone',
    color: '#32c599',
  },
  {
    id: '13',
    firstName: 'Balam',
    lastName: 'Rawat',
    color: '#32c0c5',
  },
  {
    id: '14',
    firstName: 'Leo',
    lastName: 'Savaliya',
    color: '#c57432',
  },
]

const columnsData: TasksColumn[] = [
  {
    id: '0',
    title: 'To Do',
  },
  {
    id: '1',
    title: 'In Progress',
  },
  {
    id: '2',
    title: 'Blocked',
  },
  {
    id: '3',
    title: 'Ready for QA',
  },
  {
    id: '4',
    title: 'QA',
  },
  {
    id: '5',
    title: 'Done',
  },
]

const tasksSpacesData: TasksSpace[] = [
  {
    id: '0',
    title: 'Main Space',
  },
  {
    id: '1',
    title: 'Home Page',
  },
  {
    id: '2',
    title: 'Dashboard Page',
  },
  {
    id: '3',
    title: 'Profile Page',
  },
  {
    id: '4',
    title: 'Support Page',
  },
]

const tasksData: TaskType[] = [
  {
    id: 'FE-1',
    title: 'Initialize NextJS Project',
    assignerId: users[0].id,
    columnId: columnsData[5].id,
    spaceId: tasksSpacesData[1].id,
    typeId: taskTypes[0].id,
    remainingTime: 100,
    priority: 3,
  },
  {
    id: 'FE-2',
    title: 'Create Header',
    priority: 2,
    remainingTime: 85,
    assignerId: users[0].id,
    columnId: columnsData[4].id,
    spaceId: tasksSpacesData[1].id,
    typeId: taskTypes[0].id,
  },
  {
    id: 'FE-3',
    title: 'Create Footer',
    priority: 2,
    remainingTime: 95,
    assignerId: users[0].id,
    columnId: columnsData[3].id,
    spaceId: tasksSpacesData[1].id,
    typeId: taskTypes[0].id,
  },
  {
    id: 'FE-4',
    title: 'Add Storybook plugin',
    priority: 1,
    remainingTime: 40,
    assignerId: users[0].id,
    columnId: columnsData[3].id,
    spaceId: tasksSpacesData[2].id,
    typeId: taskTypes[0].id,
  },
  {
    id: 'FE-5',
    title: 'Create UI kit by design from Figma',
    priority: 3,
    remainingTime: 60,
    assignerId: users[0].id,
    columnId: columnsData[1].id,
    spaceId: tasksSpacesData[2].id,
    typeId: taskTypes[0].id,
  },
  {
    id: 'FE-6',
    title: 'Integrate Google Analytics and observe page loading and form submitting',
    priority: 1,
    assignerId: users[0].id,
    columnId: columnsData[0].id,
    spaceId: tasksSpacesData[2].id,
    typeId: taskTypes[0].id,
  },
  {
    id: 'FE-7',
    title: 'Configure project APIs with library',
    priority: 3,
    remainingTime: 100,
    tags: ['Needs fixes'],
    assignerId: users[0].id,
    columnId: columnsData[0].id,
    spaceId: tasksSpacesData[2].id,
    typeId: taskTypes[0].id,
  },
  {
    id: 'BE-2',
    title: 'Create Users API',
    priority: 2,
    remainingTime: 20,
    tags: ['Broken DataBase'],
    assignerId: users[2].id,
    columnId: columnsData[2].id,
    spaceId: tasksSpacesData[3].id,
    typeId: taskTypes[0].id,
  },
  {
    id: 'BE-1',
    title: 'Integrate MongoDb',
    priority: 3,
    remainingTime: 100,
    assignerId: users[2].id,
    columnId: columnsData[5].id,
    spaceId: tasksSpacesData[3].id,
    typeId: taskTypes[1].id,
  },
  {
    id: 'BE-3',
    title: 'Create Socials API',
    priority: 2,
    assignerId: users[2].id,
    columnId: columnsData[0].id,
    spaceId: tasksSpacesData[3].id,
    typeId: taskTypes[1].id,
  },
  {
    id: 'BE-4',
    title: 'Create Home Page API',
    priority: 2,
    remainingTime: 10,
    assignerId: users[2].id,
    columnId: columnsData[1].id,
    spaceId: tasksSpacesData[3].id,
    typeId: taskTypes[1].id,
  },
  {
    id: 'UX-1',
    title: 'Create UI-kit',
    priority: 2,
    remainingTime: 100,
    assignerId: users[1].id,
    columnId: columnsData[5].id,
    spaceId: tasksSpacesData[3].id,
    typeId: taskTypes[2].id,
  },
  {
    id: 'UX-2',
    title: 'Home Page',
    priority: 2,
    remainingTime: 50,
    assignerId: users[1].id,
    columnId: columnsData[1].id,
    spaceId: tasksSpacesData[3].id,
    typeId: taskTypes[2].id,
  },
  {
    id: 'UX-3',
    title: 'About Page',
    priority: 1,
    assignerId: users[1].id,
    columnId: columnsData[0].id,
    spaceId: tasksSpacesData[3].id,
    typeId: taskTypes[2].id,
  },
  {
    id: 'FE-8',
    title: 'Integrate Mailchimp to project',
    priority: 1,
    assignerId: users[0].id,
    columnId: columnsData[0].id,
    spaceId: tasksSpacesData[3].id,
    typeId: taskTypes[2].id,
  },
]

export default function Home() {
  const [isAltVariant, setIsAltVariant] = useState(false);
  const [existUsers, setExistUsers] = useState<TaskUserType['id'][]>(users.map(user => user.id))
  const [existTaskTypes, setExistTaskTypes] = useState<TaskVariant['id'][]>(taskTypes.map(task => task.id))
  const [tasks, setTasks] = useState<TaskType[]>(tasksData)
  const [closedSpaces, setClosedSpaces] = useState<TasksSpace['id'][]>([]);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [openedTask, setOpenedTask] = useState<TaskType | null>(null);

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

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.remove(lightTheme);
      document.documentElement.classList.add(darkTheme);
    } else {
      document.documentElement.classList.add(lightTheme);
      document.documentElement.classList.remove(darkTheme);    
    }
  }, [isDarkTheme])

  return (
    <GlobalContext.Provider value={{ isAltVariant, isDarkTheme, setDarkTheme }}>
        <TasksTableContext.Provider value={{
          users,
          tasks: tasksData,
          columns: columnsData,
          spaces: tasksSpacesData,
          usersMap: objectArrayToMap(users),
          spacesMap: objectArrayToMap(tasksSpacesData),
          columnsMap: objectArrayToMap(columnsData),
          existUsers, 
          setExistUsers,
          taskTypes,
          existTaskTypes,
          setExistTaskTypes,
          openedTask,
          openTask: setOpenedTask,
        }}
        >
    <div className={classNames(styles.app)}>
      <div className={styles.navBarWrapper}>
      <div className={styles.navBar}>
          <Image className={styles.navBarAvatar} src={User1Image.src} width={32} height={32} alt="avatar" />
          <button className={styles.navBarButton}>
            <svg fill='currentColor' viewBox="0 0 24 24">
              <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
            </svg>
          </button>
          <button className={classNames(styles.navBarButton, styles.navBarButtonVariant.isActive)}>
            <svg fill='currentColor' viewBox="0 0 24 24">
              <path d="M10 10.02h5V21h-5V10.02zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" />
            </svg>
          </button>
          <button className={styles.navBarButton}>
            <svg fill='currentColor' viewBox="0 0 24 24">
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm1 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1zm3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z" />
            </svg>
          </button>
          <button className={styles.navBarButton}>
            <svg fill='currentColor' viewBox="0 0 24 24">
              <path d="M11 10c0-.55.45-1 1-1s1 .45 1 1v7h-2v-7zm9 3c-.55 0-1 .45-1 1v5H5V5h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5c0-.55-.45-1-1-1zm1-8h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1zm-5 8c-.55 0-1 .45-1 1v3h2v-3c0-.55-.45-1-1-1zm-9-1v5h2v-5c0-.55-.45-1-1-1s-1 .45-1 1z" />
            </svg>
          </button>
          <div className={styles.navBarDivider} />
          <button className={styles.navBarButton}>
            <svg fill='currentColor' viewBox="0 0 24 24">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16z" />
            </svg>
          </button>
          <button className={styles.navBarButton}>
            <svg fill='currentColor' viewBox="0 0 24 24">
              <path d="M7.92 7.54c-.8-.34-1.14-1.33-.66-2.05C8.23 4.05 9.85 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.15.27-.24.49-.3.94-.09.73-.69 1.3-1.43 1.3-.87 0-1.58-.75-1.48-1.62.06-.51.18-1.04.46-1.54.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.17 0-1.93.61-2.4 1.34-.35.57-1.08.75-1.69.5zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
            </svg>
          </button>
          <button className={styles.navBarButton} onClick={() => setDarkTheme(!isDarkTheme)}>
            {isDarkTheme ? (
              <svg fill='currentColor' viewBox="0 0 24 24">
                <path d="m6.05 4.14-.39-.39c-.39-.39-1.02-.38-1.4 0l-.01.01c-.39.39-.39 1.02 0 1.4l.39.39c.39.39 1.01.39 1.4 0l.01-.01c.39-.38.39-1.02 0-1.4zM3.01 10.5H1.99c-.55 0-.99.44-.99.99v.01c0 .55.44.99.99.99H3c.56.01 1-.43 1-.98v-.01c0-.56-.44-1-.99-1zm9-9.95H12c-.56 0-1 .44-1 .99v.96c0 .55.44.99.99.99H12c.56.01 1-.43 1-.98v-.97c0-.55-.44-.99-.99-.99zm7.74 3.21c-.39-.39-1.02-.39-1.41-.01l-.39.39c-.39.39-.39 1.02 0 1.4l.01.01c.39.39 1.02.39 1.4 0l.39-.39c.39-.39.39-1.01 0-1.4zm-1.81 15.1.39.39c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-.39-.39c-.39-.39-1.02-.38-1.4 0-.4.4-.4 1.02-.01 1.41zM20 11.49v.01c0 .55.44.99.99.99H22c.55 0 .99-.44.99-.99v-.01c0-.55-.44-.99-.99-.99h-1.01c-.55 0-.99.44-.99.99zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-.01 16.95H12c.55 0 .99-.44.99-.99v-.96c0-.55-.44-.99-.99-.99h-.01c-.55 0-.99.44-.99.99v.96c0 .55.44.99.99.99zm-7.74-3.21c.39.39 1.02.39 1.41 0l.39-.39c.39-.39.38-1.02 0-1.4l-.01-.01a.9959.9959 0 0 0-1.41 0l-.39.39c-.38.4-.38 1.02.01 1.41z" />
              </svg>
            ) : (
              <svg fill='currentColor' viewBox="0 0 24 24">
                <path d="M11.01 3.05C6.51 3.54 3 7.36 3 12c0 4.97 4.03 9 9 9 4.63 0 8.45-3.5 8.95-8 .09-.79-.78-1.42-1.54-.95-.84.54-1.84.85-2.91.85-2.98 0-5.4-2.42-5.4-5.4 0-1.06.31-2.06.84-2.89.45-.67-.04-1.63-.93-1.56z" />
              </svg>
            )}
          </button>
          <div className={styles.navBarDivider} />
          <button className={styles.navBarButton}>
            <svg fill='currentColor' viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
            </svg>
          </button>
          <button className={styles.navBarButton}>
            <svg fill='currentColor' viewBox="0 0 24 24">
              <path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23c-.25-.44-.79-.62-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41c-.02.22-.03.44-.03.67s.01.45.03.68l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
            </svg>
          </button>
      </div>
      </div>
      <TasksFilters />
          <TaskManager
            columns={columnsData}
            spaces={tasksSpacesData}
            tasks={tasks.filter(task => {
              return existUsers.includes(task.assignerId)
                && existTaskTypes.includes(task.typeId)
            })}
            onTasksChange={setTasks}
            closedSpaces={closedSpaces}
            toggleCloseSpace={(spaceId) => {
              const spaceIsClosed = closedSpaces.find(id => id === spaceId)

              if (spaceIsClosed) setClosedSpaces(closedSpaces.filter(id => id !== spaceId))
              else setClosedSpaces([...closedSpaces, spaceId])
            }}
          />                  
    </div>    
        </TasksTableContext.Provider>
    </GlobalContext.Provider>
  )
}
