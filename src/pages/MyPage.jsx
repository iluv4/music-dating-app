import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import BottomNav from '../components/BottomNav';
import PageHeader from '../components/PageHeader';

const characterImg = "https://www.figma.com/api/mcp/asset/94d549cc-6e4e-4e3c-8592-e445e0939c54";
const albumImg = "https://www.figma.com/api/mcp/asset/a198ed52-b66a-4ca7-badc-42b36a1e98d1";

const userInfo = [
  { label: '이름', value: '김민수' },
  { label: '나이', value: '2002년' },
  { label: '성별', value: '여자' },
  { label: '학교', value: '상명대학교 천안' },
  { label: '학과', value: '커뮤니케이션 디자인' },
  { label: '입금자명', value: '김민수' },
];

export default function MyPage() {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  return (
    <div className="screen" style={{ minHeight: 844 }}>
      <StatusBar />
      <PageHeader title="마이 페이지" />

      {/* Avatar */}
      <div style={{
        position: 'absolute', top: 147, left: '50%', transform: 'translateX(-50%)',
        width: 143, height: 143, borderRadius: '50%', background: '#ffeeed',
        overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      }}>
        <img src={characterImg} alt="avatar" style={{ width: '100%', objectFit: 'cover' }} />
      </div>

      {/* Name */}
      <p style={{
        position: 'absolute', top: 310, left: '50%', transform: 'translateX(-50%)',
        fontSize: 28, fontWeight: 700, letterSpacing: -0.56, whiteSpace: 'nowrap',
      }}>김민수</p>

      {/* Edit button */}
      <button
        style={{
          position: 'absolute', top: 360, left: '50%', transform: 'translateX(-50%)',
          width: 126, height: 40, background: '#ff625d', borderRadius: 20,
          fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: -0.32, border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => setEditing(!editing)}
      >
        내 정보 수정
      </button>

      {/* Song card */}
      <div style={{
        position: 'absolute', top: 423, left: 25, right: 25,
        border: '1.5px solid #dfdfdf', borderRadius: 12,
        height: 70, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 12,
      }}>
        <img src={albumImg} alt="album" style={{ width: 48, height: 48, borderRadius: 4, objectFit: 'cover' }} />
        <div>
          <p style={{ fontSize: 16, fontWeight: 500, lineHeight: '28px', letterSpacing: -0.48 }}>chance with you</p>
          <p style={{ fontSize: 13, color: '#949494' }}>mehro</p>
        </div>
      </div>

      {/* Info list */}
      <div style={{
        position: 'absolute', top: 554, left: 25, right: 25,
        border: '1.5px solid #dfdfdf', borderRadius: 8,
      }}>
        {userInfo.map(({ label, value }, i) => (
          <div key={label} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '0 16px', height: 37,
            borderBottom: i < userInfo.length - 1 ? '1px solid #f0f0f0' : 'none',
          }}>
            <span style={{ fontSize: 16, fontWeight: 500, color: '#000', letterSpacing: -0.32 }}>{label}</span>
            {editing ? (
              <input
                defaultValue={value}
                style={{
                  fontSize: 14, color: '#808080', textAlign: 'right',
                  border: 'none', outline: 'none', background: 'transparent',
                  fontFamily: 'var(--font-base)', letterSpacing: -0.32, width: 160,
                }}
              />
            ) : (
              <span style={{ fontSize: 14, color: '#808080', letterSpacing: -0.32 }}>{value}</span>
            )}
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
