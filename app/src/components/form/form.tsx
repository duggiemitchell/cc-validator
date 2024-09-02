import { useState } from "react";
import { validateMutation } from "../../utils/api";
import "./form.css";

type FormStatus = "clean" | "valid" | "invalid";

const Form = () => {
  const [input, setInput] = useState<string>("");
  const [isValidating, setIsValidating] = useState(false);
  const [status, setStatus] = useState<FormStatus>("clean");

  const ccNumberArray = [...input].map((number) => Number(number));

  const handleValidate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsValidating(true);
    const isValid = await validateMutation(ccNumberArray);
    setStatus(() => (isValid ? "valid" : "invalid"));
    setIsValidating(false);
  };

  return (
    <form onSubmit={handleValidate}>
      <div className="form">
        <label htmlFor="ccn" className="visuallyHidden">
          Credit Card Number:
        </label>
        <input
          value={input}
          onChange={(e) => {
            setStatus("clean");
            setInput(e.target.value);
          }}
          id="ccn"
          type=""
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          autoComplete="cc-number"
          maxLength={19}
          placeholder="xxxx xxxx xxxx xxxx"
          required
        />
        {status !== "clean" && (
          <span className={`form-helper-text ${status}`}>
            Card number is {status}
          </span>
        )}
        <button type="submit" disabled={isValidating}>
          {isValidating ? "Validating..." : "Validate"}
        </button>
      </div>
    </form>
  );
};

export default Form;
