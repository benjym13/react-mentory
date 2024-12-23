import type { DataRaw, Job } from '../models/models';
import { mappedSkills } from './mappedSkills';

export function normalizeJobList(dataRaw: DataRaw[]): Job[] {
  return dataRaw.map((el) => ({
    id: el.id,
    company: el.company,
    isFeatured: el.featured,
    isNew: el.new,
    location: el.location,
    logo: el.logo,
    role: el.role,
    position: el.position,
    skills: mappedSkills(el.languages, el.tools, el.role, el.level),
    contract: el.contract,
    date: el.postedAt,
  }));
}
