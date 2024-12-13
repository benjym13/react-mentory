import type { JobList } from '../models/models';
import JobCard from './JobCard';

/**
 * Description placeholder
 *
 * @export
 * @param {JobList} param0
 * @param {JobList} param0.jobs
 * @returns {*}
 */
// export default function JobList(props:{jobs: Job[]}) {
//   const {jobs} = props;
export default function JobList({ jobs }: JobList): JSX.Element {
  return (
    <div>
      <div className="list container flex flex-col gap-y-6">
        {jobs.map((job) => (
          <JobCard {...job} key={job.id} />
        ))}
      </div>
    </div>
  );
}
