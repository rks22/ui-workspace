import React from 'react';

export const List = ({
    children,
    as,
    ...remainingProps}) => {
     const E = as || 'ul';
     return <E {...remainingProps}>
   {children}
     </E>;
};

export const ListItem = ({
  children,
  as,
  ...remainingProps}) => {
   const E = as || 'li';
   return <E {...remainingProps}>
       {children}
   </E>;
};
