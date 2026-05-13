import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';
import PageHeader from '../components/PageHeader';

const STEPS = {
  13: {
    dots: [1, 0, 0, 0],
    heading: ['기본 ', '프로필 정보', '를 '],
    heading2: '작성해주세요!',
    subtitle: '가입을 위한 이름,성별 및 나이를 작성해주세요.',
    fields: ['name', 'year', 'gender'],
    next: '/profile/14',
  },
  14: {
    dots: [1, 1, 0, 0],
    heading: ['기본 ', '연락처', '를 '],
    heading2: '작성해주세요!',
    subtitle: '연락 가능한 번호를 입력해주세요.',
    fields: ['phone'],
    next: '/profile/15',
  },
  15: {
    dots: [1, 1, 1, 0],
    heading: ['기본 ', '학교 정보', '를 '],
    heading2: '작성해주세요!',
    subtitle: '재학 중인 학교명과 학과를 입력해주세요.',
    fields: ['school', 'major'],
    next: '/profile/16',
  },
  16: {
    dots: [1, 1, 1, 1],
    heading: ['', '학번/입금자명', '을 '],
    heading2: '작성해주세요!',
    subtitle: '매칭 확인에 사용될 정보를 입력해주세요.',
    fields: ['studentId', 'depositor'],
    next: '/profile/17',
  },
  17: {
    dots: [1, 1, 1, 1],
    heading: ['', '추가 정보', '를 '],
    heading2: '작성해주세요!',
    subtitle: 'MBTI와 키를 입력해주세요.',
    fields: ['mbti', 'height'],
    next: '/profile/18',
  },
  18: {
    dots: [1, 1, 1, 1],
    heading: ['', '입금 완료 여부', '를 '],
    heading2: '확인해주세요!',
    subtitle: '아래 계좌로 입금 후 확인해주세요.',
    fields: ['payment'],
    next: '/profile/19',
  },
  19: {
    dots: [1, 1, 1, 1],
    heading: ['', '프로필 사진', '을 '],
    heading2: '업로드해주세요!',
    subtitle: '나를 잘 나타내는 사진을 업로드해주세요.',
    fields: ['photo'],
    next: '/genre-select',
  },
};

const DropdownIcon = () => (
  <svg width="11" height="6" viewBox="0 0 11 6" fill="none">
    <path d="M1 1L5.5 5L10 1" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GenderIcon = ({ type }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginLeft: 6 }}>
    {type === 'male' ? (
      <>
        <circle cx="11" cy="7" r="5.5" stroke="#cfcfcf" strokeWidth="1.5"/>
        <line x1="6.5" y1="11.5" x2="2" y2="16" stroke="#cfcfcf" strokeWidth="1.5" strokeLinecap="round"/>
      </>
    ) : (
      <>
        <circle cx="9" cy="7" r="5.5" stroke="#cfcfcf" strokeWidth="1.5"/>
        <line x1="9" y1="12" x2="9" y2="17" stroke="#cfcfcf" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="6" y1="15" x2="12" y2="15" stroke="#cfcfcf" strokeWidth="1.5" strokeLinecap="round"/>
      </>
    )}
  </svg>
);

export default function Profile() {
  const navigate = useNavigate();
  const { step } = useParams();
  const stepNum = parseInt(step, 10);
  const config = STEPS[stepNum] || STEPS[13];

  const [values, setValues] = useState({
    name: '', year: '', gender: '',
    phone: '', school: '', major: '',
    studentId: '', depositor: '',
    mbti: '', height: '',
  });

  const set = (k, v) => setValues(p => ({ ...p, [k]: v }));

  const hasValue = config.fields.some(f => values[f]?.length > 0);

  const renderField = (field) => {
    switch (field) {
      case 'name':
        return (
          <div key="name" style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, letterSpacing: -0.32 }}>이름</p>
            <input className="input-field" placeholder="홍길동" value={values.name} onChange={e => set('name', e.target.value)} />
          </div>
        );
      case 'year':
        return (
          <div key="year" style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, letterSpacing: -0.32 }}>태어난 연도</p>
            <div style={{ position: 'relative' }}>
              <select className="input-field" style={{ appearance: 'none', paddingRight: 40 }}
                value={values.year} onChange={e => set('year', e.target.value)}>
                <option value="">연도선택</option>
                {Array.from({ length: 30 }, (_, i) => 2006 - i).map(y => (
                  <option key={y} value={y}>{y}년</option>
                ))}
              </select>
              <div style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <DropdownIcon />
              </div>
            </div>
          </div>
        );
      case 'gender':
        return (
          <div key="gender">
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, letterSpacing: -0.32 }}>성별</p>
            <div style={{ display: 'flex', gap: 9 }}>
              {[{ val: 'male', label: '남성', type: 'male' }, { val: 'female', label: '여성', type: 'female' }].map(({ val, label, type }) => (
                <button key={val} onClick={() => set('gender', val)} style={{
                  flex: 1, height: 60, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `2px solid ${values.gender === val ? '#ff625d' : '#dfdfdf'}`,
                  background: '#fff', fontSize: 18, fontWeight: 600,
                  color: values.gender === val ? '#ff625d' : '#cfcfcf',
                  letterSpacing: -0.36, gap: 4,
                }}>
                  {label}<GenderIcon type={type} />
                </button>
              ))}
            </div>
          </div>
        );
      case 'phone':
        return (
          <div key="phone" style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, letterSpacing: -0.32 }}>연락처</p>
            <input className="input-field" placeholder="010-0000-0000" value={values.phone} onChange={e => set('phone', e.target.value)} />
          </div>
        );
      case 'school':
        return (
          <div key="school" style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, letterSpacing: -0.32 }}>학교</p>
            <input className="input-field" placeholder="상명대학교 천안" value={values.school} onChange={e => set('school', e.target.value)} />
          </div>
        );
      case 'major':
        return (
          <div key="major">
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, letterSpacing: -0.32 }}>학과</p>
            <input className="input-field" placeholder="커뮤니케이션 디자인" value={values.major} onChange={e => set('major', e.target.value)} />
          </div>
        );
      case 'studentId':
        return (
          <div key="studentId" style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, letterSpacing: -0.32 }}>학번</p>
            <input className="input-field" placeholder="20XXXXXX" value={values.studentId} onChange={e => set('studentId', e.target.value)} />
          </div>
        );
      case 'depositor':
        return (
          <div key="depositor">
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, letterSpacing: -0.32 }}>입금자명</p>
            <input className="input-field" placeholder="홍길동" value={values.depositor} onChange={e => set('depositor', e.target.value)} />
          </div>
        );
      case 'mbti':
        return (
          <div key="mbti" style={{ marginBottom: 24 }}>
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, letterSpacing: -0.32 }}>MBTI</p>
            <input className="input-field" placeholder="INFP" value={values.mbti} onChange={e => set('mbti', e.target.value)} />
          </div>
        );
      case 'height':
        return (
          <div key="height">
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, letterSpacing: -0.32 }}>키</p>
            <input className="input-field" placeholder="170cm" value={values.height} onChange={e => set('height', e.target.value)} />
          </div>
        );
      case 'payment':
        return (
          <div key="payment" style={{ marginBottom: 24 }}>
            <div style={{
              width: '100%', padding: '20px', background: '#f9f9f9', borderRadius: 12,
              border: '1px solid #e0e0e0', marginBottom: 16,
            }}>
              <p style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>입금 계좌</p>
              <p style={{ fontSize: 18, fontWeight: 700 }}>카카오뱅크 1234-5678-9012</p>
              <p style={{ fontSize: 14, color: '#888', marginTop: 4 }}>예금주: 멋쟁이사자처럼</p>
            </div>
            <button
              onClick={() => set('payment', 'done')}
              style={{
                width: '100%', height: 52, background: values.payment === 'done' ? '#ff625d' : '#f0f0f0',
                borderRadius: 10, fontSize: 16, fontWeight: 600,
                color: values.payment === 'done' ? '#fff' : '#999',
                border: 'none', cursor: 'pointer',
              }}
            >
              {values.payment === 'done' ? '✓ 입금 완료' : '입금 완료했어요'}
            </button>
          </div>
        );
      case 'photo':
        return (
          <div key="photo" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 180, height: 180, borderRadius: 12,
              background: '#f0f0f0', border: '2px dashed #dfdfdf',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', gap: 8,
            }} onClick={() => set('photo', 'uploaded')}>
              {values.photo ? (
                <p style={{ fontSize: 16, color: '#ff625d', fontWeight: 600 }}>✓ 업로드 완료</p>
              ) : (
                <>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19" stroke="#dfdfdf" strokeWidth="2"/>
                    <line x1="20" y1="12" x2="20" y2="28" stroke="#dfdfdf" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="12" y1="20" x2="28" y2="20" stroke="#dfdfdf" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p style={{ fontSize: 13, color: '#bbb' }}>사진 업로드</p>
                </>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="screen" style={{ minHeight: 844 }}>
      <StatusBar />
      <PageHeader />

      {/* Progress bar placeholder */}
      <div style={{ position: 'absolute', top: 71, left: 111, width: 168, height: 29, background: '#e7e7e7', borderRadius: 4 }} />

      {/* Step dots */}
      <div style={{ position: 'absolute', top: 169, left: 25, display: 'flex', gap: 20 }}>
        {config.dots.map((active, i) => (
          <div key={i} className={`step-dot${active ? ' step-dot--active' : ''}`} />
        ))}
      </div>

      {/* Heading */}
      <div style={{ position: 'absolute', top: 211, left: 25 }}>
        <p className="onboarding-heading">
          {config.heading[0]}
          <span className="accent">{config.heading[1]}</span>
          {config.heading[2]}
        </p>
        <p className="onboarding-heading">{config.heading2}</p>
      </div>

      <p style={{ position: 'absolute', top: 287, left: 25, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.3, letterSpacing: -0.32 }}>
        {config.subtitle}
      </p>

      {/* Fields */}
      <div style={{ position: 'absolute', top: 328, left: 25, right: 25 }}>
        {config.fields.map(f => renderField(f))}
      </div>

      {/* CTA */}
      <button
        className={`btn-primary${hasValue ? '' : ' btn-primary--disabled'}`}
        style={{ position: 'absolute', bottom: 62, left: 20 }}
        onClick={() => hasValue && navigate(config.next)}
      >
        다음으로
      </button>

      <HomeIndicator />
    </div>
  );
}
