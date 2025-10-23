import { useContext } from 'react';
import { FilterContext } from '../context/filterContext';

export function useFilter() {
  return useContext(FilterContext);
}
