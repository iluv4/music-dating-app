export default function StatusBar() {
  return (
    <div className="status-bar">
      <span className="status-bar__time">9:41</span>
      <div className="status-bar__icons">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="4" width="3" height="8" rx="1" fill="black"/>
          <rect x="4.5" y="2.5" width="3" height="9.5" rx="1" fill="black"/>
          <rect x="9" y="0.5" width="3" height="11.5" rx="1" fill="black"/>
          <rect x="13.5" y="0" width="3" height="12" rx="1" fill="black" fillOpacity="0.3"/>
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 2.5C10.2 2.5 12.2 3.4 13.6 4.9L15 3.5C13.2 1.6 10.7 0.5 8 0.5C5.3 0.5 2.8 1.6 1 3.5L2.4 4.9C3.8 3.4 5.8 2.5 8 2.5Z" fill="black"/>
          <path d="M8 5.5C9.4 5.5 10.7 6.1 11.6 7L13 5.6C11.7 4.3 9.9 3.5 8 3.5C6.1 3.5 4.3 4.3 3 5.6L4.4 7C5.3 6.1 6.6 5.5 8 5.5Z" fill="black"/>
          <circle cx="8" cy="10" r="1.5" fill="black"/>
        </svg>
        <svg width="26" height="13" viewBox="0 0 26 13" fill="none">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="black" strokeOpacity="0.35"/>
          <rect x="2" y="2" width="18" height="9" rx="2" fill="black"/>
          <path d="M24 4.5V8.5C24.8 8.2 25.5 7.4 25.5 6.5C25.5 5.6 24.8 4.8 24 4.5Z" fill="black" fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}
