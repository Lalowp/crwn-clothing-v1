import { FormInputLabel, Input, GroupContainer } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {

    return (
        <GroupContainer>
            <Input {...otherProps}></Input>
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
            )}

        </GroupContainer>
    );
};

export default FormInput;