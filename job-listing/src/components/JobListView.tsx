import dataRaw from './../data/data.json';
import FilterBar from './FilterBar';
import JobList from './JobList';

import { useFilterJobs } from '../hooks/filterJobs';
import { useFilter } from '../hooks/useFilter';

export default function JobListView() {
  const { filters } = useFilter();
  const jobs = useFilterJobs(dataRaw);
  return (
    <div className="page__container relative">
      {filters.length > 0 && <FilterBar />}
      <div className="job-list__page h-48 bg-head bg-no-repeat bg-cover bg-center bg-primary-cyan-500"></div>
      <div className=" bg-primary-cyan-200 px-14 py-24">
        <JobList jobs={jobs} />
      </div>
    </div>
  );
}
