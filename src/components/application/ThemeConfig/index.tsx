import React from 'react';

export type Props = {
  children: React.ReactNode;
  config?: Partial<ConfigContextType>;
};

export type ConfigContextType = {
  mode: 'light' | 'dark' | 'semi-dark';
  size: 'small' | 'medium' | 'large';
  setConfig: React.Dispatch<React.SetStateAction<ConfigContextType>>;
  handleSwitchMode: (mode: ConfigContextType['mode']) => void;
};

const ConfigContext = React.createContext<ConfigContextType>(
  {} as ConfigContextType,
);

export const useConfig = () => {
  return React.useContext(ConfigContext);
};

const noop = () => {};

const ThemeConfig: React.FC<Props> = ({
  children,
  config: configProps = {},
}) => {
  const [config, setConfig] = React.useState<ConfigContextType>({
    mode: 'light',
    size: 'medium',
    ...configProps,
    setConfig: noop,
    handleSwitchMode: noop,
  });

  const handleSwitchMode = React.useCallback(
    (mode: ConfigContextType['mode']) => {
      setConfig((prev) => {
        switch (mode) {
          case 'light':
            document.documentElement.classList.remove('dark');
            break;
          case 'dark':
            document.documentElement.classList.add('dark');
            break;
        }

        return { ...prev, mode };
      });
    },
    [],
  );

  React.useEffect(() => {
    if (document) {
      handleSwitchMode(config.mode);
    }
  }, [config.mode, handleSwitchMode]);

  return (
    <ConfigContext.Provider value={{ ...config, setConfig, handleSwitchMode }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ThemeConfig;
