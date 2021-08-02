import { IJudgement } from './IJudgement';

export interface ICandidate {
    Fullname: string;
    ImageUrl: string;
    CVUrl: string;
    Judgements: IJudgement[];
    PoliticalGroupCode: string;
    PoliticalGroupImageUrl: string;
}
