import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/classes/tag/dot5.tag.class';
import { WebsocketService } from 'src/app/service/websocket.service.ts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddmodalComponent } from '../../components/modal/dot5.addmodal.component'
import { AuthService } from 'src/app/auth/user/auth.service';

@Component({
  selector: 'app-dot5.container.tag.ts',
  templateUrl: './dot5.container.tag.ts.component.html',
  styleUrls: ['./dot5.container.tag.ts.component.css']
})
export class TagContainer implements OnInit {
  
  /**List of all the Tags */
  public elements: Tag[]

   /**List of all the Tags */
   public searchResults: Tag[]
  
  /** All Tags as key value pair for easy access */
  public entities: {id: Tag} = Object.create(null)

  /** ID of the selected Tag */
  public active: string = 'root'

  public search: string =''
  /** Get All children of the selected Tag */
  public get children(): Tag[] { 
    return this.elements ? this.elements.filter(el_ => el_.parent === this.active) : []}
  
  constructor(
    private webSocket: WebsocketService, 
    public dialog: MatDialog, 
    private authService: AuthService, 
    private router: Router
    ){}

  ngOnInit(){
    this.webSocket.getAll()                                     //Get all Tags on init
    
    /**Handle entities and elements on websocket emission */
    this.webSocket.webSocket.subscribe(r_=> {
      console.log(r_)
      if(!r_.message){
        this.elements = r_.map(
          elem_ => {
            this.entities[elem_.id] = elem_
            return new Tag(elem_.id,elem_.tag,elem_.parent)
          }
        )
      }
    })
    
  }

  /** Add Tag */
  public add(tagString_ : string){
    const id = `A${Math.floor(Math.random()*999999)}`             //ID generation needs to be refractor on backend level
    this.webSocket.add(id,this.active.toString(),tagString_)
  }

  /** Set a Tag as active */
  public setActive(id_){
    id_ && (this.active = id_) && this.endSearch()
  }

  /**Navigate back to parent container */
  public back(){
    this.active = this.entities[this.active].parent
  }

  /** Remove tag and all its children */
  public remove(tag_: Tag){
    const children = this.elements.filter(el_ => el_.parent === tag_.id) || [];
    [...children,tag_].map(c_ => {
      this.webSocket.remove(c_.id)
      console.log(`${c_} Removed`)
    })
  }

  /** Change Tag name*/
  public edit(tag_){
    this.webSocket.add(tag_.id,tag_.parent,tag_.tag)
  }

  /** Open add Tag modal */
  public openDialog(): void {
    const dialogRef = this.dialog.open(AddmodalComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result_ => {
      if(result_){
        this.add(result_)
      }
    });
  }

  /**Log out */
  public logOut(){
    this.authService.logout()
    this.router.navigate(['/'])
  }

  /**Search Tags */
  public filter(){
      this.searchResults = this.elements.filter(el_ => el_.tag.toLowerCase().indexOf(this.search.toLowerCase())>-1)
  }

  /** End search mode*/
  public endSearch(){
    this.search = ''
  }
}
