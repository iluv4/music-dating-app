import { useNavigate, useLocation } from 'react-router-dom';

const IconHome = ({ active }) => (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
    <path d="M13.5 2L3 11V25H10V17H17V25H24V11L13.5 2Z"
      fill={active ? '#ff625d' : '#b0b8c1'} />
  </svg>
);

const IconHeart = ({ active }) => (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
    <path d="M13.5 23S4 17 4 10.5C4 7.5 6.5 5 9.5 5C11.2 5 12.8 5.9 13.5 7.2C14.2 5.9 15.8 5 17.5 5C20.5 5 23 7.5 23 10.5C23 17 13.5 23 13.5 23Z"
      fill={active ? '#ff625d' : '#b0b8c1'} />
  </svg>
);

const IconChat = ({ active }) => (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
    <path d="M4 4H23V19H15L9 24V19H4V4Z"
      fill={active ? '#ff625d' : '#b0b8c1'} />
  </svg>
);

const IconPerson = ({ active }) => (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
    <circle cx="13.5" cy="9" r="5" fill={active ? '#ff625d' : '#b0b8c1'}/>
    <path d="M4 23C4 19 8.4 16 13.5 16C18.6 16 23 19 23 23H4Z"
      fill={active ? '#ff625d' : '#b0b8c1'}/>
  </svg>
);

const tabs = [
  { label: '홈', icon: IconHome, path: '/home' },
  { label: '탐색', icon: IconHeart, path: '/explore' },
  { label: '채팅', icon: IconChat, path: '/chat' },
  { label: '마이', icon: IconPerson, path: '/my-page' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="bottom-nav">
      {tabs.map(({ label, icon: Icon, path }) => {
        const active = pathname === path || (path === '/home' && pathname === '/');
        return (
          <button
            key={label}
            className={`bottom-nav__item${active ? ' bottom-nav__item--active' : ''}`}
            onClick={() => navigate(path)}
          >
            <div className="bottom-nav__icon">
              <Icon active={active} />
            </div>
            <span className="bottom-nav__label">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
