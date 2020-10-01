export interface stateInterface {
  team: number[];
  pokemon: {
    id: number;
    name: string;
    inTeam: boolean;
  }[];
  next: string;
}

export interface actionInterface {
  type: string;
  payload: any;
}
