export interface ISkill {
  _id: string;
  name: string;
  type_id?: string;
}

export interface ISkillUser {
  skill: ISkill;
  rate: number;
}

