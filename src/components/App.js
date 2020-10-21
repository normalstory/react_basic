import React, {Component} from 'react';
import '../styles/base.scss';

import FunctionTypeComponent from './practice/FunctionTypeComponent';

export default class App extends Component{
    render(){
        return(
            <FunctionTypeComponent name="홍길동"></FunctionTypeComponent>
        )
    }
}