import React, { useState } from 'react';
import { SelectComponent } from './SelectComponent';
import { SelectField, SelectItemField } from 'configs/fields/fields';

interface Props {
  field: SelectField;
  onChange: (value: SelectItemField) => void;
}

export const Select: React.FC<Props> = ({ field, onChange }) => {
  const [isSelectOpen, toggleSelectState] = useState(false);
  const onToggleState = () => {
    toggleSelectState(!isSelectOpen);
  };

  return (
    <SelectComponent
      isSelectOpen={isSelectOpen}
      field={field}
      onToggleState={onToggleState}
      onChange={onChange}
    />
  );
};
