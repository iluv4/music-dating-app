import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 2L14 14M14 2L2 14" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const genres = [
  { id: 'ballad', label: 'BALLAD', color: '#222', bg: '#555' },
  { id: 'hiphop', label: 'HIPHOP', color: '#222', bg: '#777' },
  { id: 'pop', label: 'POP', color: '#222', bg: '#444' },
  { id: 'indie', label: 'INDIE', color: '#222', bg: '#888' },
  { id: 'rock', label: 'ROCK', color: '#222', bg: '#333' },
  { id: 'jazz', label: 'JAZZ', color: '#222', bg: '#666' },
];

export default function GenreSelect() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const toggle = (id) => setSelected(prev => prev === id ? null : id);

  return (
    <div className="screen" style={{ minHeight: 844 }}>
      <StatusBar />

      {/* Close */}
      <button
        style={{ position: 'absolute', top: 68, right: 20, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}
        onClick={() => navigate(-1)}
      >
        <CloseIcon />
      </button>

      {/* Heading */}
      <div style={{ position: 'absolute', top: 93, left: 25 }}>
        <p className="onboarding-heading">어떤 <span className="accent">장르</span>를</p>
        <p className="onboarding-heading">좋아하세요?</p>
      </div>

      <p style={{ position: 'absolute', top: 169, left: 25, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: '23px', letterSpacing: -0.32 }}>
        같은 장르를 선택한 상대방을 찾아볼게요.
      </p>

      {/* Genre grid */}
      <div style={{
        position: 'absolute', top: 212, left: 25, right: 25,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
      }}>
        {genres.map(({ id, label, bg }) => (
          <button
            key={id}
            onClick={() => toggle(id)}
            style={{
              height: 150, borderRadius: '50%',
              background: bg,
              border: selected === id ? '3px solid #ff625d' : '3px solid transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.15s',
            }}
          >
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(0,0,0,0.18)',
            }} />
            <span style={{
              fontSize: 20, fontWeight: 600, color: '#fff', letterSpacing: -0.4,
              position: 'relative', zIndex: 1,
              textShadow: '0 1px 4px rgba(0,0,0,0.4)',
            }}>{label}</span>
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        className={`btn-primary${selected ? '' : ' btn-primary--disabled'}`}
        style={{ position: 'absolute', bottom: 62, left: 20 }}
        onClick={() => selected && navigate('/music-select')}
      >
        다음으로
      </button>

      <HomeIndicator />
    </div>
  );
}
