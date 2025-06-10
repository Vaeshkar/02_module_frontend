const HomeSignup = () => {
  return (
    <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Stay in the Loop</h2>
        <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-secondary">Subscribe</button>
        </div>
    </div>
  );
}
export default HomeSignup;