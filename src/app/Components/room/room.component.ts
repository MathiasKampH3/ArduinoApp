import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Room{
  constructor(

  public roomName: string,
  public temp: number,
  public creationDate: Date
  ){}
}

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: Room[] = [];
  SpecificTemperatureUrl = "http://192.168.1.71:5001/Webpage/GetTemp?roomName=B16";
  AllTemperaturesUrl = "http://192.168.1.71:5001/Webpage/getAllTemp";


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(){
    this.httpClient.get<any>(this.AllTemperaturesUrl).subscribe(
      Response => {
        console.log(Response);
        this.rooms = Response;
      }
    )
  }

}
