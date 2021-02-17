import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import { x } from "@xstyled/styled-components";

function LazyImage({ height, width = "100%", src, alt, ...rest }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);
  return (
    <x.img
      loading="lazy"
      src={src}
      alt={alt}
      ref={imgRef}
      onLoad={() => setLoaded(true)}
      transition="opacity 1s"
      opacity={loaded ? 1 : 0}
      h={height}
      w={width}
      {...rest}
    />
  );
}

LazyImage.propTypes = {
  alt: PropTypes.any,
  className: PropTypes.any,
  src: PropTypes.any,
};
export default LazyImage;
