import PropTypes from 'prop-types';

/**
 * Icon component
 *
 * @component
 * @example
 * <Icon extraClasses="border border-white rounded-full">
 *     <img src="/assets/images/icon-increment-quantity.svg" alt="icon" />
 * </Icon>
 * 
 * @param {*} param0.children
 * @param {string} param0.extraClasses
 * 
 * @returns {JSX.Element} Styled banner component wrapping the `children`.
 */
export default function Icon({ children, extraClasses }) {
  return (
    <div
      className={`icon flex justify-center items-center w-5 h-5 ${extraClasses}`}
    >
      {children}
    </div>
  );
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  extraClasses: PropTypes.string,
};
