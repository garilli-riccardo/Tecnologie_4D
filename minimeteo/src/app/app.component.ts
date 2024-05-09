import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minimeteo';
  nome: any;
  temp: any;
  lat: any;
  lon: any;
  clouds: any;
  humidity: any;
  feelslike: any;
  sea_level: any;
  summary: any;
  wind_speed: any;
  wind_direction: any;
  results: any;
  apikey = 'e43f6a4b9e8f231456ba5058548527ac'; 
  forecast: any[] = [];


  constructor() {}

  ngOnInit() {
    this.loadMeteoGeolocalizzato();
  }
  
  loadMeteoGeolocalizzato() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.getMeteoDalleCoordinate(lat, lon);
      }, (error) => {
        console.error('Geolocation error:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  
  getMeteoDalleCoordinate(lat: number, lon: number) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apikey}&units=metric&lang=it`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.temp = data['main']['temp'];
        this.nome = data['name'];
        this.summary = data['weather'][0]['description'];
        this.clouds = data['clouds']['all'];
        this.humidity = data['main']['humidity'];
        this.wind_speed = data['wind']['speed'];
        this.wind_direction = this.convertiGradiNellaDirezione(data['wind']['deg']);
        this.results = data;
        this.feelslike = data['main']['feels_like'];
        this.getMeteoForecast(this.lat, this.lon);
        
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }


  getMeteo(city: any) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+this.apikey+'&units=metric&lang=it')
    .then(response => response.json())
    .then(data => {
      this.lat = data.coord.lat;
      this.lon = data.coord.lon;
      this.temp = data['main']['temp'];
      this.nome = data['name'];
      this.summary = data['weather'][0]['description'];
      this.clouds = data['clouds']['all'];
      this.humidity =data['main']['humidity']
      this.wind_speed = data['wind']['speed'];
      this.results = data;
      this.wind_direction = this.convertiGradiNellaDirezione(data['wind']['deg'])
      this.feelslike = data['main']['feels_like'];
      this.getMeteoForecast(this.lat, this.lon);

    })}

    convertiGradiNellaDirezione(deg: number): string {
      const directions = ['Nord', 'Nord-Est', 'Est', 'Sud-Est', 'Sud', 'Sud-Ovest', 'Ovest', 'Nord-Ovest'];
      const index = Math.round((deg % 360) / 45);
      return directions[index];
    }
    getMeteoForecast(lat: number, lon: number) {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apikey}&units=metric&lang=it`)
        .then(response => response.json())
        .then(data => {
          this.forecast = data.list.filter((_: any, index: number) => index % 8 === 0).slice(0, 4);
          this.lat = data.coord.lat;
          this.lon = data.coord.lon;
          this.temp = data['main']['temp'];
          this.summary = data['weather'][0]['description'];
          this.wind_speed = data['wind']['speed'];
          this.results = data;
          this.wind_direction = this.convertiGradiNellaDirezione(data['wind']['deg'])
          this.feelslike = data['main']['feels_like'];
          
        })

    }
  }
  

  