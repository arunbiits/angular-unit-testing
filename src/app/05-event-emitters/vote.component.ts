import { EventEmitter } from "@angular/core";

export class VoteComponent {
    
    totalVote = 0;
    valueChanged = new EventEmitter();

    upVote() {
        this.totalVote++;
        this.valueChanged.emit(this.totalVote);
    }

}