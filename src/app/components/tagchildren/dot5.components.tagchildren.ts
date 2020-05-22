import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/classes/tag/dot5.tag.class';

@Component({
  selector: 'tag_children',
  templateUrl: './dot5.components.tagchildren.html',
  styleUrls: ['./dot5.components.tagchildren.css']
})
export class TagChildrenComponent implements OnInit {

  /** List of all the tags to show */
  @Input()
  public elements: Tag[]
  
  @Output()
  public setActiveEmitter: EventEmitter<string> = new EventEmitter()
  
  @Output()
  public removeEmitter: EventEmitter<Tag> = new EventEmitter()

  @Output()
  public editEmitter: EventEmitter<Tag> = new EventEmitter()

  /**Emit setActivate */
  public setActive(tag_: Tag){
    this.setActiveEmitter.emit(tag_.id)
  }
  
  /**Emit remove */
  public remove(tag_: Tag){
    this.removeEmitter.emit(tag_)
  }
  
  /**Emit edit */
  public edit(tag_: Tag){
    this.editEmitter.emit(tag_)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
