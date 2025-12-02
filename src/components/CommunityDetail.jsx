function CommunityDetail() {
  return (
    <section className="text-[20px]">
      {/* ====== 주요 정보 및 기간 ====== */}
      <h1 className="mb-3 text-xl font-semibold">✔️ 주요 정보 및 기간</h1>
      <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
        <div className="px-6 py-8 space-y-6 text-[16px] leading-relaxed text-textColor">
          <p className="text-lg">
            📆 <strong className="text-gray-800">프로젝트 기간</strong> : 2025.09.22 ~ 2025.09.29
          </p>
          {/* 프로젝트 소개 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">⭐ 프로젝트 소개</h2>
            <ul className="list-disc list-inside text-gray-700 px-9">
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">
                React Native(Expo)로 제작한 간단한 커뮤니티 앱입니다. <br/> Firebase(인증/Firestore)와 Cloudinary(이미지 업로드)를
                연결하여 <b>글 목록·상세·작성</b>과 <b>댓글</b>, <b>실시간 갱신(onSnapshot)</b>을 구현했습니다.
              </li>
              <li className="mt-1 before:content-['•'] before:mr-2 before:text-slate-400">
                모바일 중심으로 설계했으며, <b>expo-router</b> 기반 파일 라우팅과 Web 실행(`npx expo start --web`)도 지원합니다.
              </li>
            </ul>
          </div>

          {/* 개발 환경 */}
          <div>
            <h2 className="font-semibold text-lg mb-2">⚙️ 개발 환경</h2>
            <ul className="flex flex-wrap gap-3 text-base">
              {[
                'React Native (Expo)',
                'expo-router',
                'Firebase Auth',
                'Firestore',
                'Cloudinary',
                'react-hook-form',
                'react-native-toast-message',
                'TypeScript',
              ].map((item) => (
                <li key={item} className="px-4 py-1 bg-[#6f728b] text-white rounded-full">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 배포/저장소/시연 */}
          <div className="space-y-2">
            <h2 className="font-semibold text-lg mb-2">🔗 저장소 & 시연</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/sohyun32253/community"
                className="inline-block px-5 py-2 rounded-full bg-pointColor text-white hover:bg-[#825ff7] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                📂 GitHub 저장소
              </a>
              <a
                href="https://drive.google.com/file/d/1ziFYMK6qP4VFn_vH3gkOk2IYjpyVT0-N/view?usp=sharing"
                className="inline-block px-5 py-2 rounded-full bg-[#6f728b] text-white hover:opacity-90 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎥 MVP 시연 영상
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ====== 구현 기능 ====== */}
      <h1 className="mb-3 text-xl font-semibold">✔️ 구현 기능</h1>
      <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
        <div className="px-6 py-8 text-[16px] text-gray-800 space-y-6">
          <div>
            <h3 className="font-semibold text-base mb-2">🔑 인증</h3>
            <ul className="list-disc list-inside px-9 space-y-1">
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">Firebase Email/Password 로그인·회원가입</li>
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">react-hook-form 기반 유효성 검사, 성공/실패 Toast 알림</li>
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">구글/카카오/네이버 <b>API 호출 버튼</b> UI 제공</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-2">📰 글 목록</h3>
            <ul className="list-disc list-inside px-9 space-y-1">
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">Firestore <b>최신순</b> 쿼리</li>
              <li className="before:content-['•'] before:mr-2 before:text-slate-400"><b>onSnapshot</b>으로 실시간 갱신</li>
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">텍스트·이미지 미리보기</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-2">✏️ 글 작성</h3>
            <ul className="list-disc list-inside px-9 space-y-1">
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">Cloudinary <b>Unsigned preset</b> 업로드 → 다운로드 URL 수신</li>
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">Firestore에 글 문서 생성 시 imageUrl 저장</li>
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">작성 완료 즉시 피드에 반영</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-2">💬 상세 & 댓글</h3>
            <ul className="list-disc list-inside px-9 space-y-1">
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">게시글 본문/이미지 렌더링</li>
              <li className="before:content-['•'] before:mr-2 before:text-slate-400">댓글은 Firestore <code>arrayUnion</code> 구조로 저장 및 실시간 반영</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ====== 데이터 구조 ====== */}
      <h1 className="mb-3 text-xl font-semibold">✔️ Firestore 데이터 구조</h1>
      <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
        <div className="px-6 py-6 text-[14px]">
          <pre className="bg-white/80 p-4 rounded-xl overflow-x-auto"><code>{`posts: [
  {
    userName: "나",
    content: "첫 글입니다 👋",
    imageUrl: "https://res.cloudinary.com/...",
    createdAt: Timestamp,
    comments: [
      {
        id: "169123456",
        userName: "익명",
        text: "좋아요!",
        createdAt: "2025.09.29 12:34"
      }
    ]
  }
]`}</code></pre>
        </div>
      </div>

      {/* ====== 핵심 포인트 ====== */}
      <h1 className="mb-3 text-xl font-semibold">✔️ 핵심 구현 포인트</h1>
      <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
        <ul className="px-6 py-8 space-y-3 text-gray-800 text-[16px]">
          <li className="before:content-['•'] before:mr-2 before:text-slate-400">
            <b>실시간 동기화</b>: onSnapshot으로 글/댓글 변경 사항을 즉시 UI에 반영
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-slate-400">
            <b>이미지 파이프라인</b>: Cloudinary 업로드 → URL 수신 → Firestore 저장을 비동기로 안정화
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-slate-400">
            <b>라우팅 전략</b>: expo-router 파일 기반 라우팅(Feed / Write / Account)으로 가독성과 유지보수성 확보
          </li>
          <li className="before:content-['•'] before:mr-2 before:text-slate-400">
            <b>상태 분기</b>: 로그인 상태(loading/null/user)에 따른 화면 전환 및 안전한 리다이렉트 처리
          </li>
        </ul>
      </div>


      {/* ====== 탭 구성 ====== */}
      <h1 className="mb-3 text-xl font-semibold">✔️ 탭 구성</h1>
      <div className="mb-10 border border-skillBorder rounded-2xl shadow-md bg-[#fdfcff]">
        <ul className="px-6 py-8 space-y-3 text-gray-800 text-[16px]">
          <li className="before:content-['•'] before:mr-2 before:text-slate-400"><b>Feed</b> — 글 조회, 상세, 댓글</li>
          <li className="before:content-['•'] before:mr-2 before:text-slate-400"><b>Write</b> — 글 작성, 이미지 첨부</li>
          <li className="before:content-['•'] before:mr-2 before:text-slate-400"><b>Account</b> — 로그인 / 회원가입</li>
        </ul>
      </div>

    </section>
  );
}

export default CommunityDetail;
