import '../Cover.css';

function Cover() {
  return (
    <div id="cover" className="wrapper mb-20 text-[#4A4261]">
      <div className="typing-container p-10 mt-8">
        <p className="typing_default typing_effect first-line leading-snug">
          디자인 감각과 개발 경험을 바탕으로
        </p>
        <p className="typing_effect second-line cursor-after">
          사용자 중심의 UI를 만드는 개발자 박소현입니다.
        </p>
      </div>

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

