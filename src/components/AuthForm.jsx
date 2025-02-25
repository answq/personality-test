import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
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
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="비밀번호"
          required
          className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        {mode === "sign-up" && (
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            required
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        )}

        <button
          type="submit"
          className="w-full py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
        >
          {mode === "login" ? "로그인" : "회원가입"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
