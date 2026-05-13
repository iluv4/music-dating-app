import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';
import PageHeader from '../components/PageHeader';

const SendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13" stroke="#ff625d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#ff625d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const initMessages = [
  { id: 1, from: 'other', text: '안녕하세요. 저는 김민수에요. \n팝송 좋아하세요?', time: '오후 02:00' },
  { id: 2, from: 'me', text: '안녕하세요! 민수님 반가워요 😊', time: '오후 02:05' },
];

const Avatar = ({ size = 38 }) => (
  <div style={{
    width: size, height: size, borderRadius: '50%',
    background: '#ffeeed', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 14, fontWeight: 700, color: '#ff625d', flexShrink: 0,
    alignSelf: 'flex-start',
  }}>김</div>
);

export default function ChatRoom() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messages, setMessages] = useState(initMessages);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages(p => [...p, { id: Date.now(), from: 'me', text: input.trim(), time: '오후 02:10' }]);
    setInput('');
  };

  return (
    <div className="screen" style={{ minHeight: 844 }}>
      <StatusBar />
      <PageHeader title="김민수" />

      {/* Date badge */}
      <div style={{
        position: 'absolute', top: 130, left: '50%', transform: 'translateX(-50%)',
        background: '#e8e9eb', borderRadius: 15, padding: '4px 16px',
        fontSize: 12, color: '#8a8a8a',
      }}>
        26. 01. 04 (일)
      </div>

      {/* Messages */}
      <div style={{
        position: 'absolute', top: 168, left: 0, right: 0, bottom: 92,
        overflowY: 'auto', padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12,
      }}>
        {messages.map(({ id, from, text, time }) => (
          <div key={id} style={{
            display: 'flex',
            flexDirection: from === 'me' ? 'row-reverse' : 'row',
            alignItems: 'flex-end', gap: 8,
          }}>
            {from === 'other' && <Avatar />}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: from === 'me' ? 'flex-end' : 'flex-start', maxWidth: '65%' }}>
              {from === 'other' && (
                <span style={{ fontSize: 14, fontWeight: 600, color: '#000', marginBottom: 4 }}>홍길동</span>
              )}
              <div className={`chat-bubble chat-bubble--${from === 'me' ? 'sent' : 'received'}`}
                style={{ whiteSpace: 'pre-line' }}>
                {text}
              </div>
              <span style={{ fontSize: 10, color: '#999', marginTop: 2 }}>{time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div style={{
        position: 'absolute', bottom: 34, left: 0, right: 0, height: 58,
        display: 'flex', alignItems: 'center', padding: '0 20px', gap: 10,
      }}>
        <div style={{
          flex: 1, height: 46, background: '#eee', border: '2px solid #e6e6e6',
          borderRadius: 30, display: 'flex', alignItems: 'center', padding: '0 16px',
        }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send()}
            placeholder="메세지를 입력하세요"
            style={{
              flex: 1, background: 'none', border: 'none', outline: 'none',
              fontSize: 15, fontFamily: 'var(--font-base)', color: '#000',
              letterSpacing: -0.3,
            }}
          />
        </div>
        <button onClick={send} style={{ width: 32, height: 32, background: 'none', border: 'none', cursor: 'pointer' }}>
          <SendIcon />
        </button>
      </div>

      <HomeIndicator />
    </div>
  );
}
