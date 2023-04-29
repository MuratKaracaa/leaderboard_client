import {
  ForwardedRef,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
  forwardRef,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";

import colors from "../colors";
import breakpoints from "../breakpoints";

import useTranslate from "../../hooks/useTranslate";

import { ReactComponent as SearchIcon } from "../../assets/svgs/icon-search.svg";
import { ReactComponent as ClearIcon } from "../../assets/svgs/icon-x-mark.svg";

import { ResourceKey } from "../../common/localization/resources/resource";

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;

  border-radius: 8px;

  overflow: hidden;
`;

const StyledInput = styled.input`
  width: 100%;

  padding: 16px 0 16px 48px;

  border: none;

  background-color: ${colors.primary.main};
  color: ${colors.grey.light};

  @media ${breakpoints.mobile} {
    padding: 8px 0 8px 24px;

    font-size: 10px;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  top: 16px;
  left: 16px;

  width: 18px;
  height: 18px;

  color: ${colors.grey.main};

  @media ${breakpoints.mobile} {
    top: 8px;
    left: 8px;

    width: 12px;
    height: 12px;
  }
`;

const StyledClearIcon = styled(ClearIcon)`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 18px;
  height: 18px;

  color: ${colors.grey.main};

  cursor: pointer;

  @media ${breakpoints.mobile} {
    top: 8px;
    right: 8px;

    width: 12px;
    height: 12px;
  }
`;

interface SearchInputProps {
  handleSearch: KeyboardEventHandler;
  handleClear?: MouseEventHandler;
  placeholderKey?: ResourceKey;
  className?: string;
}

const SearchInput = (
  { placeholderKey, className, handleSearch, handleClear }: SearchInputProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
  const { translate } = useTranslate();
  const [value, setValue] = useState<string>("");

  const onClearClickHandler = (e: any) => {
    handleClear?.(e);
    setValue("");
  };

  const onChangeHandler = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <StyledInputWrapper className={className}>
      <StyledSearchIcon />
      {value && <StyledClearIcon onClick={onClearClickHandler} />}
      <StyledInput
        onKeyDown={handleSearch}
        ref={ref}
        placeholder={
          !placeholderKey
            ? translate("search_input_default_placeholder")
            : translate(placeholderKey)
        }
        value={value}
        onChange={onChangeHandler}
      />
    </StyledInputWrapper>
  );
};

export default forwardRef(SearchInput);
