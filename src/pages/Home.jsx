import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BottomNav from '../components/BottomNav';

const BellIcon = () => (
  <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
    <path d="M11 1C11 1 4 4 4 12V18H18V12C18 4 11 1 11 1Z" fill="#ff625d"/>
    <rect x="4" y="17" width="14" height="2" rx="1" fill="#ff625d"/>
    <circle cx="11" cy="22" r="2" fill="#ff625d"/>
    <circle cx="16" cy="3" r="3" fill="#ff625d" stroke="white" strokeWidth="1.5"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6.5" fill="#ff625d"/>
    <line x1="7" y1="3.5" x2="7" y2="10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="3.5" y1="7" x2="10.5" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const characterImg = "https://www.figma.com/api/mcp/asset/3e7d7240-28af-445e-a886-2561806b66c5";
const albumImg = "https://www.figma.com/api/mcp/asset/f474f510-cd6c-49f1-8fef-51baa8d4d9dc";

export default function Home() {
  const navigate = useNavigate();
  const [matched, setMatched] = useState(true);

  return (
    <div className="screen" style={{ minHeight: 879, background: '#fff' }}>
      <StatusBar />

      {/* Header */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 132,
        background: '#fff', boxShadow: '0 4px 2px rgba(0,0,0,0.05)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '70px 20px 16px',
        zIndex: 5,
      }}>
        {/* Logo placeholder */}
        <div style={{ width: 104, height: 40, background: '#eee', borderRadius: 2 }} />
        {/* Bell */}
        <button style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <BellIcon />
        </button>
      </div>

      {/* Matching card */}
      <div style={{
        position: 'absolute', top: 187, left: '50%', transform: 'translateX(-50%)',
        width: 283, background: '#f9f9f9',
        border: '1px solid #e2e2e2', borderRadius: 15,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        paddingBottom: 24,
        overflow: 'visible',
      }}>
        {/* Character */}
        <img src={characterImg} alt="캐릭터" style={{ width: 258, height: 217, objectFit: 'cover', marginTop: -10 }} />

        <p style={{ fontSize: 12, color: '#d6d6d6', fontWeight: 700, marginBottom: 16 }}>01:00:00</p>

        {matched ? (
          <>
            <p style={{ fontSize: 16, textAlign: 'center', lineHeight: 1.35, letterSpacing: -0.32, marginBottom: 20 }}>
              <strong style={{ color: '#ff625d' }}>인디</strong>를 좋아하는 OO 님과<br/>
              <strong>매칭이 성사</strong>되었어요!
            </p>
            {/* Accept */}
            <button
              style={{
                width: 251, height: 45, background: '#ff625d', borderRadius: 12,
                fontSize: 14, fontWeight: 600, color: '#fff', letterSpacing: -0.28,
                border: 'none', cursor: 'pointer', marginBottom: 8,
              }}
              onClick={() => navigate('/chat/1')}
            >
              수락하기
            </button>
            {/* Re-match */}
            <button
              style={{
                width: 251, height: 45, background: '#ffeeed', borderRadius: 12,
                fontSize: 14, fontWeight: 600, color: '#ff625d', letterSpacing: -0.28,
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
              onClick={() => setMatched(false)}
            >
              <PlusIcon /> 매칭 한 번 더 하기
            </button>
          </>
        ) : (
          <>
            <p style={{ fontSize: 16, textAlign: 'center', lineHeight: 1.35, letterSpacing: -0.32, color: '#888', marginBottom: 16 }}>
              매칭 상대를 찾고 있어요…
            </p>
            <button
              style={{
                width: 251, height: 45, background: '#ffeeed', borderRadius: 12,
                fontSize: 14, fontWeight: 600, color: '#ff625d', letterSpacing: -0.28,
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
              onClick={() => setMatched(true)}
            >
              <PlusIcon /> 매칭 한 번 더 하기
            </button>
          </>
        )}
      </div>

      {/* Divider */}
      <div style={{ position: 'absolute', top: 632, left: 0, right: 0, height: 8, background: '#f3f3f3' }} />

      {/* Now playing gradient overlay */}
      <div style={{
        position: 'absolute', top: 640, left: 0, right: 0, bottom: 107,
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, white 50%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Now playing hint */}
      <div style={{ position: 'absolute', top: 648, left: 25, right: 25 }}>
        <p style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
          <strong>어떤 노래</strong>를 선택하실지 <strong>고민</strong>이신가요?
        </p>
        <p style={{ fontSize: 14, color: '#bfbfbf', marginBottom: 12, letterSpacing: -0.28 }}>
          취향이 같으면 대화도 쉬워져요! 노래를 둘러보세요.
        </p>
        <button
          style={{ position: 'absolute', top: 0, right: 0, display: 'flex', alignItems: 'center', gap: 4 }}
          onClick={() => navigate('/music-select')}
        >
          <span style={{ fontSize: 12, color: '#bdbdbd', letterSpacing: -0.24 }}>더보기</span>
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none"><path d="M1 1L4 4.5L1 8" stroke="#bdbdbd" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {/* Song row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 28 }}>
          <img src={albumImg} alt="album" style={{ width: 50, height: 50, borderRadius: 4, objectFit: 'cover' }} />
          <div>
            <p style={{ fontSize: 16, fontWeight: 600 }}>HOW SWEET</p>
            <p style={{ fontSize: 12, color: '#9f9f9f', letterSpacing: -0.24 }}>NEWJEANS</p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
