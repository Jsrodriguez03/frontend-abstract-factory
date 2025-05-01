import { LightButton } from "../ui/ligth/LightButton";
import { LightContainer } from "../ui/ligth/LightContainer";
import { LightInput } from "../ui/ligth/LightInput";
import { LightKeyValueLine } from "../ui/ligth/LightKeyValueLine";
import { LightLabel } from "../ui/ligth/LightLabel";
import { LightSelect } from "../ui/ligth/LightSelect";
import { UIFactory } from "./UIFactory";

export class LightUIFactory implements UIFactory {
  createButton(label, onClick, disabled) {
    return (
      <LightButton onClick={onClick} disabled={disabled}>
        {label}
      </LightButton>
    );
  }

  createInput(placeholder, value, onChange) {
    return (
      <LightInput placeholder={placeholder} value={value} onChange={onChange} />
    );
  }

  createSelect(options, value, onChange) {
    return <LightSelect options={options} value={value} onChange={onChange} />;
  }

  createContainer(children) {
    return <LightContainer>{children}</LightContainer>;
  }

  createKeyValueLine(label, value, options) {
    return <LightKeyValueLine label={label} value={value} options={options} />;
  }

  createLabel(text, options) {
    return <LightLabel text={text} options={options} />;
  }
}
