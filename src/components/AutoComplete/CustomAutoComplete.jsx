import * as React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { InputWrapper, Label, Root, StyledTag, Listbox } from "./styles";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";

const CustomAutoComplete = ({ tags, setSelectTags, selectTags }) => {
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customAutoComplete",
    value: selectTags,
    onChange: (_, newValue) => {
      setSelectTags([...newValue]);
    },
    defaultValue: [],
    multiple: true,
    options: tags ? tags : [],
    getOptionLabel: (option) => option.content,
  });
  // console.log(
  //   "getInputProps",
  //   getInputProps,
  //   "getTagProps",
  //   getTagProps,
  //   "getListboxProps",
  //   getListboxProps,
  // );
  return (
    <Root>
      <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <StyledTag label={option.content} {...getTagProps({ index })} />
          ))}

          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.content}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
};
export default CustomAutoComplete;
