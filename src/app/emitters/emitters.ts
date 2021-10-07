import { EventEmitter } from "@angular/core";

export class Emitters{

    static authEmitters = new EventEmitter<boolean>() ;
    static user = new EventEmitter<any>()

}