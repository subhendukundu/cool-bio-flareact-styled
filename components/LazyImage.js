import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import { x } from "@xstyled/styled-components";

function LazyImage({ height, width, src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, []);
  return (
    <x.div h={height} w={width}>
      <x.img
        loading="lazy"
        src={src}
        alt={alt}
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        transition="opacity 1s"
        opacity={loaded ? 1 : 0}
        w="100%"
      />
    </x.div>
  );
}

LazyImage.propTypes = {
  alt: PropTypes.any,
  className: PropTypes.any,
  src: PropTypes.any,
};
export default LazyImage;
