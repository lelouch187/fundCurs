import React, { FC } from 'react';

interface MySelectProps {
  defaultValue: string;
  options: { value: string; name: string }[];
  value: string;
  setSelectedSort:(sort: any)=>void
}

const MySelect: FC<MySelectProps> = ({ defaultValue, options, value, setSelectedSort }) => {
  return (
    <select onChange={(e) => {
      setSelectedSort(e.target.value)
      }} value={value}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.length &&
        options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          );
        })}
    </select>
  );
};

export default MySelect;
