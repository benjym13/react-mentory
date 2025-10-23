import { createContext, ReactNode, useState } from 'react';

/**
 * Props del proveedor del contexto.
 * Este tipo describe las propiedades que debe recibir el componente FilterContextProvider.
 *
 * @typedef {Object} FilterContextProviderProps
 * @property {ReactNode} children - Los componentes hijos que se renderizan dentro del proveedor del contexto.
 */
export type FilterContextProviderProps = {
  children: ReactNode;
};

/**
 * Tipo que describe el contexto de filtros.
 * Incluye el estado de los filtros y una función para actualizarlos.
 *
 * @typedef {Object} FilterContextType
 * @property {string[]} filters - Array de strings que representan los filtros aplicados.
 * @property {(newFilter: string[]) => void} setFilters - Función que permite actualizar los filtros en el estado.
 */
export type FilterContextType = {
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

/**
 * Contexto que mantiene el estado global de los filtros y su función de actualización.
 * El contexto permite a los componentes consumir y modificar el estado de los filtros.
 *
 * @type {React.Context<FilterContextType>}
 * @default { filters: [], setFilters: () => {} }
 */
export const FilterContext = createContext<FilterContextType>({
  filters: [],
  setFilters: () => {},
});

/**
 * Proveedor del contexto de filtros.
 * Proporciona el contexto de filtros y su función de actualización a los componentes hijos.
 *
 * @param {FilterContextProviderProps} props - Propiedades del componente, que incluyen los children.
 * @returns {JSX.Element} Componente que envuelve los elementos hijos con el contexto de filtros.
 */
export function FilterContextProvider({
  children,
}: FilterContextProviderProps) {
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
