

function ProfileComponent() {
  return (
    <div>
      {/* Profile */}
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow mr-2">
        <img
          src="/intro/profile.png"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProfileComponent;
