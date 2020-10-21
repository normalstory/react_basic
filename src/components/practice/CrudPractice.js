import React, {Component} from 'react';

export default class CrudPractice extends Component{
    state={
        names : ['홍길동', '홍길서', '홍길남', '홍길북'],
        name : ''
    };

    handleInput = (e) => {
        //잘못된 예 this.state.name=e.target.value
        this.setState({
            name : e.target.value
        });
    };
    handleInsert = () =>{
        this.setState({//concat:push와 달리 기존배열과 새배열을 합친 새배열을 생성한다 
            names : this.state.names.concat(this.state.name),
            name : ''
        });
    }
    handleRemove = (index) =>{
        this.setState({
            // names : [
            //     ...this.state.names.slice(0, index),
            //     ...this.state.names.slice(index+1, this.state.names.length)
            // ]
            names : this.state.names.filter( (item, i) => i != index)
        });
    }


    render(){
        const CrudList = this.state.names.map(
            (name, index) => 
                <li key={index} 
                    onDoubleClick={() => this.handleRemove(index)}
                    >{name}
                </li>
        );
        return(
            <div>
                <h1>CRUD Practice</h1>
                <input type="text" onChange={this.handleInput} value={this.state.name} placeholder="내용을 입력해주세요"></input>
                <button onClick={this.handleInsert}>추가</button>
                <h3>List</h3>
                {CrudList}
            </div>
        )
    }

}