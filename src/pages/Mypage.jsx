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
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              placeholder="새로운 닉네임을 입력하세요."
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "업데이트 대기" : "프로필 업데이트"}
          </button>
        </form>
        <p className="error-message">{error}</p>
      </div>
    </div>
  );
};

export default Mypage;
