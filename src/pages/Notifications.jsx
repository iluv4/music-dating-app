import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';
import PageHeader from '../components/PageHeader';
import BottomNav from '../components/BottomNav';

const notiData = [
  { id: 1, type: '공지', title: '어쩌고저쩌고', date: '2026-05-07' },
  { id: 2, type: '매칭', title: '김민수님과 매칭이 성사되었어요', date: '2026-05-08' },
  { id: 3, type: '매칭', title: '박지수님이 메시지를 보냈어요', date: '2026-05-09' },
];

export default function Notifications() {
  return (
    <div className="screen" style={{ minHeight: 844 }}>
      <StatusBar />
      <PageHeader title="알림" />

      <div style={{ position: 'absolute', top: 112, left: 0, right: 0, bottom: 107, overflowY: 'auto' }}>
        {notiData.map(({ id, type, title, date }) => (
          <div key={id} style={{
            padding: '14px 28px',
            borderBottom: '1px solid #eee',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              {type === '공지' && (
                <span style={{
                  fontSize: 10, fontWeight: 600, padding: '4px 8px',
                  border: '0.9px solid #000', borderRadius: 90, color: '#000',
                  lineHeight: 1, whiteSpace: 'nowrap',
                }}>공지</span>
              )}
              <p style={{ fontSize: 16, fontWeight: 500, color: '#292929', letterSpacing: -0.4 }}>{title}</p>
            </div>
            <p style={{ fontSize: 12, color: '#949494', letterSpacing: -0.3 }}>{date}</p>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
