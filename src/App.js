import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h2>LOGIN PAGE</h2>
    <div className='container'>
      <form className='box'>   
     <input  className='username' type="text" placeholder='Username'   >
      </input>
      <br/>
      <input  className='password' type="password" placeholder='Password' >

      </input>
      <br/>
      <button className='button' type='submit'>Sign In
      </button>
      <br/>
      <a href='http://127.0.0.1:5500/src/verify.html' className='forgetbtn' target='_blank' >Forgot Password?</a>
      </form>
      </div>
     </>
  );
}

export default App;
