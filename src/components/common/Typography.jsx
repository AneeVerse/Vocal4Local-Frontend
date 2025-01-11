import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Define default styles for different variants
const VARIANT_STYLES = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  paragraph: "text-base text-gray-600",
  caption: "text-sm text-gray-500",
};

const Typography = ({ as: Component = 'p', variant = 'paragraph', className = '', children, ...props }) => {
  return (
    <Component
      className={clsx(VARIANT_STYLES[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

// PropTypes validation
Typography.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'paragraph',
    'caption',
  ]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;
