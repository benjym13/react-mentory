import { useContext, useState } from 'react';
import type { Chip } from '../models/models';
import { FilterContext } from '../context/filterContext';

export default function Chip({ label, onHover }: Chip) {
  const { filters, setFilters } = useContext(FilterContext);

  function handleClick() {
    setFilters((prev: string[]) =>
      filters.includes(label) ? prev : [...prev, label]
    );
    console.log(filters);
  }
  function handleClickDeleteFilter() {
    setFilters((prev: string[]) =>
      prev.filter((item: string) => item !== label)
    );
  }

  return (
    <div
      className="px-2 py-1 text-sm font-semibold rounded bg-primary-cyan-200 text-primary-cyan-500 hover:bg-primary-cyan-500 hover:text-white"
      role="button"
      onClick={handleClick}
      onMouseEnter={onHover}
    >
      <div className="flex gap-2 justify-center">
        <span className="chip__label">{label}</span>
        {onHover && <button onClick={handleClickDeleteFilter}>&#x2715;</button>}
      </div>
    </div>
  );
}
