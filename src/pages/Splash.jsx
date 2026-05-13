import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate('/welcome'), 2000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="screen" style={{ background: '#fff', minHeight: 844 }}>
      <StatusBar />
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
      }}>
        <div style={{
          width: 72, height: 72,
          background: 'var(--color-primary)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 6C12.5 6 8 10.5 8 16C8 21.5 12.5 26 18 26C23.5 26 28 21.5 28 16C28 10.5 23.5 6 18 6Z" fill="white" fillOpacity="0.3"/>
            <path d="M15 12V22L24 17L15 12Z" fill="white"/>
          </svg>
        </div>
        <p style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: -0.5 }}>
          멋사 뮤직 데이팅
        </p>
      </div>
      <HomeIndicator />
    </div>
  );
}
