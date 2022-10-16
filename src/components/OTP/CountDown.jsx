import React, { useEffect, useState } from "react";
const CountDown = (props) => {
  useEffect(() => {
    if (props.count === 0) {
      props.setIsDisableBtn(true);
      return;
    }
    const timer = setInterval(() => {
      props.setCount(props.count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [props.count]);
  return <div>{props.count}</div>;
};
// class CountDown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 10,
//     };
//   }
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       let currentCount = this.state.count;
//         this.setState({
//             count: currentCount-1,
//         })
//     },1000);
//   }
//   componentDidUpdate(prevPros,prevState){
//       if(this.state.count !== prevState.count && this.state.count ===0 ){
//           if(this.timer){
//             clearInterval(this.timer);
//           }
//       }
//   }
//   render() {
//     return <div>{this.state.count}</div>;
//   }
// }
export default CountDown;
