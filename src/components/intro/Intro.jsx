// export default function Intro() {
//   return (
//     <div className='intro' style={{margin: '20px 0'}}>
//       <h2>Университет Frontend & AI разработки</h2>
//       <p>Освойте востребованные навыки — от профессии до отдельной технологии — используя AI как основной инструмент в обучении и работе.</p>
//     </div>
//   )
// }

import React from "react";

export default function Intro() {
  return React.createElement(
    'div',
    {style: {margin: '20px 0'}},
    [
      React.createElement(
      'h2',
      {
        className: 'intro',
        style:{textAlign:'center'},
        key: 'intro-title',
      },
      'Университет Frontend & AI разработки'),
      React.createElement(
        'p',
        {key: 'intro-description'},
        'Освойте востребованные навыки — от профессии до отдельной технологии — используя AI как основной инструмент в обучении и работе.'
      )
    ]
  )
}