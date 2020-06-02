import React, { Component } from 'react'
import classNames from 'classnames'
import './SearchBox.css'
export default class SearchBox extends Component {
    constructor(){
        super()
        this.state={
            isFocused :false,
            than10:false,
            notsdt:false
        }
        this.onFocus=()=>{
            this.setState({isFocused:true})
        }
        this.onBlur=()=>{
            this.setState({isFocused:false})
        }
        this.more10=(event)=>{
            let inputVal=event.target.value
            if (inputVal.length>10){
                this.setState({than10:true})
            }
            else{
                this.setState({than10:false})

            }
            //console.log(event.key)
            if (event.key=='Enter'){
                let isNum=true
                for(let i=3;i<inputVal.length;i++){
                   // let check=
                 //   console.log(parseInt(inputVal[i]))
                    if ((inputVal[i]<'0')||(inputVal[i]>'9')){
                        isNum=false;
                        console.log(parseInt(inputVal[i]),isNum)
                        break;
                    }
                }
                console.log(isNum)
                if (inputVal.length !==10 || inputVal.slice(0,3)!=='090' || isNum == false){
                this.setState({notsdt:true})
                }
                
            }
            else this.setState({notsdt:false})
        }
    }
    render() {
        return (
            <div>
                <div className="form-input">
                    <input type="text" name="" id="search" className={classNames({red:this.state.than10 || this.state.notsdt})} onKeyUp={this.more10} onFocus={this.onFocus} onBlur={this.onBlur} placeholder='Type something to search ...'/>
                    <label for="search" className={classNames("search",{hide:this.state.isFocused})}><i class="fas fa-search fa-fw"></i></label>
                </div>
            </div>
        )
    }
}
