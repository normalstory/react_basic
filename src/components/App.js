import React, {Component} from 'react';
import '../styles/base.scss';

import CrudPractice from './practice/CrudPractice';

export default class App extends Component{
    render(){
        return(
            <CrudPractice></CrudPractice>
        )
    }
}