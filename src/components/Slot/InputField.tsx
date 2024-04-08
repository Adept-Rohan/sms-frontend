import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, forwardRef, useId } from "react";
import { inputFieldStyle } from "../../styles/InputFieldStyle";
import { ErrorIcon } from "../../icons/ErrorIcon";

export interface InputFieldProps extends Omit<ComponentProps<"input">, "ref"> {
  asChild?: boolean;
  errorMessage?: string | undefined;
  labelProps?: ComponentProps<"label">;
  required?: boolean;
  labels?: string;
  error?: string;
}

export const InputField = forwardRef(
  (
    {
      asChild,
      labels,
      required,
      errorMessage,
      error,
      labelProps: rawLabelProps = {},
      ...inputProps
    }: InputFieldProps,
    ref
  ) => {
    const { inputField, inputFieldError, label, labelError, errorText } =
      inputFieldStyle();

    const Comp = asChild ? Slot : "input";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { className, ...labelProps } = rawLabelProps;
    const id = useId();
    return (
      <>
        <label
          htmlFor={id}
          className={`${errorMessage ? labelError() : label()}`}
          {...labelProps}
        >
          {labels}{" "}
          {required ? <span className="text-error ">*</span> : "(optional)"}
        </label>
        <Comp
          id={id}
          className={`${errorMessage ? inputFieldError() : inputField()}`}
          {...inputProps}
          ref={ref as never}
        />
        {error && (
          <div className="flex gap-x-[4px] justify-start">
            <ErrorIcon
              width={12}
              height={12}
              color="#DC362E"
              className="-mt-[7px]"
            />
            <span className={errorText()}>{error}</span>
          </div>
        )}
      </>
    );
  }
);
