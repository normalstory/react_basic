import React, { Component } from "react";

//다중 이벤트 처리 
export default class MultiEvent extends Component{
    state={
        username:'',
        message:''
    }

    handleChange = (e) => {
        this.setState({ //사용자가 입력한 내용, state에 기록하기 
            [e.target.name] /* <- point*/ : e.target.value 
        })
    }
    handleInsert = () => {
        alert(this.state.username+'가 "'+this.state.message + ' "라고 말했다.'); //다중으로 사용하기 
        this.setState({ //초기화
            username: '',
            message: ''
        })
    }

    render(){
        return(
            <div>
                <h1>다중 이벤트 처리 연습</h1>
                <input 
                    type="text" 
                    placeholder="이름을 적어주세요" 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleChange}
                ></input>
                <input 
                    type="text" 
                    placeholder="내용을 적어주세요"
                    name="message"  
                    value={this.state.message} 
                    onChange={this.handleChange}
                ></input>
                <button onClick={this.handleInsert}>확인</button>
            </div>
        )
    }
}