import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';
import PageHeader from '../components/PageHeader';

const NoteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M8 15V5L17 3V13" stroke="#ff625d" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="6" cy="15" r="2.5" stroke="#ff625d" strokeWidth="1.5"/>
    <circle cx="15" cy="13" r="2.5" stroke="#ff625d" strokeWidth="1.5"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 2L14 14M14 2L2 14" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function MusicSelect() {
  const navigate = useNavigate();
  const [song, setSong] = useState('초록을거머쥔우리는 - 잔나비');
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState('');

  return (
    <div className="screen" style={{ minHeight: 844 }}>
      <StatusBar />

      {/* Close button */}
      <button
        style={{ position: 'absolute', top: 68, right: 20, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}
        onClick={() => navigate(-1)}
      >
        <CloseIcon />
      </button>

      {/* Heading */}
      <div style={{ position: 'absolute', top: 93, left: 25 }}>
        <p className="onboarding-heading">00님의 <span className="accent">음악</span>을</p>
        <p className="onboarding-heading">선택해주세요!</p>
      </div>

      <p style={{ position: 'absolute', top: 169, left: 25, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: '23px', letterSpacing: -0.32 }}>
        회원님을 소개할 수 있는 음악을 선택해주세요.
      </p>

      {/* Song input/display */}
      {editing ? (
        <div style={{ position: 'absolute', top: 235, left: 25, width: 340 }}>
          <input
            className="input-field"
            style={{ borderColor: '#ff625d', color: '#ff625d', paddingLeft: 50 }}
            autoFocus
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && input.trim()) {
                setSong(input.trim());
                setEditing(false);
              }
            }}
            placeholder="노래 제목 - 아티스트"
          />
          <div style={{ position: 'absolute', left: 19, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            <NoteIcon />
          </div>
        </div>
      ) : (
        <div
          style={{
            position: 'absolute', top: 235, left: 25, width: 340, height: 60,
            border: '2px solid #ff625d', borderRadius: 10,
            display: 'flex', alignItems: 'center', padding: '0 16px', gap: 12,
            cursor: 'pointer',
          }}
          onClick={() => { setInput(song); setEditing(true); }}
        >
          <NoteIcon />
          <span style={{ fontSize: 16, fontWeight: 500, color: '#ff625d', letterSpacing: -0.32 }}>{song}</span>
        </div>
      )}

      {/* Suggestion */}
      <p style={{
        position: 'absolute', top: 310, right: 25,
        fontSize: 12, color: '#c3c3c3', textDecoration: 'underline',
        letterSpacing: -0.24, cursor: 'pointer',
      }}>
        노래 선택이 어려우시다면?
      </p>

      {/* CTA */}
      <button
        className="btn-primary"
        style={{ position: 'absolute', bottom: 62, left: 20 }}
        onClick={() => navigate('/home')}
      >
        매칭하러 가기
      </button>

      <HomeIndicator />
    </div>
  );
}
