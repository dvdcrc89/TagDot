import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class WebsocketService {
  
  /** Initialize WebSocet connection */
  private _webSocket: WebSocketSubject<any> = webSocket(environment.Websocket)

  /**Get websocket as observable */
  public get webSocket(): Observable<any> { return this._webSocket.asObservable()}

  constructor() {}


  /** Add/Edit Tag */
  public add(id_: string, parent_: string, tag_: string){
      this._webSocket.next({"action": "add","id":id_,"parent": parent_, "tag": tag_})
  }

  /**Remove Tag */
  public remove(id_){
      this._webSocket.next({"action": "remove","id":id_})
  }

  /**Get All Tags */
  public getAll(){
    this._webSocket.next({"action": "getAll"})
  }

}
