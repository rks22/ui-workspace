import React from 'react';
import posed,{ pose,PoseGroup } from 'react-pose';
const List = posed.ul();

export const MotionList = ({children,...otherProps}) => (
  <List {...otherProps}>
    <PoseGroup>
     {children}
    </PoseGroup>
  </List>
);


export const MotionListItem = posed.li({
  flipMove: {
    transition: {
      default: { ease: 'easeOut' }
    }
  },
  enter: { opacity: 1, x: 0, ease: 'easeOut', transition: {
    default: { ease: 'easeOut' }
  } },
  exit: { opacity: 0, x: -100, transition: {
    default: { ease: 'easeOut' }
  } }
});
