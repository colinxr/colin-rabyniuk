const Loading = () => (
  <div className="loading-card">
    <h2 className="loading-card__title"></h2>
    <p className="loading-card__meta"></p>
    <p className="loading-card__body"></p>
    <style jsx>{`
      .loading-card {
        overflow: hidden;
        background: white;
      }

      .loading-card > * { 
        background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 40px, #ddd 80px);
        animation: loading 1.6s infinite linear;
      }

      .loading-card > * + * { margin-top: .5rem; }

      .loading-card + .loading-card { margin-top: 3rem; }
      
      .loading-card__title { height: 2.5rem; }
      
      .loading-card__meta { height: 1rem; }
      
      .loading-card__body { height: 1.5rem; }

      @keyframes loading {
        0% { background-position: 0px }
  
        100% { background-position: 250px }
      }
    `}</style>
  </div>
)

export default Loading