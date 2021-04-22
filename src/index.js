import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <>
  <h1>Akhil Varma</h1>
  <nav className="navbar navbar-expand-sm bg-light  navbar-dark fixed-top">  
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link text-primary" href="#section1" style={{fontFamily: 'Pacifico, cursive'}}>About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-primary" href="#section2" style={{fontFamily: 'Pacifico, cursive'}}>Education</a>
    </li>
    <li className="nav-item ">
      <a className="nav-link text-primary" style={{fontFamily: 'Pacifico, cursive'}} href="#section3">Skills</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-primary" style={{fontFamily: 'Pacifico, cursive'}} href="#section4">Interests</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-primary" style={{fontFamily: 'Pacifico, cursive'}} href="#section5">Acheivements</a>
    </li>
<li className="nav-item">
      <a className="nav-link text-primary" style={{fontFamily: 'Pacifico, cursive'}} href="#section6">Contact</a>
    </li>
  </ul>
</nav>

<div id="section1" className="container-fluid bg-primary" style={{paddingTop:'70px',paddingBottom:'200px'}}>
  <div className="crd container">
<div className="card bg-light text-dark">
    <div className="card-body">
    <h1 style={{fontFamily: 'Dela Gothic One ,cursive'}}><div className="text-primary" style={{FontSize:'50px'}} >Akhil</div>Varma </h1>
    <h6>Spl-D 1010,P v colony,Manuguru,507125 <span className="text-primary">Yedarasriakhilvarm123@gmail.com</span>
    </h6>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>I am a simple computer geek, like to go in accordance with nature. I am passionate about Software Development and most of my time is spent in that, I love to solve daily life problems with software technologies. I keep myself updated with opensource tools, development and feel pleasure to work in that field.</p>
    <a href="https://www.youtube.com/" className="fa fa-facebook"></a>
<a href="https://www.youtube.com/" className="fa fa-twitter"></a>
<a href="https://www.youtube.com/" className="fa fa-linkedin"></a>
<a href="https://www.youtube.com/" className="fa fa-instagram"></a>
<a href="https://www.youtube.com/" className="fa fa-github"></a>  
    </div>
  </div>
</div>

</div>

<div id="section2" className="container-fluid bg-light" style={{paddingTop:'70px',paddingBottom:'70px'}}>
  <h1 className="text-primary" style={{fontFamily: 'Dela Gothic One, cursive',paddingBottom:'40px'}}>Education</h1>
  <div className="card bg-primary text-white container crd2">
    <div className="card-body" >
    <h4>MLRITM</h4>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Bachelor of Technology<br/><br/> Information Technology<br/>CGPA :pursuing</p>
    <hr style={{backgroundColor:'white'}} />
    <h4>Sri Chaitanya Junior College</h4>
    <p style={{fontFamily: 'Roboto Condensed,sans-serif', fontSize : '25px'}}>Intermediate<br/><br/> MPC <br/>Percentage:90.9%</p>
    <hr style={{backgroundColor:'white'}} />
    <h4>Dr kkr Gowtham Concept School</h4>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>High School<br/><br/>CBSE(Central Board Of Secondary Education)<br/>Percentage:96%</p>
    
    </div>
  </div>
 </div>
<div id="section3" className="container-fluid bg-primary" style={{paddingTop:'70px',paddingBottom:'70px'}}>
  <h1 className="text-white" style={{fontFamily: 'Dela Gothic One, cursive',paddingBottom:'40px'}}>Skills</h1>
  <div className="card bg-light text-dark container">
    <div className="card-body">
    <h4>Programing Language and Skills</h4>
    <hr className="bg-primary"/>
    <div className="container">
  <h5>
  <span className="badge badge-primary">C</span>
  <span className="badge badge-primary">C++</span>
  <span className="badge badge-primary">Java</span>
  <span className="badge badge-primary">Python</span>
  <span className="badge badge-primary">JavaScript</span>
  <span className="badge badge-primary">SQL</span>
  <span className="badge badge-primary">Html</span>
  <span className="badge badge-primary">CSS</span><br/>
  <span className="badge badge-primary">Bootstrap</span>
  <span className="badge badge-primary">React</span>
  <span className="badge badge-primary">Node js</span>
  <span className="badge badge-primary">Php</span>
  <span className="badge badge-primary">Flutter</span>
  <span className="badge badge-primary">Android Studio and Visual Studio</span><br/>
  <span className="badge badge-primary">Data Structures</span>
  </h5>
</div>

    
    </div>
  </div>
</div>
<div id="section4" className="container-fluid bg-light" style={{paddingTop:'70px',paddingBottom:'70px'}}>
<h1 className="text-primary"style={{fontFamily: 'Dela Gothic One, cursive',paddingBottom:'40px'}} >Interests</h1>
 <div className="card bg-primary text-white container">
    <div className="card-body">
    <h4>Interests<hr style={{backgroundColor:'white'}}/></h4>

    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Developing Softwares to solve daily life problems</p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Reading Books</p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Playing Snooker's</p>
    
   
    </div>
  </div> 
</div>
<div id="section5" className="container-fluid bg-primary" style={{paddingTop:'70px',paddingBottom:'70px'}}>
<h1 className="text-white" style={{fontFamily: 'Dela Gothic One, cursive',paddingBottom:'40px'}}>Awards and Certificates</h1>
  <div className="card bg-light text-primary container">
    <div className="card-body">
    <h4>Acheivements<hr style={{backgroundColor:'white'}}/></h4>

    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Awarded certificate for Problem solving from Hacker Rank.</p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Awarded certificate for flutter  App development </p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Awarded certificate for Digital Marketing from goolge</p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Awarded certificate for Analytics from google </p>
    
   
    </div>
  </div>
</div>
<div id="section6" className="container-fluid bg-light" style={{paddingTop:'70px',paddingBottom:'70px'}}>
  <div className="cont">
  <img src="https://scontent.fmaa11-1.fna.fbcdn.net/v/t1.6435-9/165807246_2940708529587206_8940012106587058460_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=WHsPGiU3swIAX-qUvgQ&_nc_ht=scontent.fmaa11-1.fna&oh=e8a8880d590e7f401edffb0bb85e86b5&oe=6090E96B" alt="Akhil Varma" style={{width:'100%'}} />
  <h1 className="title">Akhil Varma</h1>
  <p className="title">Student and developer</p>
  <p>Mlritm</p>
  <div className="ax" style={{margin: '24px 0'}}>
    <a href="#"><i className="fa fa-twitter"></i></a>  
    <a href="#"><i className="fa fa-linkedin"></i></a>  
    <a href="#"><i className="fa fa-facebook"></i></a> 
  </div>
  <p><button className="bx">Contact</button></p>
</div>
</div>
  </>,
  document.getElementById('root')
);
