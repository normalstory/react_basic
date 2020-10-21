import React,{ Component } from "react";
import "../practice/NoneRef.scss";

//되도록 DOM또는 ref 없이 처리하기위한 연습 예제 
export default class NoneRef extends Component{
    state={
        write:'',
        answer:'0000',
        clicked:false,
        result:false
    }
    handelInput=(e)=>{
        this.setState({
            write:e.target.value,
            clicked:true
        })
    }
    handleInsert=()=>{
        this.setState({
            result:this.state.answer === this.state.write
        })
    }
    render(){
        return(
            <div>
                <h1>ref 사용해보기</h1>
                <input type="text" 
                    value={this.state.write} 
                    onChange={this.handelInput}
                    placeholder='퀴즈의 정답은 무엇일까요?'
                    ></input>  {/* <- point */}                    
                <button onClick={this.handleInsert}
                    className={this.state.clicked ? (this.state.result ? 'success' : 'failure') : ''}>
                    {this.state.clicked ? (this.state.result ? '정답' : '오답') : '확인하기'}
                    </button>
            </div>
        )
    }
}