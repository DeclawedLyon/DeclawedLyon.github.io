import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <a href="#">Resume</a>
      </nav>
      <div id="about-me">
        <img src='https://media-exp1.licdn.com/dms/image/C5603AQGBQ9umKsqvrw/profile-displayphoto-shrink_800_800/0/1634181442830?e=1652313600&v=beta&t=6JRYUmH2ZypD9du4ubhjhN9CRsiwAvR9cnuNQmPsfOQ' id='profile-picture' alt='profile picture' width={300} height={300}></img>
      </div>
      <footer>
        <a href='#'>github</a>
        <a href='#'>linkedIn</a>
        <a href='#'>linkedIn</a>
      </footer>
    </div>
  );
}

export default App;
