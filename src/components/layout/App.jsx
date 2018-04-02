import React from 'react';
import Map from '../custom/map/Map';
import moment from 'moment';
import 'moment/locale/ko';
import 'font-awesome/css/font-awesome.css'
import './app.css';

const App = (props) => {
  return (
    <div>
      <header className="top-header">
        <div>
          <h1>Title</h1>
            <form>
              <input 
                type="text"
                placeholder="Search"
                className="input-search"
                onSearchChange
              />
              <input 
                type="submit"
                value="Submit"
                className="input-submit"
                //onSearchSubmit={}
              />
            </form>
            <div className="top-timeline">
              <span>..</span> 
              <p>{moment().format('YYYY년 MMMM D일 dddd')}</p>  
              <p>{moment().format('LT')}</p>
            </div>
        </div>
      </header>

      <div className="map-wrap">
        <Map
          defaultZoom={12}
          defaultCenter={{ lat: 37.566535, lng: 126.97796919999996 }}
          containerElement={<div style={{height: `100%` }} />}
          mapElement={<div style={{height:`800px`}} />}  
        />
      </div>

      <footer>
        <div class="footer-wrap">
          <h3>footer</h3>
        </div>
      </footer>

    </div>

  );
}

export default App
