import React from 'react';

import { BaseAccordion } from 'src/components/shared';

export type Props = {
  className?: string;
  items: ItemProps[];
  renderTitle?: (props: ItemProps) => React.ReactNode;
};

export type ItemProps = {
  id: string | number;
  title?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (key: string | number) => void;
  isOpened?: boolean;
  renderTitle?: (props: ItemProps) => React.ReactNode;
};

const Accordion: React.FC<Props> = ({ items, renderTitle }) => {
  return (
    <BaseAccordion>
      {({ onItemClick, openIndexed }) => {
        return (
          <div>
            {items.map((item) => {
              return (
                <AccordionItem
                  {...item}
                  key={item.id}
                  isOpened={openIndexed.includes(item.id)}
                  onClick={onItemClick}
                />
              );
            })}
          </div>
        );
      }}
    </BaseAccordion>
  );
};

export const AccordionItem: React.FC<ItemProps> = ({
  title,
  disabled,
  children,
  onClick,
  isOpened,
  id,
}) => {
  return (
    <div key={id}>
      <div onClick={() => onClick?.(id)}>{title}</div>
      {isOpened && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
