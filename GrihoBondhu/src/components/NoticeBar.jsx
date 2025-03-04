import React from 'react';

const NoticeBar = () => {
  const notices = [
    '🎉 Special Offer!',
    ' Get 20% off on all services. Limited time only!!',
    '🎉 Special Offer!',
    ' Get 20% off on all services. Limited time only!!',
    '🎉 Special Offer!',
    ' Get 20% off on all services. Limited time only!!',
    '🎉 Special Offer!',
    ' Get 20% off on all services. Limited time only!!',
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="bg-primary text-white py-2 overflow-hidden relative mt-4 rounded-sm">
        <div className="whitespace-nowrap animate-marquee">
          {notices.map((notice, index) => (
            <span key={index} className="mx-8 inline-block">
              {notice}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;
