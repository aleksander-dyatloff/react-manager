import FloatingElement from "@components/FloatingElement";
import FloatingElementsContainer from "@components/FloatingElementsContainer";
import { useState } from "react";
import * as styles from './testStyles.css';

export default function Home() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
        <button onClick={() => setIsActive(!isActive)}>
          Click
        </button>
      <FloatingElementsContainer>
        <div style={{ display: 'flex' }}>
          {!isActive && (
            <FloatingElement log="small" className={styles.start} floatDuration={200} floatId="b">
            </FloatingElement>                      
          )}
          {isActive && (
            <FloatingElement log="big" className={styles.end} floatDuration={200} floatId="b">
            </FloatingElement>                      
          )}
        </div>
      </FloatingElementsContainer>
    </div>
  )
}