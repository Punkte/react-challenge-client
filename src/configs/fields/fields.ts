import { LvlArray, LvlEnum } from './lvl.enum';
import { FormationArray, FormationEnum } from './formation.enum';

export interface SimpleTextField {
  title?: string;
  type: string;
  key?: string;
  placeholder?: string;
  required?: boolean;
}

export interface SelectItemField {
  label: string;
  value: string | FormationEnum | LvlEnum;
}

export interface SelectField extends SimpleTextField {
  options: SelectItemField[];
}

export interface FieldsInterface {
  login: {
    fields: any[];
  };
  inscription: {
    fields: any[];
  };
  configuration: {
    title: string;
    fields: SelectField[] | SimpleTextField[];
  };
}

export const fields: FieldsInterface = {
  login: {
    fields: [
      {
        type: 'email',
        key: 'email',
        placeholder: 'E-mail',
        required: true,
      },
      {
        type: 'text',
        key: 'password',
        placeholder: 'Mot de passe',
        required: true,
      },
    ],
  },
  inscription: {
    fields: [
      {
        type: 'select',
        key: 'user_type',
        options: [
          {
            label: 'Étudiant',
            value: 'student',
          },
          {
            label: 'Intervenant',
            value: 'intervenant',
          },
        ],
        required: true,
      },
      {
        type: 'text',
        key: 'name',
        placeholder: 'Nom',
        required: true,
      },
      {
        type: 'text',
        key: 'firstname',
        placeholder: 'Prénom',
        required: true,
      },
      {
        type: 'email',
        key: 'email',
        placeholder: 'E-mail',
        required: true,
      },
      {
        type: 'password',
        key: 'password',
        placeholder: 'Mot de passe',
        required: true,
      },
    ],
  },
  configuration: {
    title: 'Inscription',
    fields: [
      {
        title: 'Quelle-est votre formation ?',
        type: 'select',
        key: 'formation',
        options: FormationArray,
        required: true,
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
        required: true,
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
        required: true,
      },
      {
        title: 'Saisissez un court descriptif de votre cursus',
        type: 'textarea',
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
        required: true,
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
        required: true,
      },
      {
        title: 'Quel est votre niveau ? ',
        type: 'select',
        key: 'lvl_dev_front_end',
        placeholder: 'Programmation côté client',
        options: LvlArray,
        required: true,
      },
      {
        title: 'Quel est votre niveau ? ',
        type: 'select',
        key: 'lvl_design_ui',
        placeholder: 'Programmation côté client',
        options: LvlArray,
        required: true,
      },
      {
        title: 'Quel est votre niveau ? ',
        type: 'select',
        key: 'lvl_design_ux',
        placeholder: 'Programmation côté client',
        options: LvlArray,
        required: true,
      },
      {
        title: 'Quel est votre niveau ? ',
        type: 'select',
        key: 'lvl_project_management',
        placeholder: 'Programmation côté client',
        options: LvlArray,
        required: true,
      },
    ],
  },
};
