import PropTypes from 'prop-types';

/**
 * `Banner` component to render a styled container with centered content.
 * Useful for displaying highlighted messages, icons, or other elements.
 *
 * @component
 * @example
 * // Example usage:
 * // This renders the Banner component with some text inside
 * <Banner>
 *    <p>This is a highlighted message!</p>
 * </Banner>
 * 
 * @param {React.ReactNode} props.children - Elements to be rendered inside the banner.
 * 
 * @returns {JSX.Element} Styled banner component wrapping the `children`.
 */

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
