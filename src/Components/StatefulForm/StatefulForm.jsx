import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must contain 6 characters or longer");
    } else {
      setError('')
      console.log(name, email, phone, password);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChangeName}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <br />
        <input
          onChange={handleChangeEmail}
          type="email"
          name="email"
          placeholder="Your email"
        />
        <br />
        <input
          onChange={handleChangePhone}
          type="number"
          name="phone"
          placeholder="Your phone"
        />
        <br />
        <input
          onChange={handleChangePass}
          type="password"
          name="password"
          placeholder="Your password"
        />
        <br />

        {error && <h6>{error}</h6>}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StatefulForm;
