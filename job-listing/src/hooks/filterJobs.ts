import { useMemo } from 'react';
import { useFilter } from './useFilter';
import { DataRaw } from '../models/models';
import { normalizeJobList } from '../lib/normaliceData';

export function useFilterJobs(data: DataRaw[]) {
  const { filters } = useFilter();

  const filterJobs = useMemo(() => {
    if (filters.length === 0) return normalizeJobList(data);

    return normalizeJobList(data).filter((job) => {
      return filters.every((filter: string) =>
        job.skills.some((skill) => skill.label === filter)
      );
    });
  }, [filters, data]);

  return filterJobs;
}
