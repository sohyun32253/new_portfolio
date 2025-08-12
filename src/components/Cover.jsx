import '../Cover.css';

function Cover() {
  return (
    <div id="cover" className="wrapper mb-20">
      <div className="typing-container p-10 mt-8">
        <p className="typing_default typing_effect first-line leading-snug">
          끊임없이 탐구하고, 끊임없이 고민하는
        </p>
        {/* 커서 깜빡임은 이 라인에만 붙였어 */}
        <p className="typing_effect second-line cursor-after">
          주니어 개발자 박소현입니다.
        </p>
      </div>

      {/* 스크롤 유도 인디케이터 */}
<a href="#project" className="scroll-indicator btn-to-project bg-pointColor" aria-label="프로젝트 섹션으로 이동">
  <span>프로젝트 바로가기</span>
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
</a>

    </div>
  );
}

export default Cover;

