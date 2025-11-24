const formatGuestName = (raw) =>
  raw
    .replace(/[\s_]+/g, ' ')
    .split('-')
    .join(' ')
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const getGuestNameFromPath = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  const segments = window.location.pathname.split('/').filter(Boolean);
  if (!segments.length) {
    return null;
  }
  const slug = decodeURIComponent(segments[segments.length - 1]).trim();
  if (!slug) {
    return null;
  }
  const sanitized = slug.replace(/[^0-9A-Za-zÀ-ỹ\s\-'_]/g, ' ').trim();
  if (!sanitized) {
    return null;
  }
  return formatGuestName(sanitized);
};

const InviteCard = () => {
  const highlightImage = './image/4eecfea8-0251-4fb5-9fc2-b7ce11494461.jpeg';
  const guestName = React.useMemo(() => getGuestNameFromPath(), []);
  const guestLabel = guestName || 'mọi người';
  return (
    <div className="poster">
      <Snowflakes />
      <div className="poster__frame">
        <p className="poster__invite">Mời mọi người đến tham dự</p>
        <div className="poster__visual">
          <div className="poster__halo">
            <img src={highlightImage} alt="Khoảnh khắc tốt nghiệp" />
          </div>
        </div>
        <div className="poster__date-pill">Ngày 29/11/2025</div>
        <h1 className="poster__title">
          Lễ Tốt Nghiệp
          <span>của Thịnh</span>
        </h1>
        <div className="poster__guest-pill">
          <span>Thân gửi</span>
          <strong>{guestLabel}</strong>
        </div>
        <p className="poster__message">Sự hiện diện của mọi người sẽ khiến buổi lễ thêm trọn vẹn!</p>

        <div className="poster__info-grid">
          <div className="poster__info-card">
            <span className="poster__info-label">Địa điểm</span>
            <p>Trường Đại học Khoa học Tự nhiên</p>
            <p>227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP. Hồ Chí Minh</p>
            <p>
              Bản đồ:{' '}
              <a
                href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyBggAEEUYOTINCAEQLhivARjHARiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDQ0MzdqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=vn&sa=X&geocode=KWHpplMZL3UxMXW5EBVPM37H&daddr=Ph%C6%B0%E1%BB%9Dng+4,+District+5,+Ho+Chi+Minh+City"
                target="_blank"
                rel="noreferrer"
              >
                Google Maps
              </a>
            </p>
          </div>
          <div className="poster__info-card">
            <span className="poster__info-label">Thời gian</span>
            <p>Thứ Bảy, 29/11/2025</p>
            <p>10:00 – 12:00</p>
          </div>
          <div className="poster__info-card">
            <span className="poster__info-label">Liên hệ</span>
            <p>SĐT: 0843.174.369</p>
          </div>
        </div>

        <div className="poster__note">
          Mọi người có thể gửi xe tại trường ĐH Khoa học Tự nhiên nhưng nếu hết chỗ thì có thể gửi tại <strong>THPT chuyên Lê Hồng Phong</strong> (bên phải cổng nhà giữ xe Trường ĐH Khoa học Tự
          nhiên khoảng 10m) hoặc bãi giữ xe <strong>NOWZONE</strong> đối diện cổng trường Lê Hồng Phong.
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <div className="page-wrapper">
    <InviteCard />
  </div>
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

