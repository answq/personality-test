import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Results = () => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        
        const response = await axios.get("http://localhost:4000/testResults"); // 또는 실제 API URL로 수정
        setTestResults(response.data);
      } catch (error) {
        console.error("테스트 결과를 불러오는 데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestResults();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>결과 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          테스트 결과
        </h1>

        {testResults.length === 0 ? (
          <p className="text-lg text-gray-700 text-center">
            아직 테스트 결과가 없습니다.
          </p>
        ) : (
          <div className="space-y-4">
            {testResults.map((result) => (
              <div
                key={result.id}
                className="bg-gray-50 p-4 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  테스트 결과: {result.result}
                </h2>
                <p className="text-gray-600">{result.mbtiDescription}</p>
                <p className="text-sm text-gray-500">
                  테스트 날짜: {new Date(result.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 text-center">
          <Link to="/test">
            <button className="py-2 px-4 bg-primary-color text-white font-semibold rounded-lg hover:bg-primary-dark transition duration-300">
              새로운 테스트 시작
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
