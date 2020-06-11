import React, { Component } from 'react';
import TodoItem from './TodoItem'
import Modal from './Modal'
import './TodoApp.css'

export default class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      isShow: false,
      todos: []
    }
  }
  showModal() {
    this.setState({ isShow: true })
  }
  closeModal() {
    this.setState({ isShow: false })
  }
  addItem(e) {
    let text = e.target.previousSibling.value
    text = text.trim() //Bỏ dấu cách ở đầu cuối
    if (!text) { return }
    this.setState({
      isShow: false,
      todos: [...this.state.todos, { title: text, done: false }]
    })
    e.target.previousSibling.value = '';
  }
  removeItem(item){
    let { todos } = this.state;
    //tìm index
    let index = todos.indexOf(item)
    //thay đổi trạng thái của item
    this.setState({
      todos: [...todos.slice(0, index),
      ...todos.slice(index + 1)]
    })
  }
  onItemClick(item) {
    let { todos } = this.state;
    let isDone = item.done
    //tìm index
    let index = todos.indexOf(item)
    //thay đổi trạng thái của item
    this.setState({
      todos: [...todos.slice(0, index),
      { ...item, done: !isDone },
      ...todos.slice(index + 1)]
    })
  }
  render() {
    const { todos, isShow } = this.state
    let upComing = todos.filter(x => x.done == false)
    let finished = todos.filter(x => x.done == true)
    return (
      <div className='TodoApp'>
        <div className='Top'>
          <div className="top__left">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <i className="fas fa-wifi"></i>
          </div>
          <div className="time">
            <span>9:41 AM</span>
          </div>
          <div className="top__right">
            <span>100% </span>
            <i className="fas fa-battery-full"></i>
          </div>
        </div>
        <div className='container'>
          <div className='header'>
            <i className="fas fa-bars navbarIcon"></i>
            <span className='big-title'>DAILIST</span>
          </div>
          {upComing.length > 0 &&
            <div>
              <p className='status'>Upcoming</p>
              {upComing.map((x, index) =>
                <TodoItem item={x} key={index} onClick={this.onItemClick.bind(this, x)} remove={this.removeItem.bind(this,x)}/>)}
            </div>
          }
          {finished.length > 0 &&
            <div>
              <p className='status'>Finished</p>
              {finished.map((x, index) =>
                <TodoItem item={x} key={index} onClick={this.onItemClick.bind(this, x)} remove={this.removeItem.bind(this,x)} />)}
            </div>
          }
          {todos.length == 0 &&
            <div className="nolist">
              <img src="nothing.png" />
              <div className='shadow'></div>
              <div className="mess">
                <p className="mess1">Seems likes</p>
                <p className="mess2">You have no list</p>
              </div>
            </div>}
          <button className="show-modal" onClick={this.showModal.bind(this)}><i className="fas fa-plus fa-fw"></i></button>
         {/* Modal nếu chỉ ẩn hiện bằng css thì sẽ k unmount được vì nó vẫn ở trong DOM?
          dùng js thì sẽ mount/unmount đc 
          componentDidMount chỉ được gọi khi nó từ trạng thái "không ở trong DOM" -> "ở trong DOM"*/}
         { isShow==true && <Modal show={isShow} 
          close={this.closeModal.bind(this)} 
          add={this.addItem.bind(this)} 
          />}
          
        </div>
      </div>

    )
  }
}

// Requirements:
// Viết một app todo-list có giao diện như hình
//https://cdn.glitch.com/780fd861-6c5c-464f-8b1b-c3c0ed64e30a%2FPasted_Image_4_20_20__9_05_PM.png?v=1587384320345
// Không cần phải giống 100%, nhưng càng giống càng tốt và phải có tính thẩm mỹ
// Illustration có thể tải ở đây https://undraw.co/illustrations hoặc các nguồn khác và upload lên Glitch assets
// Cần làm:
// - Màn hình danh sách todo list, nếu trống thì hiển thị một hình nào đó như trong ảnh
// - Khi ấn nút + để tạo todo mới thì hiển thị modal có chứa 1 text input và nút để add
// - Khi ấn vào 1 item thì sẽ toggle trạng thái isDone của nó
// - Nếu isDone là true thì cho vào danh sách Finished, còn không thì ở Upcoming