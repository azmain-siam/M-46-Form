import { useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleEvent = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleEvent}>
        <input ref={nameRef} type="text" name="name" placeholder="Your name" />
        <br />
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Your email"
        />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="Your phone"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefForm;
