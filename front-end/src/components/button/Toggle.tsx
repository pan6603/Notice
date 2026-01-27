import { 
    ToggleContainer,
    SwitchButton
} from "../../styles/components/button/Toggle.styles"

type ToggleProps = {
  checked: boolean;
  onChange: () => void;
};

export default function Toggle({ checked, onChange }: ToggleProps) {
    return (
        <>
            <ToggleContainer onClick={onChange} $checked={checked}>
                <SwitchButton $checked={checked} />
            </ToggleContainer>
        </>
    )
}