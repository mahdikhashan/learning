/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

type TabBodyProps = {
  children: React.ReactNode;
};

export function TabBody(props: TabBodyProps) {
  const { children } = props;

  return (
    <div
      css={css`
        color: #555;
        font-weight: bold;
        font-size: 200%;
        padding: 0.5rem;
        min-height: 250px;
        border: 1px solid #aaa;
        border-radius: 0.25rem;
        margin-bottom: 1rem;
        text-align: center;
        display: block;
      `}
    >
      {children}
    </div>
  );
}
