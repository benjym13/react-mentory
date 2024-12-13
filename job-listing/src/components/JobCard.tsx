import { Job } from '../models/models';
import Tag from './Tag';
import ChipList from './ChipList';

export default function JobCard({
  company,
  location,
  logo,
  position,
  isNew,
  isFeatured,
  skills,
  contract,
  date,
}: Job) {
  const featuredCard =
    date === '1d ago' ? 'border-l-4 border-solid border-primary-cyan-500' : '';

  return (
    <div
      className={`job-card py-6 px-8 bg-white shadow-primary-cyan-500 drop-shadow-xl rounded ${featuredCard}`}
    >
      <div className="job-card__container flex items-center gap-x-5">
        <div className="job-card__img">
          <img src={`./assets/${logo}`} alt="company-logo" />
        </div>
        <div className="job-card__content">
          <div className="job-card__content__head flex align-baseline gap-x-4 pb-1">
            <p className="font-semibold text-primary-cyan-500 text-sm">
              {company}
            </p>
            <div className="job-card__content__head__tags-list">
              <ul className="flex gap-x-2">
                {isNew && (
                  <li>
                    <Tag type="primary">
                      <span>NEW</span>
                    </Tag>
                  </li>
                )}
                {isFeatured && (
                  <li>
                    <Tag type="secondary">
                      <span>FEATURED</span>
                    </Tag>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="job-card__content__role font-semibold">
            <p>{position}</p>
          </div>
          <div className="job-card__content__footer flex items-center gap-2">
            <p className="text-gray-500 font-medium">{date}</p>
            <span>·</span>
            <p className="text-gray-500 font-medium">{contract}</p>
            <span>·</span>
            <p className="text-gray-500 font-medium">{location}</p>
          </div>
        </div>
        <div className="job-card__filters ml-auto">
          <ChipList chips={skills} />
        </div>
      </div>
    </div>
  );
}
