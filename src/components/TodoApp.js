import React, { Component } from 'react';
import TodoItem from './TodoItem'

export default class TodoApp extends Component {
  constructor() {
    super()
    this.state = {
      todos:[
        { title: 'Go to work', done: true },
        { title: 'Lean css', done: true },
        { title: 'Learn REACT' }
      ]
    }
  }
  onItemClick(item){
    let {todos}=this.state;
    let isDone=item.done
    //tìm index
    let index=todos.indexOf(item)
    //thay đổi trạng thái của item
    this.setState({
      todos:[...todos.slice(0,index),
      {...item,done:!isDone},
      ...todos.slice(index+1)]
    })
  }
  render() {
    const { todos } = this.state
    return (
    <div className='TodoApp'>
      {todos.length && todos.map((x, index) => 
      <TodoItem item={x} key={index} onClick={this.onItemClick.bind(this,x)}/>)}
      {todos.length == 0 && <img src="nothing.png"/>}
      <button>+</button>
    </div>
    )
  }
}

// Requirements:
// Viết một app todo-list có giao diện như hình https://cdn.glitch.com/780fd861-6c5c-464f-8b1b-c3c0ed64e30a%2FPasted_Image_4_20_20__9_05_PM.png?v=1587384320345
// Không cần phải giống 100%, nhưng càng giống càng tốt và phải có tính thẩm mỹ
// Illustration có thể tải ở đây https://undraw.co/illustrations hoặc các nguồn khác và upload lên Glitch assets
// Cần làm:
// - Màn hình danh sách todo list, nếu trống thì hiển thị một hình nào đó như trong ảnh
// - Khi ấn nút + để tạo todo mới thì hiển thị modal có chứa 1 text input và nút để add
// - Khi ấn vào 1 item thì sẽ toggle trạng thái isDone của nó
// - Nếu isDone là true thì cho vào danh sách Finished, còn không thì ở Upcoming