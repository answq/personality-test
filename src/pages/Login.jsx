import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  //로그인
  const handleLogin = async (formData) => {
    try {
      const data = await login({
        id: formData.id,
        password: formData.password,
      });
      localStorage.setItem("accessToken", data.accessToken);
      if (data) {
        const userProfile = await getUserProfile(data.accessToken);

        setUser(userProfile);

        navigate("/");
      } else {
        alert("로그인 오류");
      }
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
