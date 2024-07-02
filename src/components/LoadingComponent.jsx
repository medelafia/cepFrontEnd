export default function LoadingComponent() {
  return (
    <div className="d-flex my-5 py-3 align-items-center justify-content-center flex-column">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p className="text-secondary my-3">loading...</p>
    </div>
  );
}
