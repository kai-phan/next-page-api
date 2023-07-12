import React from 'react';

export type State = {
  openIndexed: (string | number)[];
  type: string;
};

export type Change = State | ((s: State) => State);

export type ChildrenProps = {
  openIndexed: (string | number)[];
  onItemClick: (index: string | number) => void;
};

export const types = {
  itemClickOpened: 'accordion_item-click__opened',
  itemClickClosed: 'accordion_item-click__closed',
  init: 'accordion_init',
} as const;

export type Props = {
  stateReducer?: (state: State, changes: State) => State;
  children: (props: ChildrenProps) => React.ReactNode;
};

const BaseAccordion: React.FC<Props> = ({ stateReducer, children }) => {
  const [state, setState] = React.useState<State>({
    openIndexed: [],
    type: types.init,
  });

  const getOpenIndexed = () => state.openIndexed;

  const handleItemClick = (index: string | number) => {
    setInnerState((prev) => {
      const isOpened = prev.openIndexed.includes(index);

      return {
        ...prev,
        openIndexed: isOpened
          ? prev.openIndexed.filter((i) => i !== index)
          : [...getOpenIndexed(), index],
        type: isOpened ? types.itemClickClosed : types.itemClickOpened,
      };
    });
  };

  const setInnerState = (changes: Change) => {
    setState((prevState) => {
      const state =
        typeof changes === 'function' ? changes(prevState) : changes;

      return stateReducer ? stateReducer(prevState, state) : state;
    });
  };

  return (
    <React.Fragment>
      {children({
        onItemClick: handleItemClick,
        openIndexed: getOpenIndexed(),
      })}
    </React.Fragment>
  );
};

export default BaseAccordion;
