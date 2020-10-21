import React from 'react';

import styles from '../practice/comVsFunc.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);


const dog =function Bdog() {
    let name='Wdog';  
    return alert(name)
}

const pets = ['강아지', '고양이', '호랑이', '사자'];
const petListL = pets.map(
    (a, index) => (<li key={index}>{a}</li>)
);

const petListF = pets.map(
    function(a, index){
        return <li key={index}>{a}</li>
    }
);

const FuncOfLamda = () => {
    return (
    <div>
        <h1> 컴포넌트 연습 </h1>
        <button className={cx('func')} onClick={dog}>버튼</button>
        <h3>함수 방식</h3>
        {petListF}
        <h3>람다 방식</h3>        
        {petListL}
    </div>
  );
};

export default FuncOfLamda;