export default function Page() {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid #fff;
          width: 200px;
          height: 200px;
        }
        .logo {
          flex: 1 0 0;
          display: flex;
          align-items: center;
          color: #fff;
          font-size: 36px;

          & span {
            margin: 0 8px;
          }
        }
        .text {
          margin: auto 12px 12px;
          font-size: 14px;
          line-height: 1.6;
          color: #fff;
          align-self: flex-start;
          justify-self: flex-end;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <div className="logo">
        <span>{`< {style} >`}</span>
      </div>

      <div className="text">
        <div>styled-jsx</div>
      </div>
    </div>
  );
}
