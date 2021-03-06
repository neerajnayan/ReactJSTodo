import React from 'react';

import FilterLink from './FilterLink';

// export default () => (
//   <p>
//     Show:
//     {' '}
//     <FilterLink filter='SHOW_ALL'>
//       All
//     </FilterLink>
//     {', '}
//     <FilterLink filter='SHOW_ACTIVE'>
//       Active
//     </FilterLink>
//     {', '}
//     <FilterLink filter='SHOW_COMPLETED'>
//       Completed
//     </FilterLink>
//   </p>
// );


export default () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='all'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='active'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='completed'>
      Completed
    </FilterLink>
  </p>
);