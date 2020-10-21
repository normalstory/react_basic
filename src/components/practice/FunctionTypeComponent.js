import React from "react";

/*함수형 컴포넌트는 라이프사이클, state 등 부가기능들을 제거한 상태이기 때문에 
꼭 필요한 경우가 아니라면 함수형 컴포넌트를 사용하길 권장한다 */

// function FureFunc(props){
//     return(
//         <div>
//             <h1>순수 함수 버전</h1>
//             <h3>Hello, {props.name}</h3>
//         </div>
//     )
// }
// export default FureFunc;


const LamdaFunc = ({name}) => {
    return(
        <div>
            <h1>람다 버전</h1>
            <h3>Hello, {name}</h3>
        </div>
    )
}
export default LamdaFunc;


