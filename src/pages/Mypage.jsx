import { useState } from "react";
import { updateProfile } from "../api/auth";

const Mypage = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nickname) {
      alert("닉네임을 입력해주세요.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const updatedProfile = await updateProfile({ nickname });

      setUser(updatedProfile);
      setNickname(updatedProfile.nickname);
    } catch (error) {
      setError("프로필 업데이트에 실패했습니다. 다시 시도해주세요.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-xl font-semibold text-center mb-4">프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="새 닉네임"
            className="w-full px-4 py-2 mb-4 border rounded-lg"
          />
          <button
            type="submit"
            className={`w-full py-2 bg-gray-700 text-white rounded-lg`}
            disabled={loading}
          >
            {loading ? "업데이트 중..." : "업데이트"}
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Mypage;
