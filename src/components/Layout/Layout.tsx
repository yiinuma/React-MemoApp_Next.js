/* eslint-disable react/display-name */
import { FC, memo, ReactNode } from 'react';

type Props = {
  readonly children: ReactNode;
};

export const Layout: FC<Props> = memo((props) => {
  const { children } = props;
  return <div className='px-4pt-4 min-h-screen bg-gradient-to-l from-slate-500 to-slate-700'>{children}</div>;
});