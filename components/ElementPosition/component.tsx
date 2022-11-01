import { FC, useContext, useEffect, useRef } from "react";
import ElementPositionContainerContext from "../ElementPositionContainer/context";
import { Props } from "./types";

const Component: FC<Props> = ({
  id,
  className,
  order,
  style,
}) => {
  const { ref: containerRef } = useContext(ElementPositionContainerContext)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | number | undefined

    const realElement = document.getElementById(id);

    if (!realElement) return;

    if (!ref.current || !containerRef.current) return;

    const styles = getComputedStyle(ref.current)

    const containerRect = containerRef.current.getBoundingClientRect();
    const rect = ref.current.getBoundingClientRect();

    console.log('rect', rect);
    console.log('containerRect', containerRect);

    realElement.style.transitionProperty = [
      'top','left','width','height',
      ...realElement.style.transitionProperty.split(', ')
    ].filter(v => Boolean(v)).join(', ');
    realElement.style.transformOrigin = styles.transformOrigin;
    realElement.style.opacity = styles.opacity;
    realElement.style.transitionDuration = '200ms';
    realElement.style.transitionTimingFunction = 'ease-out';
    realElement.style.position = 'absolute';
    realElement.style.top = rect.y - containerRect.y + 'px';
    realElement.style.left = rect.x - containerRect.x + 'px';
    realElement.style.width = rect.width + 'px';
    realElement.style.height = rect.height + 'px';
    realElement.style.zIndex = styles.zIndex;

    timeoutId = setTimeout(() => {
      realElement.style.transitionProperty = realElement.style.transitionProperty.split(', ').filter(prop => {
        return (prop !== 'top' && prop !== 'left' && prop !== 'width' && prop !== 'height')
      }).join(', ');
    }, 200)

    return () => {
      clearTimeout(timeoutId);
    }
  }, [id, order, containerRef]);

  return (
    <div ref={ref} style={style} className={className} />
  )
}

export default Component