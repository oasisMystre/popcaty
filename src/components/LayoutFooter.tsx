export default function LayoutFooter() {
  return (
    <footer className="p-4 md:p-16">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center p-4 bg-gradient-to-r from-primary-dark/50 to-primary-light/50 border border-primary-dark rounded-md">
          <h1 className="flex-1 text-xl">Total Supply</h1>
          <p className="text-xl font-extrabold">1B+</p>
        </div>
        <div className="flex items-center p-4 bg-gradient-to-r from-primary-dark/50 to-primary-light/50 border border-primary-dark rounded-md">
          <h1 className="flex-1 text-xl">Burned supply</h1>
          <p className="text-xl font-extrabold">1M+</p>
        </div>
        <div className="flex items-center p-4 bg-gradient-to-r from-primary-dark/50 to-primary-light/50 border border-primary-dark rounded-md">
          <h1 className="flex-1 text-xl">Tax</h1>
          <p className="text-xl font-extrabold">0/0</p>
        </div>
      </div>
    </footer>
  );
}
