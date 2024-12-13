import { useMemo } from 'react';
import { useFilter } from '../hooks/useFilter';
import Chip from './Chip';

export interface IAppProps {}

export default function FilterBar() {
  const { filters } = useFilter();

  function handleHover(filter: string): void {
    console.log(filter);
  }
  const memoizedFilters = useMemo(
    () =>
      filters.map((filter) => (
        <li key={filter}>
          <Chip label={filter} onHover={() => handleHover(filter)} />
        </li>
      )),
    [filters]
  );
  return (
    <div className="filter-bar absolute left-0 top-40 w-full ">
      <div className="filter-bar container  py-6 px-8 bg-white rounded">
        <div className="filter-bar__container">
          <ul className="flex gap-x-4">{memoizedFilters}</ul>
        </div>
      </div>
    </div>
  );
}
