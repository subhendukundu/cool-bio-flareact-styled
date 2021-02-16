import React from "react";
import PropTypes from "prop-types";
import NextLink from "flareact/link";
import { x } from "@xstyled/styled-components";

function Link({ color = "#F87E0F", children, href = "#", ...rest }) {
  return (
    <NextLink href={href}>
      <x.a color={color} {...rest} rel="noopener">
          {children}
      </x.a>
    </NextLink>
  );
}

Link.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  href: PropTypes.string,
};

export default Link;
