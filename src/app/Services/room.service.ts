import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient){}

  GetRoomData(roomName : string){

    let url = "http://192.168.1.71:5001/api/WebpageGetData/GetLatestRoomData?roomName=" + roomName;

    return this.http.get<RoomReading>(url);

  }
}

export class RoomReading {
  constructor( 
 public Rd_RoomName: string,
  public Rd_Cts: Date,
  public LightReading: LightReading,
  public HeadTemperatureReading: HeadTemperatureReading,
  public FeetTemperatureReading: FeetTemperatureReading,
  public HumidityReading: HumidityReading,
  public CurtainReading: CurtainReading,
  public SoundReading: SoundReading
  ){}
}

export class LightReading {
  constructor( 
  public Ls_Id: number,
  public Ls_Value: string
  ){}
}

export class HeadTemperatureReading {
  constructor( 
  public Ts_Id: number,
  public Ts_Value: number
  ){}
}

export class FeetTemperatureReading {
  constructor( 
  public Ts_Id: number,
  public Ts_Value: number
  ){}
}

export class HumidityReading {
  constructor( 
  public Hum_Id: number,
  public Hum_Value: number
  ){}
}

export class CurtainReading {
  constructor( 
  public Cur_Id: number,
  public Cur_Value: string
  ){}
}

export class SoundReading {
  constructor( 
  public Sr_Id: number,
  public Sr_Value: string
  ){}
}



