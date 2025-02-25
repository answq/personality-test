import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { accessToken } = useContext(AuthContext);

  const isLoggedIn = Boolean(accessToken);

  return (
    <div className="min-h-screen bg-white flex justify-center items-center relative">
      {!isLoggedIn && (
        <Link
          to="/login"
          className="absolute top-4 right-4 text-grey-700 rounded-lg hover:text-gray-400 transition duration-300 font-semibold text-sm"
        >
          로그인하기
        </Link>
      )}
      {isLoggedIn && (
        <Link
          to="/my-page"
          className="absolute top-4 right-20 text-grey-700 rounded-lg hover:text-gray-400 transition duration-300 font-semibold text-sm"
        >
          마이페이지
        </Link>
      )}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          내 MBTI는 뭘까?
        </h1>
        <p className="text-lg text-green-500 mb-6">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
        <Link to="/test">
          <button
            type="button"
            className="w-full py-5 px-6 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
          >
            내 성격 유형 알아보기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
