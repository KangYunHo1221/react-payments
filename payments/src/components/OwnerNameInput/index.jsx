import useControllInput from "../../hooks/useControllInput";
import { Input } from "../elements/Input";
import InputContainer from "../elements/InputContainer";
import InputLabel from "../elements/label";
import "./index.scss";

const INPUT_LENGTH = 30;

const OwnerNameInput = ({ state, updateForm }) => {
  const { itemRef, controllInput } = useControllInput({
    maxLength: INPUT_LENGTH,
  });
  return (
    <div className="ownername__input__container">
      <div className="label__container">
        <InputLabel>카드 소유자 이름(선택)</InputLabel>
        <InputLabel>{`${state.length}/30`}</InputLabel>
        <></>
      </div>
      <InputContainer>
        <Input
          ref={(el) => {
            itemRef.current[0] = el;
          }}
          type="text"
          value={state}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={({ target }) => {
            controllInput(target);
            updateForm({
              type: "ownerName",
              payload: { value: target.value },
            });
          }}
        />
      </InputContainer>
    </div>
  );
};

export default OwnerNameInput;
