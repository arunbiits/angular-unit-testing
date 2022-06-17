export class VoteComponent {
    
    public totalVotes: number = 0;

    upVote() {
        this.totalVotes++;
    }

    downVote() {
        this.totalVotes--;
    }

}