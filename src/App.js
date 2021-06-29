import React, { useState } from 'react';
import './App.css'; 


 function App() {

  let [글제목리스트, 글제목리스트변경] = useState(['첫번째 글', '두번째 글', '세번째 글1132']);
  let [날짜, 날짜변경] = useState(['1월 1일 작성', '1월 2일 작성', '1월 3일 작성']);
  let [좋아요, 좋아요변경] = useState(0);
  let [글제목, 글제목변경] = useState('첫번째 글');   

  function test() {
    return 좋아요변경(좋아요 + 1);
  }

  function titleChanger() {
    console.log('Title Cound : ' + 글제목리스트.length);
    console.log('Current Title : ' + 글제목);

    var index = 글제목리스트.indexOf(글제목);
    console.log('Current Index : ' + index);

    if(index < 글제목리스트.length - 1)
      return 글제목변경(글제목리스트[index+1]);
      
    return 글제목변경(글제목리스트[0]);
  } 

  return (
    <div className="App">
      <div className="black-nav">
        <div >나의 블로그</div>
      </div>
      <div className="list">
        {/* <h3> { 글제목[0]  } <span onClick={ () => 좋아요변경(좋아요 + 1)} >좋아요</span> {좋아요} </h3> */}
        <span onClick={titleChanger}> 글제목바꾸기 </span><h3> { 글제목  } 
        <span onClick={ test } > ♥ </span> {좋아요} </h3>
        <p> { 날짜[0]  }</p>
        <hr />
      </div>  
      <div className="list">
        <h3> { 글제목리스트[1]  } </h3>
        <p> { 날짜[1] } </p>
        <hr />
      </div>  
      <div className="list">
        <h3> { 글제목리스트[2]  } </h3>
        <p> { 날짜[2] } </p>
        <hr />
      </div>      
    </div>
  );
}

export default App;




// 리액트 강좌
//https://www.youtube.com/watch?v=Qb8Oiy8i9IY
