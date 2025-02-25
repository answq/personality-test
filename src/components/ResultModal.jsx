import { useNavigate } from "react-router-dom";

const ResultModal = ({ result, mbtiDescription, onClose }) => {
  const navigate = useNavigate();

  //다시 테스트 페이지로 이동
  const handleNavigateToTest = () => {
    onClose();
    navigate("/test");
  };
  //테스트 결과 목록으로 이동
  const handleNavigateToResults = () => {
    navigate("/test-results");
  };

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h1 className="text-3xl font-bold text-primary-color mb-6">
          테스트 결과: {result}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          {mbtiDescription &&
          mbtiDescription !== "해당 성격 유형에 대한 설명이 없습니다."
            ? mbtiDescription
            : "해당 성격 유형에 대한 설명이 없습니다."}
        </p>
        <button
          onClick={handleNavigateToTest}
          className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
        >
          닫기
        </button>
        <button
          onClick={handleNavigateToResults}
          className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
        >
          다른 사람 결과도 보기
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
