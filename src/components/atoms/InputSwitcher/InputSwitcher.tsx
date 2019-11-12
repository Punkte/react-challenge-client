import React from 'react';
import { SelectField, SimpleTextField } from 'configs/fields/fields';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';

interface Props {
  field: SelectField | SimpleTextField;
}

export const InputSwitcher: React.FC<Props> = ({ field }) => {
  const renderInput = (fieldType: string) => {
    switch (fieldType) {
      case 'select':
        return <Select />;
      default:
        return <Input {...field} />;
    }
  };
  return <div>{renderInput(field.type)}</div>;
};
