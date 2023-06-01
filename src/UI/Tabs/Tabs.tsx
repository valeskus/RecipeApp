import React from 'react';
import {Toggle} from '../Toggle';

interface TabsProps {
  activeItem: string;
  onChange: (item: string) => void;
}

export interface TabItem {
  itemId: string;
}

interface ChildProps {
  'aria-label'?: string;
  'aria-id'?: string;
}

export function Tabs({
  activeItem,
  onChange,
  children,
}: React.PropsWithChildren<TabsProps>): JSX.Element {
  const listOfTabs = React.Children.map<any, {props: ChildProps}>(
    children as any,
    child => {
      const label = child.props['aria-label'] || '';
      const id = child.props['aria-id'] || '';

      return {
        id,
        label,
        layout: activeItem === id ? child : null,
      };
    },
  );

  const items = listOfTabs
    .map(({id, label}) => ({id, label}))
    .filter(({id}) => id);

  console.log('items', items);
  console.log('activeItem', activeItem);

  return (
    <>
      <Toggle items={items} activeItem={activeItem} onChange={onChange} />
      {listOfTabs.map(({layout}) => layout)}
    </>
  );
}
