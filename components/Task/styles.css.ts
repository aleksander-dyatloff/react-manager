import { style, styleVariants } from "@vanilla-extract/css";
import { color } from "../../styles/helpers";

export const task = style({
  position: 'relative',
  fontSize: 12,
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: color('backgroundPrimary'),
  width: '100%',
  overflow: 'hidden',
  transitionProperty: 'transform,box-shadow,background-color,opacity',
  transitionDuration: '200ms',
  cursor: 'pointer',
  padding: 8,

  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 6px 1px rgba(56, 56, 56, 0.2)',
  },
})

export const taskWrapper = style({
  position: 'relative',
  minHeight: '110px',
})

export const taskVariants = styleVariants({
  isElevating: [task, {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 6px 1px rgba(56, 56, 56, 0.2)',
    backgroundColor: color('backgroundPrimary', 0.7),
    backdropFilter: 'blur(8px) saturate(180%)',
  }],
  isDragging: [task, {
    pointerEvents: 'none',  
  }],
  isDisabled: [task, {
    transform: 'scale(0.95)',
    opacity: 0.5,
  }],
})

export const taskInModal = style({
  width: '40vw',
  height: '50vh',
})

export const taskIndicator = style({
  position: 'absolute',
  backgroundColor: 'var(--taskColor)',
  top: -24,
  left: 0,
  width: 10,
  height: 60,
  transform: 'rotate(45deg)'
})

export const taskTitle = style({
  lineHeight: 1.3,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginBottom: 'auto'
})

export const taskNumber = style({
  fontWeight: 600,
  paddingRight: 6,
  position: 'relative',

  ':after': {
    content: '',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 1,
    backgroundColor: color('backgroundMain'),
  }
})

export const taskTimeLine = style({
  position: 'absolute',
  left: 8,
  right: 8,
  bottom: 6,
  height: 4,
  borderRadius: 6,
  backgroundColor: color('backgroundMain'),
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  padding: '0 8px',
  fontSize: 11,
  fontWeight: 500,
})

export const taskTimeLineVariant = styleVariants({
  isExpanded: [taskTimeLine, {
    height: 12,
  }],
})

export const taskRemainingTime = style({
  position: 'absolute',
  left: 0,
  height: 'inherit',
  borderRadius: 'inherit',
  backgroundColor: 'var(--taskColor)',
})

export const taskRemainingTimeText = style({
  position: 'relative',
  margin: '0 auto',
  zIndex: 1,
})

export const taskAssigner = style({
  display: 'flex',
  alignItems: 'center',
  margin: '12px 0',
})

export const taskAssignerName = style({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const taskAssignerAvatar = style({
  minWidth: 20,
  height: 20,
  borderRadius: 20,
  overflow: 'hidden',
  backgroundColor: color('backgroundMain'),
  marginRight: 4,
})

export const taskPriority = style({
  display: 'flex',
  flexDirection: 'column-reverse',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 2,
  margin: 'auto 0',
  height: 20,
})

export const taskPriorityDot = style({
  marginTop: 2,
  width: 4,
  height: 4,
  borderRadius: 4,
  backgroundColor: 'black'
})

export const taskPriorityDotVariant = styleVariants({
  small: [taskPriorityDot, {
    backgroundColor: '#00bf00',
  }],
  medium: [taskPriorityDot, {
    backgroundColor: '#ffd900',
  }],
  large: [taskPriorityDot, {
    backgroundColor: '#a90000',
  }],
})

export const taskTags = style({
  margin: 'auto 0',
  fontSize: 10,
  paddingLeft: 10,
  fontWeight: 500,
  display: 'flex',
})

export const taskTag = style({
  backgroundColor: color('backgroundMain'),
  padding: '2px 4px',
  borderRadius: 20,
  color: 'var(--taskColor)',
})
