export default function SignUserInfo() {
  return (
    <div>
      <div className="form-group my-3 d-flex align-items-center justify-content-between">
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="enter first name"
        />
      </div>
      <div className="form-group my-3 d-flex align-items-center justify-content-between">
        <div className="form-group me-2">
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="enter the last name"
          />
        </div>
        <div className="form-group ms-2">
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="coenter the age"
          />
        </div>
      </div>
      <div className="form-group my-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="enter your email"
        />
      </div>
      <div className="form-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="enter the number phone"
        />
      </div>
    </div>
  );
}
