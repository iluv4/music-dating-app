export default function HomeIndicator({ bg = '#fff' }) {
  return (
    <div className="home-indicator" style={{ background: bg }}>
      <div className="home-indicator__bar" />
    </div>
  );
}
