import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './service/websocket.service.ts.service';
import { Tag } from './classes/tag/dot5.tag.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'dot5tag';
 
}
