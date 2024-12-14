
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <a href="#about">ABOUT ME</a>
        <a href="#work">MY WORK</a>
        <a href="#contact">CONTACT</a>
      </header>
      <div className="main-content">
        <h1>I SAW THE SIGN</h1>
        <p>and it opened up my eyes. One of my favorite things to do is to capture the american nostalgia of signage. 
        They tell us where we are going or where we have been. They express a mood or saying can even just be a shape. 
        But it is the vintage, neon, and big light bulbed signs that say so much more. 
        They are not just your average square shapes with letters on it. Some actual thought and planning went into the making of the sign. 
        Oh and the lost are of advertising with neon signs that display motion is always a fun find! Such a lost art in my opinion. 
        LED just hurts my eyes…does not it?</p>
        <img
          src="public/neon-sign.jpg"
          alt="Main sign"
          className="main-image"
        />
      </div>

      <div className="gallery">
        <div>
          <img src="public/neon-sign2.jpg" alt="Neon on brick" />
          <p>Neon on brick</p>
        </div>
        <div>
          <img src="public/2nd-image.jpg" alt="Classic enter sign" />
          <p>Classic enter sign</p>
        </div>
        <div>
          <img src="public/3rd-image.jpg" alt="Message in garage" />
          <p>Message in garage</p>
        </div>
        <div>
          <img src="public/4th-image.jpg" alt="& your point" />
          <p>& your point</p>
        </div>
        <div>
          <img src="public/ways-image.jpg" width="200" height="200" alt="Which way?" />
          <p>Which way?</p>
        </div>
        <div>
          <img
            src="public/vintage.jpg"
            alt="Vintage motel sign"
          />
          <p>Vintage big bulbed motel sign</p>
        </div>
      </div>
    </div>
  );
}

export default App;
