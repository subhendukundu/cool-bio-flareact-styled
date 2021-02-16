import React, { useState } from "react";
import { x } from "@xstyled/styled-components";

function TopBar() {
  const [display, setDisplay] = useState(true);
  const onClickDisplay = () => {
    setDisplay(false);
  };
  return (
    <>
      {display ? (
        <x.div
          display="flex"
          background="rgba(248, 126, 15, 0.5)"
          width="100%"
          padding="5px"
          height="40px"
          justifyContent="center"
          alignItems="center"
        >
          <x.p fontWeight="500" fontSize={{ _: "base", md: "sm" }}>
            We are still in Beta
          </x.p>
          <x.img
            position="absolute"
            right="16px"
            src="/assets/cross.svg"
            alt="cross"
            alt="cross"
            width="15px"
            height="15px"
            __css={{
              cursor: "pointer",
            }}
            onClick={onClickDisplay}
          />
        </x.div>
      ) : null}
    </>
  );
}

TopBar.propTypes = {};

export default TopBar;
