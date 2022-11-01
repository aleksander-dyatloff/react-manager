import classNames from "classnames";
import { FC, Fragment, useEffect, useState } from "react";
import * as styles from './styles.css';
import { Props } from "./types";

const Component: FC<Props> = ({
  columns,
  tasks,
  isAltVariant,
}) => {
  const [tableHeadIsElevating, setTableHeadIsElevating] = useState(false);

  useEffect(() => {
    const handleTableScroll = () => {
      setTableHeadIsElevating(document.documentElement.scrollTop > 0)
    }

    document.addEventListener('scroll', handleTableScroll);

    return () => document.removeEventListener('scroll', handleTableScroll);
  }, [])

  return (
    <header className={classNames(styles.tableHead, {
      [styles.tableHeadVariant.elevating]: tableHeadIsElevating
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