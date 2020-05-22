import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from 'src/app/classes/tag/dot5.tag.class';

@Component({
  selector: 'tag',
  templateUrl: './dot5.components.tag.ts.component.html',
  styleUrls: ['./dot5.components.tag.ts.component.css']
})
export class TagComponent implements OnInit {
  @Input()
  public tag: Tag

  @Input()
  public disableEdit:boolean = false
  
  @Output()
  public removeEmitter: EventEmitter<Tag> = new EventEmitter()

  @Output()
  public setActiveEmitter: EventEmitter<Tag> = new EventEmitter()

  @Output()
  public editEmitter: EventEmitter<Tag> = new EventEmitter()

  public editMode: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public remove(){
    this.removeEmitter.emit(this.tag)
  }

  public setActive(){
    this.setActiveEmitter.emit(this.tag)
  }

  public edit(){
    this.editEmitter.emit(this.tag)
  }

  public toggleEdit(){
    this.editMode = !this.editMode
  }
}
