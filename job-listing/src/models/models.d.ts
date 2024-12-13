import { ReactElement } from 'react';

/**
 * data type of json response
 *
 * @export
 * @typedef {DataRaw}
 */
export type DataRaw = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export type Job = {
  /**
   * Job ID
   */
  id: number;
  /**
   * Company name
   */
  company: string;
  /**
   * Company logo
   */
  logo: string;
  /**
   * Job role
   */
  role: string;
  /**
   * Jos position
   */
  position: string;
  /**
   * Job location
   */
  location: string;
  /**
   * boolean set if job is new
   */
  isNew: boolean;
  /**
   * boolean set if job is featured
   */
  isFeatured: boolean;
  /**
   * Type of contract
   */
  contract: string;
  /**
   * post job date
   */
  date: string;
  /**
   * list of skills like languages and tools
   */
  skills: { label: string }[];
};

export type JobList = {
  /**
   * List of Jobs
   */
  jobs: Job[];
};

/**
 * Description placeholder
 *
 * @export
 * @typedef {TagType}
 */
export type TagType = 'primary' | 'secondary';

export type Tag = {
  /**
   * set tag type
   */
  type: TagType;
  /**
   * set Tag´s content
   */
  children: React.ReactNode;
};

export type Chip = {
  /**
   * Chip label
   */
  label: string;
  onClick?: () => {};
  onHover?: () => void;
};

export type ChipList = {
  /**
   * list of Chip Component:
   */
  chips: Chip[];
};
