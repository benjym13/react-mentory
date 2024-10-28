import PropTypes from 'prop-types';

export default function Banner({ children }) {
  return (
    <div className="banner bg-rose-50 rounded p-3">
      <div className="banner__container flex flex-row justify-center gap-2 ">
        {children}
      </div>
    </div>
  );
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};
