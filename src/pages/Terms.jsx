import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import HomeIndicator from '../components/HomeIndicator';
import PageHeader from '../components/PageHeader';

const CheckCircle = ({ checked }) => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
    <circle cx="12.5" cy="12.5" r="11.5" fill={checked ? '#ff625d' : '#e0e0e0'} />
    <path d="M7 12.5L10.5 16L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="6" height="11" viewBox="0 0 6 11" fill="none">
    <path d="M1 1L5 5.5L1 10" stroke="#b0b0b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const termsItems = [
  { id: 'terms', label: '(필수) 이용약관' },
  { id: 'privacy', label: '(필수) 개인정보 수집 및 이용 안내' },
  { id: 'third', label: '(필수) 제 3자 제공 동의' },
];

export default function Terms() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({ all: false, terms: false, privacy: false, third: false });

  const toggle = (id) => {
    if (id === 'all') {
      const newVal = !checked.all;
      setChecked({ all: newVal, terms: newVal, privacy: newVal, third: newVal });
    } else {
      const next = { ...checked, [id]: !checked[id] };
      next.all = next.terms && next.privacy && next.third;
      setChecked(next);
    }
  };

  const allRequired = checked.terms && checked.privacy && checked.third;

  return (
    <div className="screen" style={{ minHeight: 844 }}>
      <StatusBar />
      <PageHeader />

      {/* Progress bar placeholder */}
      <div style={{ position: 'absolute', top: 71, left: 111, width: 168, height: 29, background: '#e7e7e7', borderRadius: 4 }} />

      {/* Step dots */}
      <div style={{ position: 'absolute', top: 169, left: 25, display: 'flex', gap: 20 }}>
        <div className="step-dot step-dot--active" />
        <div className="step-dot" />
        <div className="step-dot" />
        <div className="step-dot" />
      </div>

      {/* Heading */}
      <div style={{ position: 'absolute', top: 211, left: 25 }}>
        <p className="onboarding-heading">
          <span className="accent">약관</span>을{' '}
        </p>
        <p className="onboarding-heading">확인해주세요!</p>
      </div>

      <p style={{ position: 'absolute', top: 287, left: 25, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.3, letterSpacing: -0.32 }}>
        서비스를 시작하기위해 약관을 확인해주세요.
      </p>

      {/* All agree box */}
      <div
        style={{
          position: 'absolute', top: 490, left: 25,
          width: 340, height: 66,
          background: '#f6f6f6', border: '1px solid #dfdfdf', borderRadius: 10,
          display: 'flex', alignItems: 'center', padding: '0 13px', gap: 16,
          cursor: 'pointer',
        }}
        onClick={() => toggle('all')}
      >
        <CheckCircle checked={checked.all} />
        <span style={{ fontSize: 18, fontWeight: 600, color: checked.all ? '#000' : '#9e9e9e', letterSpacing: -0.36 }}>
          약관 전체동의
        </span>
      </div>

      {/* Individual items */}
      {termsItems.map(({ id, label }, i) => (
        <div
          key={id}
          style={{
            position: 'absolute', top: 590 + i * 39, left: 39,
            width: 312,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            cursor: 'pointer',
          }}
          onClick={() => toggle(id)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <CheckCircle checked={checked[id]} />
            <span style={{ fontSize: 18, fontWeight: 400, color: checked[id] ? '#000' : '#9e9e9e', letterSpacing: -0.36 }}>
              {label}
            </span>
          </div>
          <ArrowRight />
        </div>
      ))}

      {/* CTA */}
      <button
        className={`btn-primary${allRequired ? '' : ' btn-primary--disabled'}`}
        style={{ position: 'absolute', bottom: 62, left: 20 }}
        onClick={() => allRequired && navigate('/profile/13')}
      >
        다음으로
      </button>

      <HomeIndicator />
    </div>
  );
}
