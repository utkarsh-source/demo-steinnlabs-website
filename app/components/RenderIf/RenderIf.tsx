interface Props {
  isTrue?: boolean;
}

export function RenderIf({
  children,
  isTrue,
}: React.PropsWithChildren<Props>): React.ReactElement | null {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return !!isTrue && children ? <>{children}</> : null;
}
