import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";


import ReactAnimatedWeather from "react-animated-weather";
export default function App() {
  return (
    <div className="App">
     <div className="container">
      <div className="cityss">
        <ul className="hr">
   <li><a href="#">Lisobon</a></li>
      <li><a href="#">Paris</a></li>
   <li><a href="#">Kiev</a></li>
   <li><a href="#">Berlin</a></li>
  </ul>
      </div>
      <Weather /> 
            <div className="row">
    <ul>
        <li className="citys"> Lisbone  < ReactAnimatedWeather
          icon="SLEET"
          color="grey"
          size={40}
          animate={true}
        />  </li>

        <li>  <strong className="temperature"> 14 °С </strong></li>
        <li> Humidity: 54% </li>
        <li> Wind: 5 m/h </li>
    </ul>
  <div className="weatherstar">
 <div class="row">
      <div class="col">
        <div class="forecast">
          <div class="weathe-forecast">
            <strong>Sun</strong>
          </div>
          <div className="ww">< ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="grey"
          size={40}
          animate={true}
        /></div>
        <div className="tt">
          15 °С
        </div>
        </div>  
      </div>
      <div class="col">
        <div class="forecast">
          <div class="weathe-forecast">
            <strong>Mon</strong>
          </div>
          <div className="ww">< ReactAnimatedWeather
          icon="FOG"
          color="grey"
          size={40}
          animate={true}
        /></div>
        <div className="tt">
          7 °С
        </div>
        </div>  
      </div>
      <div class="col">
        <div class="forecast">
          <div class="weathe-forecast">
            <strong>Thu</strong>
          </div>
          <div className="ww">< ReactAnimatedWeather
          icon="RAIN"
          color="grey"
          size={40}
          animate={true}
        /></div>
        <div className="tt">
          10 °С
        </div>
        </div>  
      </div>
      </div>
<div>
</div>


</div> 




<div class="app-footer">
     <small>
    <a href="https://github.com/juliasstruk/weatherlive">Open-source code </a>  by Yuliia Struk
</small>
</div>
</div>
</div>
</div>

  );
}