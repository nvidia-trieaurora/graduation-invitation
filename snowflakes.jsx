const Snowflakes = () => {
  const snowflakes = React.useMemo(() => {
    const total = 65;
    return Array.from({ length: total }, (_, index) => {
      const startX = Math.random() * 100;
      const drift = Math.random() * 30 - 15;
      const size = 8 + Math.random() * 12;
      const duration = 8 + Math.random() * 10;
      const delay = Math.random() * -15;
      return {
        id: index,
        startX,
        endX: startX + drift,
        duration,
        delay,
        size,
        opacity: 0.35 + Math.random() * 0.5,
      };
    });
  }, []);

  return (
    <div className="snow-layer">
      {snowflakes.map((flake) => (
        <span
          key={flake.id}
          className="snowflake"
          style={{
            '--start-x': `${flake.startX}vw`,
            '--end-x': `${flake.endX}vw`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            fontSize: `${flake.size / 10}rem`,
            opacity: flake.opacity,
          }}
        >
          ✶
        </span>
      ))}
    </div>
  );
};

