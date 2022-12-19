import './App.css';

import Welcome from './components/Welcome';


let users = [{id:1, name:"Vahid", age:"20", src:"https://media.cnn.com/api/v1/images/stellar/prod/221218184732-messi-wc-trophy.jpg?c=16x9&q=h_270,w_480,c_fill"}, {id:2, name:"Cavidan", age:"19", src:"https://c.ndtvimg.com/2022-12/edffec18_lionel-messi_625x300_18_December_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675"}, {id:3, name:"Roman", age:"20", src:"https://i.guim.co.uk/img/media/fdc6b8c8fca6dbd090f7cd64db60d674a968d5ee/0_70_3018_1811/master/3018.jpg?width=465&quality=85&dpr=1&s=none"}];


function App() {
  return (
    <div>
     {users.map((user)=>{
      return <Welcome name={user.name} age ={user.age} src={user.src}/>
     })}
    </div>
    
  );
}

export default App;
