
const AuthForm = ({ mode, formData, setFormData, onSubmit }) => {


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 폼 제출 시 onSubmit 호출
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="아이디"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
        />
        {mode === "signup" && (
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            required
          />
        )}

        <button>{mode === "login" ? "로그인" : "회원가입"}</button>
      </form>
    </div>
  );
};

export default AuthForm;
