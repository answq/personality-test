import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
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
    <div>
      <div>
        <h1>회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
