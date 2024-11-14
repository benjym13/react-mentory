import PropTypes from 'prop-types';

const BUTTON_TYPES = {
  light:
    'bg-white text-black border-2 border-rose-300 hover:text-red hover:border-red',
  dark: 'bg-red text-white',
};

/**
 * Button component renders a individual button with different visual cases 
 *
 * @component
 * 
 * @param {{ onClick: any; children: any; icon?: boolean; type?: string; }} param0
 * @param {*} param0.onClick
 * @param {*} param0.children
 * @param {boolean} [param0.icon=false]
 * @param {string} [param0.type='dark']
 * 
 * @returns {JSX.Element} -- styled button with some childrens as icons, img or labels.
 */

export default function Button({
  onClick,
  children,
  icon = false,
  type = 'dark',
}) {
  const iconStyles = icon ? 'bg-transparent' : 'w-full py-3';
  const common =
    'rounded-full flex justify-center items-center gap-3 text-sm  font-semibold text-center';
  const buttonType = BUTTON_TYPES[type];
  const styles = `${common} ${buttonType} ${iconStyles}`.trim();

  return (
    <button className={styles} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.bool,
  type: PropTypes.oneOf(['light', 'dark']),
};
