import classNames from "classnames";
import { FC, Fragment, useContext, useEffect, useState } from "react";
import GlobalContext from "@contexts/global";  
import * as styles from './styles.css';
import { Props } from "./types";

const Component: FC<Props> = ({
  columns,
  tasks,
}) => {
  const [isElevating, setIsElevating] = useState(false);
  const { isAltVariant } = useContext(GlobalContext) 

  useEffect(() => {
    const handleTableScroll = () => {
      setIsElevating(document.documentElement.scrollTop > 0)  
    }

    document.addEventListener('scroll', handleTableScroll);

    return () => {
      document.removeEventListener('scroll', handleTableScroll);    
    }
  }, []);

  return (
    <header className={classNames(styles.tableHead, {
      [styles.tableHeadVariant.elevating]: isElevating
    })}>
      {columns.map((column, index) => (
        <Fragment key={column.id}>
          <div className={styles.columnHead}>
            <span className={styles.columnHeadText}>
              {column.title}            
            </span>
            {isAltVariant && (
              <>
                <span className={styles.columnHeadAltText}>
                  -
                </span>
                <span className={styles.columnHeadAltText}>
                  {tasks.filter(task => task.columnId === column.id).length}
                  {' '}
                  items
                </span>              
              </>
            )}
          </div>            
          {columns.length !== index + 1 && (
            <div style={{ height: '16px' }} className={styles.tableColumnDivider} />            
          )}
        </Fragment>
      ))}
    </header>
  )
}

export default Component