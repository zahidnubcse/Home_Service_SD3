 import React, { useEffect } from 'react';
 
 const AppSection = () => {

    useEffect(() => {
          window.scrollTo(0, 0); // Scrolls to top when page loads
        }, []);
    return (
        <div className='min-h-screen text-3xl font-bold flex flex-col items-center justify-center p-6 mt-10'>
           <div>
           <h2>App section is under <span className='text-primary'>Development.</span></h2>
           </div>
           <div>
            <h2>
                <span className='text-primary'>Thanks</span> for visit our website!!
            </h2>
           </div>
        </div>
        
    );
 };
 
 export default AppSection;