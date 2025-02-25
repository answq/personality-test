import AuthForm from "../components/AuthForm";
import { useState } from "react";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const navigate = useNavigate();

  //회원가입
  const handleSignup = async (formData) => {
    try {
      const data = await register({
        id: formData.id,
        password: formData.password,
        nickname: formData.nickname,
      });
      if (data) {
        alert("회원가입 되었습니다.");
        navigate("/login");
      } else {
        alert("회원가입 오류");
      }
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">회원가입</h1>
        <AuthForm
          mode="sign-up"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSignup}
        />
        <div className="mt-6 text-center">
          <p className="text-sm">
            이미 계정이 있으신가요? <Link to="/login" className="text-green-500 hover:text-blue-700 font-semibold">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
