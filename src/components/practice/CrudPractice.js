import React, {Component} from 'react';

export default class CrudPractice extends Component{
    state={
        names:['홍길동', '홍길서', '홍길남', '홍길북'],
        name:''
    };
    handleInput = (e) => {
        //잘못된 예 this.state.name=e.target.value
        this.setState({
            name:e.target.value
        });
    };
    render(){
        const CrudList = this.state.names.map(
            (name, index)=><li key={index}>{name}</li>
        );
        return(
            <div>
                <h1>CRUD Practice</h1>
                <input type="text" onChange={this.handleInput} placeholder="내용을 입력해주세요"></input><button>추가</button>
                <h3>List</h3>
                {CrudList}
            </div>
        )
    }

}