import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoApp from './components/TodoApp'
import Book from './components/Book'
import BookList from './components/BookList'
import withFadeInWhenInView from './components/withFadeInWhenInView.js';

const FadingIn = withFadeInWhenInView(() => <h1>I'm fading innnnn...</h1>);

function App() {

  let listFriends = [
    {
      image: "https://xansan.com/wp-content/uploads/2018/10/user-avatar-default-2609.png",
      name: 'ban tot'
    },
    {
      image: "https://previews.123rf.com/images/meysye/meysye1904/meysye190400002/121250278-female-silhoutte-avatar-default-avatar-profile-picture-photo-placeholder.jpg",
      name: "ban xa giao"
    },
    {
      image: 'https://c7.uihere.com/files/348/800/890/computer-icons-avatar-user-login-avatar-thumb.jpg',
      name: "ban than khac gioi"
    },
  ]
  let tableList = [{
    id: 1,
    First: "Mark",
    Last: "Otto",
    Handle: "@mdo",
    is_even: true
  },
  {
    id: 2,
    First: "Jacob",
    Last: "Thornton",
    Handle: "@fat"
  },
  {
    id: 3,
    First: "Mark",
    Last: "Otto",
    Handle: "@mdo",
    is_even: true
  }]
  console.log('app render')
  return (
    <div className="App">
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code>
          </p>
          <a
            className="App-link"
            href="https://coders-x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hãy cuộn xuống dưới ở màn hình kết quả<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
            Yêu anh Thịnh<br />
          </a>
          <FadingIn />
        </header>   
      {/* 
         <BookList /> 
         <TodoApp />
      import Header from './components/Header'
      import LoginForm from './components/LoginForm'
      import Menu from './components/Menu'
      import RecommendedFriends from './components/RecommendedFriends'
      import Table from './components/Table'
      import Notification from './components/Notification'
      import SearchBox from './components/SearchBox'
      import Modal from './components/Modal'
      import Google from './components/Google'

      <Header/>
      <LoginForm/> 
      <RecommendedFriends friends={listFriends} />
      <Table data={tableList}/>
      <Notification notify={true}/>
      <Menu/>
      <SearchBox/>
      <Modal/>
       <Google/>
       <TodoApp/>
      */}



    </div>
  );
}

export default App;
