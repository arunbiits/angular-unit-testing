import { VoteComponent } from "./vote.component";

let component: VoteComponent;

beforeEach(() => {
    component = new VoteComponent();
});

describe('VoteComponent', () => {
    it('should raise voteChanged event when upvotes', () => {
        let totalVotes = null;
        component.valueChanged.subscribe(tv => totalVotes = tv);

        component.upVote();

        expect(totalVotes).not.toBeNull();
    });
});