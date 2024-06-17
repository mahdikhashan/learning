/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type TabProps = {
  children: React.ReactNode;
};

export function Tab(props: TabProps) {
  const { children } = props;

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 1em;
      `}
    >
      {children}
    </div>
  );
}
