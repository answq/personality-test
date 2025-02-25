import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import ResultModal from "../components/ResultModal";
import { useNavigate } from "react-router-dom";

const Test = ({ user }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //답안 제출
  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers);

    setResult(mbtiResult);
    setIsModalOpen(true);
  };

  //테스트 결과 목록으로 이동
  const handleNavigateToResults = () => {
    navigate("/results");
  };

  //모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-primary-color text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 hover:text-[#FF5A5F]"
            >
              다른 사람 결과도 보기
            </button>
          </>
        )}
      </div>
      {isModalOpen && (
        <ResultModal
          result={result}
          mbtiDescription={mbtiDescriptions[result]}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Test;
