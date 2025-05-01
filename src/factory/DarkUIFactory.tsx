import { DarkButton } from "../ui/dark/DarkButton";
import { DarkContainer } from "../ui/dark/DarkContainer";
import { DarkInput } from "../ui/dark/DarkInput";
import { DarkKeyValueLine } from "../ui/dark/DarkKeyValueLine";
import { DarkLabel } from "../ui/dark/DarkLabel";
import { DarkSelect } from "../ui/dark/DarkSelect";
import { UIFactory } from "./UIFactory";

export class DarkUIFactory implements UIFactory {
  createButton(label, onClick, disabled) {
    return (
      <DarkButton onClick={onClick} disabled={disabled}>
        {label}
      </DarkButton>
    );
  }

  createInput(placeholder, value, onChange) {
    return (
      <DarkInput placeholder={placeholder} value={value} onChange={onChange} />
    );
  }

  createSelect(options, value, onChange) {
    return <DarkSelect options={options} value={value} onChange={onChange} />;
  }

  createContainer(children) {
    return <DarkContainer>{children}</DarkContainer>;
  }

  createKeyValueLine(label, value, options) {
    return <DarkKeyValueLine label={label} value={value} options={options} />;
  }

  createLabel(text, options) {
    return <DarkLabel text={text} options={options} />;
  }
}
