import PropTypes from 'prop-types';

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
