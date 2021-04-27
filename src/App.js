import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";

const App = () => {
  return ( 
    <BrowserRouter>
      <div>
        <header>
          <h1>Personal blog</h1>
          <nav>
            <Link to="/">Start</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link> 

          </nav>
        </header>

        <main>
          <Route path="/" exact={true}>
            <div>
              <h2>Landing page</h2>
              <p>This is the main page of the Blog model</p>
            </div>
          </Route>
          <Route path="/blog">
            <div>
              <h2>Blog</h2>
              <ul>
                  <li>Article #1</li>
                  <li>Article #2</li>
                  <li>Article #3</li>
              </ul>
            </div>
          </Route>
            
          <Route path="/about">
            <div>
              <h2>About</h2>
              <p>This is a Placeholder for content</p>
            </div>
          </Route>
        </main>
      </div>
    </BrowserRouter>
  );
}
 
export default App;
