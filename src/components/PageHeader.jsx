import { useNavigate } from 'react-router-dom';

const BackIcon = () => (
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
    <path d="M7 1L1 7L7 13" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function PageHeader({ title, onBack, rightEl }) {
  const navigate = useNavigate();
  const handleBack = onBack || (() => navigate(-1));

  return (
    <div className="page-header">
      <button className="page-header__back" onClick={handleBack}>
        <BackIcon />
      </button>
      {title && <span className="page-header__title">{title}</span>}
      {rightEl && <div style={{ position: 'absolute', right: 20 }}>{rightEl}</div>}
    </div>
  );
}
