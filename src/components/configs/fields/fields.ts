import { LvlArray, LvlEnum } from './lvl.enum';
import { FormationArray, FormationEnum } from './formation.enum';

export interface SimpleTextField {
  title?: string;
  type: string;
  key?: string;
  placeholder?: string;
}

export interface SelectItemField {
  label: string;
  value: string | FormationEnum | LvlEnum;
}

export interface SelectField extends SimpleTextField {
  options: SelectItemField[];
}

export interface FieldsInterface {
  login: SimpleTextField[];
  inscription: SimpleTextField[] | SelectField[];
}

export const fields: FieldsInterface = {
  login: [
    {
      type: 'text',
      key: 'formation',
    },
    {
      type: 'text',
      key: 'formation',
    },
  ],
  inscription: [
    {
      title: 'Quelle-est votre formation ?',
      type: 'select',
      key: 'formation',
      options: FormationArray,
    },
    {
      title: 'Votre année de promotion',
      type: 'select',
      key: 'promo',
      options: [
        {
          label: 'P2019',
          value: 'p_2019',
        },
        {
          label: 'P2020',
          value: 'p_2020',
        },
        {
          label: 'P2021',
          value: 'p_2021',
        },
      ],
    },
    {
      title: 'Dans quel groupe êtes-vous ?',
      type: 'select',
      key: 'groupe',
      options: [
        {
          label: 'Groupe 1',
          value: 'groupe_1',
        },
        {
          label: 'Groupe 2',
          value: 'groupe_2',
        },
        {
          label: 'Pas de groupe',
          value: 'groupe_null',
        },
      ],
    },
    {
      title: 'Saisissez un court descriptif de votre cursus',
      type: 'area',
      key: 'description',
      options: [
        {
          label: 'Groupe 1',
          value: 'groupe_1',
        },
        {
          label: 'Groupe 2',
          value: 'groupe_2',
        },
        {
          label: 'Pas de groupe',
          value: 'groupe_null',
        },
      ],
    },
    {
      title: 'Lien vers votre profil Linkedin',
      type: 'url',
      placeholder: 'Ex: linkedin.com/in/jean-durand/',
      key: 'linkedIn_url',
      options: [
        {
          label: 'Groupe 1',
          value: 'groupe_1',
        },
        {
          label: 'Groupe 2',
          value: 'groupe_2',
        },
        {
          label: 'Pas de groupe',
          value: 'groupe_null',
        },
      ],
    },
    {
      title: 'Quel est votre niveau ? ',
      type: 'select',
      key: 'lvl_dev_front_end',
      placeholder: 'Programmation côté client',
      options: LvlArray,
    },
    {
      title: 'Quel est votre niveau ? ',
      type: 'select',
      key: 'lvl_design_ui',
      placeholder: 'Programmation côté client',
      options: LvlArray,
    },
    {
      title: 'Quel est votre niveau ? ',
      type: 'select',
      key: 'lvl_design_ux',
      placeholder: 'Programmation côté client',
      options: LvlArray,
    },
    {
      title: 'Quel est votre niveau ? ',
      type: 'select',
      key: 'lvl_project_management',
      placeholder: 'Programmation côté client',
      options: LvlArray,
    },
  ],
};
