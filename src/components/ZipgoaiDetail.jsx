import React, { useState } from 'react';
import clsx from 'clsx';
import zipgoaiMain from '../images/zipgoai.png'
import inquiry01 from '../images/inquiry_01.png'
import inquiry02 from '../images/inquiry_02.png'
import inquiry03 from '../images/inquiry_03.png'
import inquiry04 from '../images/inquiry_04.png'
import inquiry from '../images/inquiry.mp4';
import history from '../images/history.mp4'
import history02 from '../images/history_02.png'
import history03 from '../images/history_03.png'
import couponBox from '../images/coupon_box.mp4'
import couponBox01 from '../images/coupon_box01.png'
import couponBox02 from '../images/coupon_box02.png'
import couponBox03 from '../images/coupon_box03.png'
import couponBox04 from '../images/coupon_box04.png'
import couponBox05 from '../images/coupon_box05.png'
import login from '../images/login.mp4'
import login01 from '../images/login_01.png'
import login02 from '../images/login_02.png'
import popup from '../images/popup.png'

function ZipgoaiDetail() {
    const tabs = [
        { id: 'inquiry', label: '1:1 문의하기' },
        { id: 'history', label: '내 문의내역' },
        { id: 'coupon', label: '쿠폰함' },
        { id: 'login', label: '로그인 UI' },
        { id: 'mobile', label: '모바일 상세페이지' },
        ];

    const [activeTab, setActiveTab] = useState('inquiry');

    return (
        <section className='text-[20px]'>
            <div className='mb-12'>
                <img src={zipgoaiMain} alt='공차 메인 이미지' />
            </div>

            <h1 className='mb-3'>📌 주요 정보 및 기간</h1>
            <div className='border border-skillBorder rounded-2xl shadow-lg mb-12 bg-[#f9f9f9]'>
                <div className='px-6 py-8'>
                    <p className='mb-5 text-lg'>📆 <strong>프로젝트 기간</strong> : 2025.06.02 ~ 2025.07.25</p>
                    <div className='mb-5'>
                        <p className='text-lg'>🏢 <strong>회사명</strong> : 트랜스파머</p>
                    </div>
                      <div>
                        <p className='text-lg'>👥 <strong>참여 형태</strong> : 일경험형 인턴십 (2개월)</p>
                    </div>
                </div>
            </div>

            <h1 className='mb-3'>✔️ 담당 업무</h1>
            <div className='border border-skillBorder rounded-2xl shadow-lg mb-12 bg-[#f9f9f9]'>
                <div className='px-6 py-8 text-textColor'>
                    <div>
                        <div className="mb-10">
                        <h2 className="text-xl font-semibold mb-4">🧩 신규 페이지 구축</h2>

                            <div className="mb-6">
                                <h3 className="font-medium text-lg text-green-700 mb-1">🟢 ‘1:1 문의하기’ 및 ‘문의내역’ UI/기능 전체 구현</h3>
                                <ul className="list-disc list-inside text-base text-gray-800 ml-2">
                                    <li>이메일 입력, 문의 유형 선택, 유효성 검사 포함</li>
                                    <li>리스트 구성 + 페이지네이션 구현</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-lg text-green-700 mb-1">🟢 ‘쿠폰함’ 팝업 및 사용 처리 로직 구현</h3>
                                <ul className="list-disc list-inside text-base text-gray-800 ml-2">
                                    <li>프리미엄 여부에 따른 버튼 상태 분기</li>
                                    <li>유효기간 표시 및 사용자 피드백 메시지 처리</li>
                                </ul>
                            </div>
                            </div>

                            <div>
                            <h2 className="text-xl font-semibold mb-4">🛠 기존 기능 개선 및 추가</h2>
                            <div className="mb-6">
                                <h3 className="font-medium text-lg text-gray-700 mb-1">🔧 로그인 페이지 UI 개선</h3>
                                <ul className="list-disc list-inside text-base text-gray-800 ml-2">
                                    <li>소셜 로그인 버튼 정렬 및 에러 메시지 위치 조정</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-medium text-lg text-gray-700 mb-1">📎 첨부파일 박스 내 문서 연결 기능 추가</h3>
                                <ul className="list-disc list-inside text-base text-gray-800 ml-2">
                                    <li>각 항목 상단에 미리보기 링크 삽입</li>
                                    <li>데이터 없을 시 <code className="bg-gray-100 px-1 rounded text-[13px]">display: none</code> 처리 로직 적용</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <h1 className="mb-3 font-semibold">🛠 사용 기술 및 협업 환경</h1>
            <div className="border border-skillBorder rounded-2xl shadow-lg mb-12 bg-[#f9f9f9]">
                <div className="px-6 py-8 text-sm text-gray-800 space-y-4">
                    <div className="flex items-center">
                        <span className="text-lg mr-2">💻</span>
                        <p><strong>Frontend :</strong> HTML5, CSS3, React, TypeScript</p>
                    </div>

                    <div className="flex items-center">
                        <span className="text-lg mr-2">🎨</span>
                        <p><strong>Styling :</strong> styled-components</p>
                    </div>

                    <div className="flex items-center">
                        <span className="text-lg mr-2">🔀</span>
                        <p><strong>Version Control :</strong> Git</p>
                    </div>

                    <div className="flex items-center">
                        <span className="text-lg mr-2">💬</span>
                        <p><strong>Communication :</strong> Google Chat</p>
                    </div>

                    <div className="flex items-center">
                        <span className="text-lg mr-2">🧑‍🎨</span>
                        <p><strong>디자인 협업 :</strong> Figma 기반 전달 및 작업</p>
                    </div>
                </div>
            </div>

            <h1 className='mb-3'>🖥️ 결과물</h1>
            <div className='border border-skillBorder rounded-2xl shadow-lg mb-12 bg-[#f9f9f9]'>
                <div className='px-6 py-8 text-textColor'>
                    <div>
                        <div className="md:flex gap-2 border-b mb-10">
                        {tabs.map((tab) => (
                            <button
                            key={tab.id}
                            className={clsx(
                                'px-4 py-2 rounded-t-lg font-semibold transition-all mb-4 md:mb-0 md: mx-2',
                                activeTab === tab.id
                                ? 'bg-subBackground text-white'
                                : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                            )}
                            onClick={() => setActiveTab(tab.id)}
                            >
                            {tab.label}
                            </button>
                        ))}
                        </div>

                        {activeTab === 'inquiry' && (
                            
                        <div id='inquiry'>
                            <div className="inline-block bg-gray-100 text-gray-800 font-semibold px-4 py-2 rounded border border-gray-300">
                                마이페이지 - 1:1 문의하기
                            </div>

                            <p className="text-sm text-gray-500 mt-2 mb-4">
                                ※ 해당 기능은 백엔드 API와 연동하여 실제 서버와 데이터 송/수신이 이루어지도록 구현되었습니다.
                            </p>

                            <div className="mb-10">
                                <p className="mb-2 font-bold">① 이메일, 문의 유형, 내용 입력 기반의 폼 구성</p>
                                <ul className="px-4 list-disc list-inside mb-2 text-base leading-relaxed">
                                    <li>• 사용자 이메일, 문의 유형 선택, 내용 입력 필드를 포함한 폼 전체 UI/로직 구현</li>
                                    <li>• 문의 리스트 + 페이지네이션 처리로 문의내역 확인 가능</li>
                                </ul>
                                <img src={inquiry01} alt="1:1 문의하기 폼 구성 화면" />
                            </div>

                            <div className='mb-10'>
                                <p className="mb-2 font-bold">② 각 항목 미입력 시 유효성 검사 및 경고문구 출력</p>
                                <ul className="px-4 list-disc list-inside mb-2 text-base leading-relaxed">
                                    <li>• 실시간으로 입력값 확인 및 오류 메시지 표시</li>
                                    <li>• 각 필드에 대한 정확한 피드백 제공으로 UX 개선</li>
                                </ul>
                                <img src={inquiry02} alt="유효성 검사 및 경고 메시지 출력 화면" />
                            </div>

                            <div className='mb-10'>
                                <p className="mb-2 font-bold">③ 이메일 필드 내 '직접 입력' 선택 시 입력 필드 추가 노출</p>
                                <ul className="px-4 list-disc list-inside mb-2 text-base leading-relaxed">
                                    <li>• 일반 도메인 선택 외에도 직접 도메인 입력 가능하도록 분기 처리</li>
                                    <li>• UX를 고려한 상황별 인터랙션 구현</li>
                                </ul>
                                <img src={inquiry03} alt="직접 입력 필드 노출 화면" />
                            </div>

                            <div className='mb-10'>
                                <p className="mb-2 font-bold">④ 모든 필드 작성 시 문의하기 버튼 활성화</p>
                                <ul className="px-4 list-disc list-inside mb-2 text-base leading-relaxed">
                                    <li>• 버튼 비활성화/활성화 상태를 실시간으로 제어</li>
                                    <li>• 불완전한 제출 방지 로직 포함</li>
                                </ul>
                                <img src={inquiry04} alt="버튼 활성화 상태 화면" />
                            </div>

                            <div className='mb-10'>
                                <p className="mb-2 font-bold">⑤ 실제 서비스 적용 영상</p>
                                <p className="px-4 mb-2">• 실제 서비스 환경에서의 1:1 문의 흐름 구현 영상</p>
                                <video controls width="100%">
                                    <source src={inquiry} type="video/mp4" />
                                    브라우저가 video 태그를 지원하지 않습니다.
                                </video>
                            </div>
                        </div>
                        )}
                        {activeTab === 'history' && (
                        <div id='history'>
                            <div className="inline-block bg-gray-100 text-gray-800 font-semibold px-4 py-2 rounded border border-gray-300">
                                마이페이지 - 내 문의내역
                            </div>
                            <p className="text-sm text-gray-500 mt-2 mb-4">
                                ※ 해당 기능은 백엔드 API와 연동하여 실제 서버와 데이터 송/수신이 이루어지도록 구현되었습니다.
                            </p>
                            <div className='mb-10'>
                            <p className='mb-2 font-bold'>① 답변 완료/대기 상태에 따른 문의내역 리스트 구성</p>
                            <ul className='px-4 list-disc list-inside mb-2 text-base leading-relaxed'>
                                <li>• 상태값에 따른 버튼 컬러 및 텍스트 분기 처리</li>
                                <li>• 리스트와 페이지네이션을 통한 문의 내역 조회</li>
                            </ul>
                            <img src={history02} alt="문의내역 리스트 화면" />
                            </div>

                            <div className='mb-10'>
                            <p className='mb-2 font-bold'>② 문의 제목 클릭 시 상세 보기 UI 구성</p>
                            <ul className='px-4 list-disc list-inside mb-2 text-base leading-relaxed'>
                                <li>• 상세 내용 + 답변 내용을 함께 확인 가능한 구조</li>
                                <li>• 토글 형태의 인터랙션으로 열림/닫힘 처리</li>
                            </ul>
                            <img src={history03} alt="문의 상세보기 화면" />
                            </div>

                            <div className='mb-10'>
                            <p className='mb-2 font-bold'>③ 실제 서비스 적용 영상</p>
                            <p className="px-4 mb-2">• 실제 서비스 환경에서의 내 문의내역 흐름 구현 영상</p>
                            <video controls width="100%">
                                <source src={history} type="video/mp4" />
                                브라우저가 video 태그를 지원하지 않습니다.
                            </video>
                            </div>
                        </div>
                        )}
                        {activeTab === 'coupon' && (
                        <div id='coupon'>
                            <div className="inline-block bg-gray-100 text-gray-800 font-semibold px-4 py-2 rounded border border-gray-300">
                                마이페이지 - 쿠폰함
                            </div>
                            <div className="text-sm text-gray-500 mt-2 mb-4">
                            ※ 해당 페이지는 ‘프리미엄 사용자 기준’으로 구현되었습니다.<br/> Basic 및 Standard 등급에 대한 화면 분기 로직은 설계 및 구조화는 완료되었으나, 인턴 기간 내 구현 일정상 프리미엄 중심으로 우선 개발하였습니다.
                            </div>

                            <div className='mb-10'>
                            <p className='mb-2 font-bold'>① 사용자 등급에 따른 쿠폰 구성 및 상태 분기 처리</p>
                            <ul className='px-4 list-disc list-inside mb-2 text-base leading-relaxed'>
                                <li>• 사용 가능한 쿠폰과 사용 완료/만료 쿠폰을 시각적으로 구분</li>
                                <li>• 프리미엄 사용자에 한해, 쿠폰 사용 버튼 및 팝업 UI 구현</li>
                            </ul>
                            <img src={couponBox01} alt="쿠폰 리스트 화면" />
                            </div>

                            <div className='mb-10'>
                            <p className='mb-2 font-bold'>② 쿠폰 사용 시 팝업 노출 및 안내 문구 처리</p>
                            <ul className='px-4 list-disc list-inside mb-2 text-base leading-relaxed'>
                                <li>• 쿠폰 상태(사용 가능/만료/기간 종료 등)에 따른 메시지 분기</li>
                                <li>• 사용자 경험을 고려한 상세 안내 처리</li>
                            </ul>
                            <img src={couponBox02} alt="쿠폰 팝업 예시 1" />
                            <img src={couponBox03} alt="쿠폰 팝업 예시 2" />
                            <img src={couponBox04} alt="쿠폰 팝업 예시 3" />
                            </div>

                            <div className='mb-10'>
                            <p className='mb-2 font-bold'>③ 사용 완료 / 만료 상태 로직 구현</p>
                            <ul className='px-4 list-disc list-inside mb-2 text-base leading-relaxed'>
                                <li>• 쿠폰 비활성화 UI 적용</li>
                            </ul>
                            <img src={couponBox05} alt="만료 쿠폰 상태 화면" />
                            </div>

                            <div className='mb-10'>
                            <p className='mb-2 font-bold'>④ 실제 서비스 적용 영상</p>
                            <p className="px-4 mb-2 text-base">• 쿠폰 사용 흐름이 포함된 실 서비스 시연 영상</p>
                            <video controls width="100%">
                                <source src={couponBox} type="video/mp4" />
                                브라우저가 video 태그를 지원하지 않습니다.
                            </video>
                            </div>
                        </div>
                        )}
                        {activeTab === 'login' && (
                            
                        <div id='login'>
                            <div className="inline-block bg-gray-100 text-gray-800 font-semibold px-4 py-2 rounded border border-gray-300">
                                로그인 UI
                            </div>
                            <div className="text-sm text-gray-500 mt-2 mb-4">
                            ※ 해당 페이지는 디자인 수정 및 활성화 로직 추가 중심으로 구현되었습니다.
                            </div>
                            <div className='mb-10'>
                            <p className='mb-2 font-bold'>① 기존 UI 개선 및 버튼 활성화 로직 구현</p>
                            <ul className='px-4 list-disc list-inside mb-2 text-base leading-relaxed'>
                                <li>• 기존 UI 정렬 및 소셜 로그인 버튼 정비</li>
                                <li>• 모든 필드 작성 시 버튼 활성화 처리</li>
                            </ul>
                                <div className='mb-10 flex gap-4'>
                                    <p><img src={login01} alt="" /></p>
                                    <p><img src={login02} alt="" /></p>
                                </div>
                            </div>

                            <div className='mb-10'>
                            <p className='mb-2 font-bold'>② 실제 서비스 적용 영상</p>
                            <video controls width="100%">
                                <source src={login} type="video/mp4" />
                                브라우저가 video 태그를 지원하지 않습니다.
                            </video>
                            </div>
                        </div>
                        )}
                        {activeTab === 'mobile' && (
                        <div id='mobile'>
                            <div className="inline-block bg-gray-100 text-gray-800 font-semibold px-4 py-2 rounded border border-gray-300">
                                모바일 상세페이지
                            </div>
                            <div className="text-sm text-gray-500 mt-2 mb-4">
                            ※ 해당 기능은 단순한 UI 구현이 아닌, 실제 서버에서 전달되는 파일 구조와 링크 패턴을 직접 분석하고 해석한 결과물입니다.
                            <br/>특히, 각 항목별 링크 동작 여부와 비활성화 조건 파악 등 비정형 데이터를 기반으로 한 예외 처리에 많은 시간이 소요되었습니다.
                            
                            </div>
                            <div className='mb-10'>
                                <p className='mb-2 font-bold'>실제 백엔드 서버에서 전달된 파일 데이터 구조를 해석해, 팝업 이동 및 분기 처리 로직을 구현</p>
                                <ul className='px-4 list-disc list-inside text-base leading-relaxed mb-2'>
                                    <li>• 첨부파일 리스트는 사용자가 클릭 시 관련 문서가 팝업창 형식으로 열리도록 처리</li>
                                    <li>• 파일 존재 여부에 따라 버튼 비활성화 처리' 및 '링크 연결 예외 처리' 로직을 추가적으로 구현</li>
                                    <li>• 지도 아이콘 클릭 시 전체 지도 뷰로 확장되는 인터랙션 처리</li>
                                </ul>
                                <div className='flex gap-4'>
                                    <img src={popup} alt="첨부파일 미리보기 화면" />
                                </div>
                            </div>
                        </div>
                        )}         
                    </div>
                </div>
            </div>           

            <h1 className='mb-3'>🤔 느낀 점 및 트러블 슈팅</h1>
            <div className='px-6 py-8 border border-skillBorder rounded-2xl shadow-lg bg-[#f9f9f9]'>
                <div className='mb-5'>
                    <h2 className='mb-2'>느낀점</h2>
                    <p className='text-base'>첫 실무라 많이 긴장했지만, 실제 업무 환경에서 직접 부딪히며 문제를 해결해 나가는 과정을 통해 큰 성장을 경험할 수 있었습니다. <br />
                    특히 Git을 활용한 협업과 개발/운영 서버의 배포 과정을 직접 경험하며, 실무 전반의 개발 프로세스를 배울 수 있었던 점이 가장 인상 깊었습니다.</p>
                </div>
                <div className="mb-10">
                    <h2 className="text-xl font-semibold mb-4">💡 어려웠던 점</h2>
                    <div className="mb-6">
                        <h3 className="font-medium text-lg text-gray-800 mb-1">✅ 개발 서버 배포 과정</h3>
                        <p className="text-base text-gray-700 leading-loose ml-4 border-l-4 border-gray-200 pl-4">
                        개발 서버는 여러 팀원의 브랜치가 통합되는 공간이어서, 제가 작업한 브랜치가 메인 브랜치와 얼마나 차이가 나는지, <br />
                        앞서거나 뒤처진 부분이 무엇인지 비교하고 파악하는 방법을 익힐 수 있었습니다.
                        </p>
                    </div>

                    <div className='mb-10'>
                        <h3 className="font-medium text-lg text-gray-800 mb-1">✅ 운영 서버 배포 과정 & 트러블슈팅</h3>
                        <p className="text-base text-gray-700 ml-4 border-l-4 leading-loose border-gray-200 pl-4">
                        운영 서버는 메인 브랜치에 PR을 보내는 방식으로 관리되었기 때문에, 작은 충돌도 실제 서비스에 영향을 줄 수 있다는
                        긴장감을 가지고 작업했습니다. <br /><br />
                        실제로 한 번은 제가 올린 PR이 메인과 다른 부분이 있었는데, 자동 병합되면서 기존 기능이 일부 덮어씌워진 일이 있었습니다.
                        <br /> 당시 사수님과 디자이너님께 기존 기능과 디자인 흐름을 하나하나 확인하며 원인을 파악했고, <br /> 사수님이 이전 브랜치 작업 내용을 비교해보는
                        방법을 알려주셔서 문제를 해결할 수 있었습니다. <br /><br />
                        이 경험을 통해 <span className="font-medium text-black">충돌 해결뿐만 아니라, PR 전 변경 사항을 꼼꼼히 비교하고
                        배포 전 충분한 커뮤니케이션을 거치는 것의 중요성</span>을 체감했습니다.
                        </p>
                    </div>

                    <div className="bg-gray-100 border-l-4 border-blue-400 px-5 py-4 rounded-md text-sm text-gray-800 leading-relaxed shadow-sm">
                    <p className="mb-2 font-semibold text-blue-500">💬 협업 구조에 대한 제안 경험</p>
                    <p className='text-base leading-loose'>
                    운영 서버 배포 과정에서 개발자 각자가 병합 여부를 직접 결정해 PR을 보내는 구조를 경험하며, 
                    보다 체계적인 코드 리뷰 및 병합 관리 체계의 필요성을 느꼈습니다. <br />
                    프로젝트의 일관성과 안정성을 높이기 위해, PM 또는 리드 개발자가 전체 코드를 총괄하며 리뷰와 병합을 전담하는 방식을 
                    제안해 본 경험도 있습니다. <br />
                    당시에는 인력 구성상 도입되진 않았지만, 이 경험을 통해 역할 분담이 명확한 협업 구조가 
                    프로젝트의 효율성과 커뮤니케이션에 얼마나 긍정적인 영향을 미치는지를 체감할 수 있었습니다.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ZipgoaiDetail;
