import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="screen" style={{ minHeight: 844 }}>
      <StatusBar />

      {/* Welcome text */}
      <p style={{
        position: 'absolute', top: 192, left: '50%', transform: 'translateX(-50%)',
        fontSize: 28, fontWeight: 700, color: 'var(--color-primary)',
        lineHeight: 1.35, whiteSpace: 'nowrap',
      }}>Welcome!</p>

      <p style={{
        position: 'absolute', top: 236, left: '50%', transform: 'translateX(-50%)',
        fontSize: 17, fontWeight: 590, color: '#000',
        lineHeight: 1.35, whiteSpace: 'nowrap',
      }}>새로운 사랑을 만날 준비 되셨나요?</p>

      {/* Image placeholder */}
      <div style={{
        position: 'absolute', top: 324, left: '50%', transform: 'translateX(-50%)',
        width: 219, height: 299,
        background: '#eee', borderRadius: 4,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect width="60" height="60" fill="#ddd" rx="4"/>
          <line x1="0" y1="0" x2="60" y2="60" stroke="#ccc" strokeWidth="1.5"/>
          <line x1="60" y1="0" x2="0" y2="60" stroke="#ccc" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* CTA Button */}
      <button
        className="btn-primary"
        style={{ position: 'absolute', bottom: 62, left: 20 }}
        onClick={() => navigate('/terms')}
      >
        시작하기
      </button>

      <HomeIndicator />
    </div>
  );
}
