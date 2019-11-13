import React from 'react';
import {
  SelectField,
  SimpleTextField,
  SelectItemField,
} from 'configs/fields/fields';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';

interface Props {
  field: SelectField;
  onChange: (value: SelectItemField) => void;
}

export const InputSwitcher: React.FC<Props> = ({ field, onChange }) => {
  const renderInput = (fieldType: string) => {
    switch (fieldType) {
      case 'select':
        return <Select field={field} onChange={onChange} />;
      default:
        return <Input {...field} onChange={onChange} />;
    }
  };
  return <div>{renderInput(field.type)}</div>;
};
