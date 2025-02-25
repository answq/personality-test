import AuthForm from "../components/AuthForm";
import { useState, useContext } from "react";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setUser, saveToken } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });
  const navigate = useNavigate();

  //로그인
  const handleLogin = async (formData) => {
    try {
      const data = await login({
        id: formData.id,
        password: formData.password,
      });

      saveToken(data.accessToken);

      if (data.accessToken) {
        const userProfile = await getUserProfile(data.accessToken);

        setUser(userProfile);

        navigate("/");
      } else {
        alert("로그인 오류");
      }
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">로그인</h1>
        <AuthForm 
          mode="login"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleLogin}
        />
        <div className="mt-6 text-center">
          <p className="text-sm">
            아직 계정이 없으신가요? <Link to="/signup" className="text-green-500 hover:text-blue-700 font-semibold">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
