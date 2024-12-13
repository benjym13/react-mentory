import { type Tag } from '../models/models';

/**
 * CSS classes for styling different types of tags.
 *
 * @constant
 * @type {{ primary: string; secondary: string; }}
 * @example
 * Use TAG_TYPE to dynamically set the style of a tag
 * const tagStyle = TAG_TYPE.primary;
 */
const TAG_TYPE = {
  primary:
    'px-2 py-1 text-xs font-semibold rounded-full bg-primary-cyan-500 text-white',
  secondary:
    'px-2 py-1 text-xs font-semibold rounded-full bg-gray-900 text-white',
};

/**
 * Renders a styled tag component.
 *
 * @component
 * @export
 * @param {Tag} props - The properties for the Tag component.
 * @returns {JSX.Element} The rendered tag.
 *
 * @example
 * <Tag type="primary">
 *   <span>Example Tag</span>
 * </Tag>
 */

export default function Tag({ type, children }: Tag) {
  const tagBg = TAG_TYPE[type];

  return (
    <div className="c-tag">
      <div className={tagBg}>{children}</div>
    </div>
  );
}
