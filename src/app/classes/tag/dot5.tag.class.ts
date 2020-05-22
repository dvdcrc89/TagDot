export class Tag {

    private _id: string
    
    public _tag: string

    private _parent: string
 
    public get id():        string { return this._id }
    public get tag():       string { return this._tag }
    public get parent():    string { return this._parent }

    public set parent(value: string)    { this._parent = value }
    public set tag(value: string)       { this._tag = value}

    constructor(id_: string, tag_: string, parent_: string){
        this._id     = id_
        this._tag    = tag_
        this._parent = parent_
    }


}