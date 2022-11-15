import { FC, PropsWithChildren, useContext, useEffect, useLayoutEffect, useRef } from "react";
import { Props } from "./types";
import classNames from "classnames";
import * as styles from './styles.css'
import FloatingElementsContext from "../FloatingElementsContainer/context";

const Component: FC<PropsWithChildren<Props>> = ({
  floatId,
  floatDuration,
  className,
  children,
  type,
  changeSizeKey,
  contentClassName,
  ...restProps
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const {
    containerRef,
    getElementLastPosition,
    setElementLastPosition,
  } = useContext(FloatingElementsContext);

  const contentStartPosition = getElementLastPosition(floatId);

  useEffect(() => {
    if (!contentStartPosition || !contentRef.current) return

    contentRef.current.style.position = 'absolute';
    contentRef.current.style.top = contentStartPosition.top + 'px';
    contentRef.current.style.left = contentStartPosition.left + 'px';
    contentRef.current.style.width = contentStartPosition.width + 'px';
    contentRef.current.style.height = contentStartPosition.height + 'px';
  }, [])

  useEffect(() => {
    if (!contentRef.current || !wrapperRef.current || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect();
    const wrapperRect = wrapperRef.current.getBoundingClientRect();

    contentRef.current.style.top = wrapperRect.y - containerRect.y + 'px';
    contentRef.current.style.left = wrapperRect.x - containerRect.x + 'px';
    contentRef.current.style.position = 'absolute';
    contentRef.current.style.width = wrapperRect.width + 'px';
    contentRef.current.style.height = wrapperRect.height + 'px';

    setTimeout(() => {
      if (!contentRef.current || !wrapperRef.current) return

      contentRef.current.style.position = 'static';
      contentRef.current.style.width = 'auto';
      contentRef.current.style.height = 'auto';
    }, 200);
  }, [changeSizeKey, contentRef, wrapperRef, containerRef]);

  useEffect(() => {
    if (!contentRef.current || !wrapperRef.current || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect();
    const wrapperRect = wrapperRef.current.getBoundingClientRect();

    contentRef.current.style.position = 'absolute';
    contentRef.current.style.top = wrapperRect.y - containerRect.y + 'px';
    contentRef.current.style.left = wrapperRect.x - containerRect.x + 'px';
    contentRef.current.style.width = wrapperRect.width + 'px';
    contentRef.current.style.height = wrapperRect.height + 'px'; 

    const setLastPosition = () => {
      if (!containerRef.current || !contentRef.current) return;

      const contentStyles = getComputedStyle(contentRef.current);

      setElementLastPosition(floatId, {
        top: Number.parseFloat(contentStyles.top),
        left: Number.parseFloat(contentStyles.left),
        width: Number.parseFloat(contentStyles.width),
        height: Number.parseFloat(contentStyles.height),
      })
    }

    const timeoutId = setTimeout(() => {
      if (!containerRef.current || !contentRef.current) return;

      contentRef.current.style.position = 'static';
      contentRef.current.style.width = 'auto';
      contentRef.current.style.height = 'auto';

      setLastPosition()
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      setLastPosition()
    }
  }, []);

  return (
    <div ref={wrapperRef} className={classNames(styles.wrapper, className)} {...restProps}>
      <div ref={contentRef} className={classNames(styles.content, contentClassName)}>
        {children}
      </div>
    </div>
  )
}

export default Component