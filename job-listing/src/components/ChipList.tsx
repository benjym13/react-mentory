import type { ChipList } from '../models/models';
import Chip from './Chip';

export default function ChipList({ chips }: ChipList) {
  return (
    <div>
      <ul className="flex gap-x-4">
        {chips.map((chip, index) => (
          <li key={index}>
            <Chip label={chip.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}
