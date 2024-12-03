/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
function InputCustom(props: any) {
    const { validation,
        invalid = "false",
        dirty = "false",
        onTurnDirty,
        ...inputProps } = props;
    
      function handleBlur() {
        onTurnDirty(props.name)
      }
    
      return (
        <input
          {...inputProps}
          data-invalid={invalid}
          onBlur={handleBlur}
          data-dirty={dirty}
        />
      )
    }
    

export default InputCustom
