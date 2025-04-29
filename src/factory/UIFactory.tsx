// src/factory/UIFactory.ts
export interface UIFactory {
  createButton(label: string, onClick: () => void): JSX.Element;
  createInput(
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ): JSX.Element;
  createSelect(
    options: { label: string; value: string }[],
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  ): JSX.Element;
  createContainer(children: React.ReactNode): JSX.Element;
}
