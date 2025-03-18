import Image from 'next/image';
import React from 'react';
import profile from '@/public/assets/이준영.jpg';

const Profile = () => {
  return (
    <div className="p-1 rounded-full shadow-2xl bg-white">
      <Image
        src={profile}
        alt="profile"
        className="object-cover size-[200px] rounded-full"
      />
    </div>
  );
};

export default Profile;
