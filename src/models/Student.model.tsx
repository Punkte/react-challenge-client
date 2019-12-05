import { IPromo } from './Promo';
import { ISkill } from './Skill';

export interface IStudent {
  first_name: string;
  last_name: string;
  gender: string;
  desc: string;
  email: string;
  skills?: ISkill[];
  experience?: IPromo[];
  pic?: string;
  status?: string;
  group_id?: string;
}
