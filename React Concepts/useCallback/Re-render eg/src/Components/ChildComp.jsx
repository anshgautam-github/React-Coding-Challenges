import React from 'react'

// const ChildComp = (props) => {
//     console.log("Child comp again got re-rendered")
//   return (
//     <button>
//         {props.buttonName}
//     </button>
//   )
// }


//WRAPPED CODE ->>
// const ChildComp = React.memo(
//     (props) => {
//             console.log("Child comp again got re-rendered")
//           return (
//             <button>
//                 {props.buttonName}
//             </button>
//           )
//         }
// )

//React memo-> comp-> rerender only-> if props chnage -> else no re-render
//Now it will get reerndered-> only when the btn name chnages 


//but if u send a funciton -> then react.memo() -> won't save u from re-rendering


//useCallback use case ->
const ChildComp = React.memo(
    (props) => {
            console.log("Child comp again got re-rendered")
          return (
            <button onClick={props.handleClick}>
                {props.buttonName}
            </button>
          )
        }
)






export default ChildComp