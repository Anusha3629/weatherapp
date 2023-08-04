import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  city: string;
  weatherData: any;

  constructor( private weatherservice:WeatherService) {
    this.city='';
   }
 
  ngOnInit(): void {
  }

  getWeather() {
    this.weatherservice.getWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
