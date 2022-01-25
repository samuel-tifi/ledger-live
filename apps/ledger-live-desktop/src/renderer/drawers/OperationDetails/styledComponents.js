// @flow
import styled from "styled-components";
import type { ThemedComponent } from "~/renderer/styles/StyleProvider";

import Bar from "~/renderer/components/Bar";
import Box from "~/renderer/components/Box";
import Text from "~/renderer/components/Text";
import Link from "~/renderer/components/Link";

export const OpDetailsSection: ThemedComponent<{}> = styled(Box).attrs(() => ({
  horizontal: true,
  alignItems: "flex-start",
  justifyContent: "space-between",
  ff: "Inter|SemiBold",
  fontSize: 4,
  color: "palette.text.shade60",
}))``;

export const OpDetailsTitle: ThemedComponent<{}> = styled(Box).attrs(p => ({
  ff: "Inter|SemiBold",
  fontSize: 3,
  color: "palette.text.shade100",
  horizontal: p.horizontal || true,
}))`
  justify-content: center;
  min-height: 30px;
  letter-spacing: 2px;
  line-height: 30px;
`;
export const Address: ThemedComponent<{}> = styled(Text)`
  margin-left: -4px;
  border-radius: 4px;
  flex-wrap: wrap;
  padding: 4px;
  width: fit-content;
  max-width: 100%;
  display: inline-block;
`;

export const GradientHover: ThemedComponent<{}> = styled(Box).attrs(() => ({
  alignItem: "center",
  justifyContent: "center",
  color: "wallet",
}))`
  background: ${p => p.theme.colors.palette.background.paper};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-left: 20px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    ${p => p.theme.colors.palette.background.paper} 20%
  );
`;

export const OpDetailsData: ThemedComponent<{ color?: string }> = styled(Box).attrs(p => ({
  ff: "Inter",
  color: p.color || "palette.text.shade80",
  fontSize: 3,
  relative: true,
  flex: 1,
  horizontal: true,
  justifyContent: p.justifyContent || "flex-end",
  alignItems: p.alignItems || "center",
}))`
  min-height: 30px;
  max-width: 100%;
  ${GradientHover} {
    display: none;
  }

  &:hover ${GradientHover} {
    display: flex;
    & > * {
      cursor: pointer;
    }
  }

  &:hover ${Address} {
    background: ${p => p.theme.colors.pillActiveBackground};
    color: ${p => p.theme.colors.palette.primary.main};
    font-weight: 400;
  }

  & ${Link}:hover {
    text-decoration: underline;
  }
`;

export const NoMarginWrapper: ThemedComponent<{}> = styled.div`
  margin-left: -20px;
  margin-right: -20px;
`;

export const B: ThemedComponent<{}> = styled(Bar).attrs(() => ({
  color: "palette.divider",
  size: 1,
}))``;

export const TextEllipsis: ThemedComponent<{}> = styled.div`
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Separator: ThemedComponent<{}> = styled.div`
  margin: 0 4px;
`;

export const OpDetailsVoteData: ThemedComponent<{}> = styled.blockquote`
  max-width: 100%;
  margin-bottom: 13px;
  padding-left: 10px;
  border-left: 4px solid currentColor;
  ${Address} {
    cursor: pointer;
  }
`;

export const HashContainer: ThemedComponent<{}> = styled.div`
  width: 100%;
  word-break: break-all;
  user-select: text;
  padding-left: 50px;
  height: 30px;
  line-height: 30px;
`;

export const OpDetailsSideButton: ThemedComponent<{}> = styled(Box).attrs(p => ({
  horizontal: true,
  justifyContent: "flex-end",
  alignItems: "center",
}))`
  cursor: pointer;
`;
