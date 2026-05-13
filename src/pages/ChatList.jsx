import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BottomNav from '../components/BottomNav';
import PageHeader from '../components/PageHeader';

const chats = [
  { id: 1, name: '김민수', msg: '안녕하세요. 저는 김민수에요. 팝송 좋아하세요?', time: '02:00', unread: 1, avatar: null },
  { id: 2, name: '박지수', msg: '좋은 음악 추천해주실 수 있나요?', time: '어제', unread: 0, avatar: null },
  { id: 3, name: '이준호', msg: '잔나비 좋아하시는군요!', time: '월', unread: 0, avatar: null },
];

const Avatar = ({ name, size = 46 }) => (
  <div style={{
    width: size, height: size, borderRadius: '50%',
    background: '#ffeeed', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: size * 0.35, fontWeight: 700, color: '#ff625d', flexShrink: 0,
  }}>
    {name[0]}
  </div>
);

export default function ChatList() {
  const navigate = useNavigate();
  return (
    <div className="screen" style={{ minHeight: 844 }}>
      <StatusBar />
      <PageHeader title="채팅" />

      <div style={{ position: 'absolute', top: 112, left: 0, right: 0, bottom: 107, overflowY: 'auto' }}>
        {chats.map(({ id, name, msg, time, unread }) => (
          <button
            key={id}
            style={{
              width: '100%', padding: '14px 20px',
              display: 'flex', alignItems: 'center', gap: 14,
              background: 'none', border: 'none', cursor: 'pointer',
              borderBottom: '1px solid #f0f0f0', textAlign: 'left',
            }}
            onClick={() => navigate(`/chat/${id}`)}
          >
            <Avatar name={name} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#000' }}>{name}</span>
                <span style={{ fontSize: 11, color: '#aaa' }}>{time}</span>
              </div>
              <p style={{ fontSize: 13, color: '#888', letterSpacing: -0.26, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {msg}
              </p>
            </div>
            {unread > 0 && (
              <div style={{
                width: 18, height: 18, borderRadius: '50%', background: '#ff625d',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0,
              }}>{unread}</div>
            )}
          </button>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
