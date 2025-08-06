import React, { useState } from 'react';
import clsx from 'clsx';
import zipgoaiMain from '../images/zipgoai.png'
import gongchaGnb from '../images/gongcha_gnb.png'
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
     const buttonClass = clsx(
            'px-4 py-2 rounded-full bg-pointColor border border-pointColor transition-all text-[18px]',
            'text-white',
            'hover:text-pointColor hover:bg-background'
          );

    const tabs = [
        { id: 'inquiry', label: '1:1 문의하기' },
        { id: 'history', label: '내 문의내역' },
        { id: 'coupon', label: '쿠폰함' },
        { id: 'login', label: '로그인 UI' },
        { id: 'mobile', label: '모바일 상세페이지' },
        ];


    const [openIndex, setOpenIndex] = useState(null);
    const [activeTab, setActiveTab] = useState('inquiry');
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className='text-[20px]'>
            <div className='mb-10'>
                <img src={zipgoaiMain} alt='공차 메인 이미지' />
            </div>

            <h1 className='mb-3'>✔️ 주요 정보 및 기간</h1>
            <div className='border border-skillBorder rounded-2xl shadow-lg mb-10'>
                <div className='px-6 py-8'>
                    <p className='mb-5 text-[22px]'>📆 <strong>프로젝트 기간</strong> : 2025.06.02 ~ 2025.07.25</p>
                    <div className='mb-5'>
                        <h2>🎯 회사명 : 트랜스파머</h2>
                    </div>
                      <div>
                        <h2>🎯 참여 형태 : 일경험형 인턴십 (2개월)</h2>
                    </div>
                </div>
            </div>

            <h1 className='mb-3'>✔️ 담당 업무</h1>
            <div className='border border-skillBorder rounded-2xl shadow-lg mb-10'>
                <div className='px-6 py-8 text-textColor'>
                    <div>
                    <div className='mb-5 text-lg '>
                        <h2 className='mb-1'>🧩 신규 페이지 구축</h2>
                        <ul className='px-10'>
                        <li>
                            • ‘1:1 문의하기’ 및 ‘문의내역’ UI/기능 전체 구현
                            <ul className='px-4 mb-2'>
                            <li>– 이메일 입력, 문의 유형 선택, 유효성 검사 포함</li>
                            <li>– 리스트 구성 + 페이지네이션 구현</li>
                            </ul>
                        </li>
                        <li>
                            • ‘쿠폰함’ 팝업 및 사용 처리 로직 구현
                            <ul className='px-4'>
                            <li>– 프리미엄 여부에 따른 버튼 상태 분기</li>
                            <li>– 유효기간 표시 및 사용자 피드백 메시지 처리</li>
                            </ul>
                        </li>
                        </ul>
                    </div>

                    <div className='text-lg'>
                        <h2 className='mb-1'>🛠 기존 기능 개선 및 추가</h2>
                        <ul className='px-10'>
                        <li>
                            • 로그인 페이지 UI 개선
                            <ul className='px-4 mb-2'>
                            <li>– 소셜 로그인 버튼 정렬 및 에러 메시지 위치 조정</li>
                            </ul>
                        </li>
                        <li>
                            • 첨부파일 박스 내 문서 연결 기능 추가
                            <ul className='px-4'>
                            <li>– 각 항목 상단에 미리보기 링크 삽입</li>
                            <li>– 데이터 없을 시 display: none 처리 로직 적용</li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

            <h1 className='mb-3'>사용 기술 및 협업 환경</h1>
            <div className='border border-skillBorder rounded-2xl shadow-lg mb-10'>
                <div className='px-6 py-8 text-textColor'>
                    <div className='font-bold'>
                        <p className='mb-5'>Frontend: HTML5, CSS3, React, TypeScript</p>
                        <p className='mb-5'>Styling: styled-components</p>
                        <p className='mb-5'>Version Control: Git</p>
                        <p className='mb-5'>Communication: Google Chat</p>
                        <p>디자인 협업: Figma 기반 전달 및 작업</p>
                    </div>
                </div>
            </div>

            <h1 className='mb-3'>결과물</h1>
            <div className='border border-skillBorder rounded-2xl shadow-lg mb-10'>
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
                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
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
                                <ul className='px-4 list-disc list-inside text-base leading-relaxed'>
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

            <h1 className='mb-3'>✔️ 트러블 슈팅</h1>
            <div className='px-6 py-8 border border-skillBorder rounded-2xl shadow-lg'>
                <div className='mb-5'>
                    <h2 className='mb-2'>💥 문제</h2>
                    <p>하나의 컴포넌트(MenuDrink.jsx)에 사이트 내 전체 메뉴를 구현하여 2,000줄이 넘는 코드가 만들어지면서,<br/>
                    가독성 저하와 유지보수 어려움과 같은 문제가 발생했습니다.</p>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-2'>🤔 원인 및 고민</h2>
                    <p>메뉴 종류가 계속 추가되면서 하나의 파일로 관리하기에는 규모가 너무 커지고,<br/>
                    컴포넌트 분리 기준도 명확하지 않아 효과적인 리팩토링 방향을 정하는 데 어려움을 겪었습니다.</p>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-2'>💡 해결 방법</h2>
                    <p className='mb-5'>GNB(Global Navigation Bar)의 메뉴 구조에 맞춰 다음과 같이 총 8가지 카테고리로 나누어 컴포넌트를 분리했습니다:</p>
                    <img src={gongchaGnb} alt="공차 gnb 메뉴" className='mb-5' />
                    <ul className='text-[18px]'>
                        <li className='mb-2'>- 신메뉴 (NewMenu)</li>
                        <li className='mb-2'>- 베스트셀러 (BestSellerMenu)</li>
                        <li className='mb-2'>- 밀크티 (MilkTeaMenu)</li>
                        <li className='mb-2'>- 스무디 (SmoothieMenu)</li>
                        <li className='mb-2'>- 오리지널티 (OriginalTeaMenu)</li>
                        <li className='mb-2'>- 푸룻티&모어 (FruitTeaMenu)</li>
                        <li className='mb-2'>- RTD (RTDMenu)</li>
                        <li className='mb-2'>- 커피 (CoffeeMenu)</li>
                    </ul>
                    <p>또한, 각 메뉴별 데이터를 별도 .js 파일로 분리해 menuData 디렉토리에서 관리하도록 했습니다.</p>
                </div>

                <div className='mb-5'>
                    <h2>파일 구조</h2>
                    <ul className='italic text-[18px]'>
                        <li>src</li>
                        <ul className='px-3'>
                            <li className='text-green-700 font-bold'>├── components</li>
                                <ul className='px-10 mb-2'>
                                    <li>── MenuDrink.jsx</li>
                                </ul>
                            <li className='text-green-700 font-bold'>└── catergory</li>
                            <ul className='px-10 mb-2'>
                                <li>── BestSellerMenu.jsx</li>
                                <li>── NewMenu.jsx</li>
                                <li>── MillkTeaMenu.jsx</li>
                                <li>── SmoothieMenu.jsx</li>
                                <li>── OriginalTeaMenu.jsx</li>
                                <li>── FruitTeaMenu.jsx</li>
                                <li>── RtdMenu.jsx</li>
                                <li>── CoffeeMenu.jsx</li>
                            </ul>
                            <li className='text-green-700 font-bold'>└── menuData</li>
                            <ul className='px-10 mb-2'>
                                <li>── bestSellerData.js</li>
                                <li>── newMenuData.js</li>
                                <li>└──  ...</li>
                            </ul>
                        </ul>
                    </ul>
                </div>
                <div className='mb-10'>
                    <h2 className='mb-2'>✅ 개선 효과</h2>
                    <ul className='text-[18px]'>
                        <li>1. 메뉴 카테고리 기준으로 명확하게 나뉘어 코드 구조와 UI 일치</li>
                        <li>2.  가독성, 유지보수성 대폭 향상</li>
                        <li>3.  신규 메뉴 추가 및 수정 시 해당 컴포넌트와 데이터만 다루면 되어 확장성 확보</li>
                    </ul>
                </div>
                <div className='mb-5'>
                    <h2 className='mb-5'>📜 기타 문서</h2>
                    <a href='https://github.com/sohyun32253/Gongcha' className={buttonClass}>git hub 바로가기 –</a>
                </div>
                
            </div>
        </section>
    );
}

export default ZipgoaiDetail;
